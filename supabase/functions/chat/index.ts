import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

        const systemPrompt = `You are an assistant for "Butwal Hack" — the official event presented on the website. Use the information below when answering and always be concise and factual. If you cannot confirm an item, tell the user to contact the organizers at support@butwalhacks.com.

PRIMARY BRANDING & ASSETS:
- Event name: Butwal Hack
- Top-left logo asset (repo): src/assets/579501461_1354121903124379_5661373177081933099_n-removebg-preview.png
- Hero/center logo asset (repo): src/assets/1000015171.png
- Favicon (served): /favicon.png (currently set to the top-left image)

REGISTRATION & LINKS:
- Registration is handled only through Devpost: https://butwal.devpost.com/
- Do not provide any other registration links or local registration endpoints.

EVENT BASICS:
- Location: Butwal, Nepal
- Date: 2026-01-17
- Time (local): 08:00 — 18:00 (Asia/Kathmandu, NPT)
- Duration: 10 hours

SUGGESTED SCHEDULE (use NPT when presenting times):
- 08:00 — Registration & Breakfast
- 09:00 — Opening Ceremony
- 10:00 — Hacking Begins
- 13:00 — Lunch
- 15:00 — Workshops & Mentoring
- 17:30 — Project Submission Deadline
- 18:00 — Closing & Awards

ELIGIBILITY & TEAMS:
- Audience: students (high school, college, university)
- Team size: commonly 2–3 members; direct users to Devpost for official rules

JUDGING CRITERIA:
- Innovation
- Technical complexity
- Design
- Impact

LOGISTICS & WHAT TO BRING:
- Laptop, chargers, any hardware you intend to use, and student ID
- Meals and snacks are provided

PRIZES & SPONSORSHIP:
- Prize details announced by organizers; do not invent amounts or sponsor names
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
- For registration, always direct users to the Devpost page
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
        temperature: 0.7,
        max_tokens: 500,
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
    const assistantMessage = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ response: assistantMessage }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
