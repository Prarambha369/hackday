import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const ALLOWED_ORIGINS = new Set([
  "https://hackday.butwalhacks.com",
  "https://hackday-navy.vercel.app",
  "http://localhost:8080",
]);

const MAX_MESSAGES = 12;
const MAX_CHARS = 1000;
const MAX_BODY_BYTES = 64 * 1024;

class PayloadTooLargeError extends Error {}

/** Read the body while counting bytes actually received; abort once the limit is exceeded. */
const readBodyLimited = async (req: Request, limit: number): Promise<string> => {
  const declared = Number(req.headers.get("content-length"));
  if (Number.isFinite(declared) && declared > limit) throw new PayloadTooLargeError();
  if (!req.body) return "";

  const reader = req.body.getReader();
  const chunks: Uint8Array[] = [];
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    received += value.byteLength;
    if (received > limit) {
      await reader.cancel().catch(() => {});
      throw new PayloadTooLargeError();
    }
    chunks.push(value);
  }
  const buf = new Uint8Array(received);
  let offset = 0;
  for (const c of chunks) { buf.set(c, offset); offset += c.byteLength; }
  return new TextDecoder().decode(buf);
};

type ChatMessage = { role: "user" | "assistant"; content: string };

const corsFor = (origin: string | null) => ({
  "Access-Control-Allow-Origin": origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://hackday.butwalhacks.com",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Vary": "Origin",
});

/** Keep only user/assistant turns (no client-supplied system prompts), cap count and length. */
const sanitize = (input: unknown): ChatMessage[] | null => {
  if (!Array.isArray(input)) return null;
  const msgs = input
    .filter((m): m is ChatMessage =>
      !!m && typeof m === "object" &&
      (m.role === "user" || m.role === "assistant") &&
      typeof m.content === "string" && m.content.trim().length > 0)
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));
  return msgs.length && msgs[msgs.length - 1].role === "user" ? msgs : null;
};

serve(async (req) => {
  const origin = req.headers.get("origin");
  const corsHeaders = corsFor(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST" || (origin && !ALLOWED_ORIGINS.has(origin))) {
    return new Response(JSON.stringify({ error: "Forbidden" }), {
      status: 403,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    let raw: string;
    try {
      raw = await readBodyLimited(req, MAX_BODY_BYTES);
    } catch (e) {
      if (e instanceof PayloadTooLargeError) {
        return new Response(JSON.stringify({ error: "Payload too large" }), {
          status: 413,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw e;
    }
    let body: { messages?: unknown } | null = null;
    try { body = JSON.parse(raw); } catch { body = null; }
    const messages = sanitize(body?.messages);
    if (!messages) {
      return new Response(JSON.stringify({ error: "Invalid request" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

        const systemPrompt = `You are an assistant for "HackDay Butwal" — the official event presented on the website. Use the information below when answering and always be concise and factual. If you cannot confirm an item, tell the user to contact the organizers at support@butwalhacks.com.

PRIMARY BRANDING & ASSETS:
- Event name: HackDay Butwal
- Tagline/theme: Creativity with caffeine ☕
- Top-left logo asset (repo): src/assets/butwal-hacks-mark.png
- Hero/center logo asset (repo): src/assets/hackday-logo.png
- Favicon (served): /favicon.png (currently set to the top-left image)

STATUS:
- The event already took place on 2026-01-17. Registration is closed.
- Submitted projects: https://butwal.devpost.com/project-gallery
- For upcoming events, point users to Butwal Hacks: https://www.butwalhacks.com/events

EVENT BASICS:
- Venue: Lumbini World School, Tilottama (Butwal area), Nepal
- Date: 2026-01-17
- Time (local): 08:00 — 18:00 (Asia/Kathmandu, NPT)
- Duration: 10 hours

SUGGESTED SCHEDULE (use NPT when presenting times):
- 08:00 — Registration & Breakfast
- 09:00 — Opening Ceremony
- 10:00 — Hacking Begins
- 13:00 — Lunch
- 15:00 — Mentoring
- 17:30 — Project Submission Deadline
- 18:00 — Closing & Awards

ELIGIBILITY & TEAMS:
- Audience: students (high school, college, university)
- Team size: commonly 2–3 members; direct users to Devpost for official rules

THEME:
- "Creativity with caffeine ☕" (Devpost tags: Web, Low/No Code, Beginner Friendly)

JUDGING (from Devpost):
- Criteria: Problem-Solving, Designing, Presentation, Creativity, Concept
- Judges: Vishal Shrestha (iCAN Education Services), Gaurav Giri (NotionKec), Madhav Poudel (CSIT Association of Nepal, Rupandehi)

SPONSORS & PARTNERS: Title Sponsor iCAN Education Services; Silver Sponsor 36 Riverside; Bronze Sponsor Al Qayyoom Biryani. Partners: Major League Hacking and Google Gemini (event partners), Tilottama Municipality (government patron), Lumbini World School (venue), Notion, GitHub Education, gen.xyz, Friends Cinemas, Nayan Eye Care Center, Bhoj Deals, Singapore Beverages Nepal, Al-Habibi. Community: GDG Kathmandu, Lumbini Lions, CSIT Association of Nepal Rupandehi, CSIT Association of BMC

LOGISTICS & WHAT TO BRING:
- Laptop, chargers, any hardware you intend to use, and student ID
- Meals and snacks are provided

PRIZES & WINNERS (from Devpost; ₹22,221+ total, 16 projects submitted):
- 1st Prize ₹11,111 + ElevenLabs Pro (3 months) for the team: Swasthya Sathi – Healthcare Journey Manager
- 2nd Prize ₹7,777: CodeMentor
- 3rd Prize ₹3,333: Sanket
- Best Use of Gemini API (Google swag): Pet Care
- Best Project Built with ElevenLabs (6 months ElevenLabs Scale): civic sewa
- All participants: 3 months ElevenLabs Creator Tier and a .xyz domain (up to $10)
- Do not invent other prizes, amounts or winners

SPONSORSHIP:
- Sponsorship contact: mail@butwalhacks.com (sponsorship deck download was removed; contact via email)

SOCIAL / COMMUNICATION:
- The site no longer links to Discord or Facebook; do not provide Discord invites
- Instagram or other social links may be present on the site; point users to the site footer for social links

CONTACT:
- General / attendee questions: support@butwalhacks.com
- Sponsor inquiries: mail@butwalhacks.com

ASSISTANT BEHAVIOR:
- Use Asia/Kathmandu (NPT) when interpreting or converting event times
- Keep answers concise and helpful. If you lack confirmed information, reply: "I don't have that information — please contact the organizers at support@butwalhacks.com"
- If asked about registering, explain the event is over and point to https://www.butwalhacks.com/events for upcoming events
- If asked about files/assets, reference the repo asset paths above for developers and /favicon.png for the served favicon
`;


    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        temperature: 0.3,
        max_tokens: 400,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI service temporarily unavailable" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const assistantMessage = data?.choices?.[0]?.message?.content ?? "Sorry, I couldn't answer that.";

    return new Response(
      JSON.stringify({ response: assistantMessage }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
