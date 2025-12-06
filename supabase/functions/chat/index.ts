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

        const systemPrompt = `You are HackDay Butwal Assistant — a friendly, helpful chatbot for the HackDay Butwal Hackathon.

Your role:
- Answer all questions about HackDay Butwal clearly and politely.
- Provide information on event duration, venue, registration, teams, rules, judging, prizes, mentors, workshops, food, and facilities.
- Keep answers short, simple, and easy to understand.
- If the user asks unrelated questions, politely redirect them back to HackDay Butwal info.

EVENT INFORMATION:
- Event Name: HackDay Butwal – Tech Innovation Hackathon
- Date: 17 Jan, 2026
- Duration: 10 hours
- Time: 08:00 — 18:00 (Asia/Kathmandu, NPT)
- Venue: Lumbini World School, Butwal
- Team Size: 1–3 members (max 3)
- Registration: https://events.mlh.io/events/13395-hackday-butwal
- Focus: Rapid innovation, teamwork, creativity, and problem solving
- Prizes: Certificates, swags, and top team prizes
- Mentors & Workshops: Available throughout the event
- Food & Facilities: Provided, including snacks, meals, Wi-Fi, and resting space

QUICK ANSWERS FOR COMMON QUESTIONS:
- When is the event? → 17 Jan, 2026
- When is HackDay Butwal? → 17 Jan, 2026
- What is the venue? → Lumbini World School, Butwal
- How do I register? → https://events.mlh.io/events/13395-hackday-butwal
- What is the team size? → 1–3 members (solo, duo, or trio allowed)
- What are the rules? → All projects must be built during the 10 hours; no old projects allowed
- How is it judged? → Innovation, Usefulness, Technical Implementation, Presentation
- What prizes are there? → Certificates, swags, and top team prizes
- Are mentors available? → Yes, mentors and workshops are available throughout the event
- Is food provided? → Yes, food, snacks, Wi-Fi, and resting space are provided

STYLE:
- Be friendly, energetic, and motivating
- Speak in simple English (and respond in Nepali if the user writes in Nepali)
- Provide direct, concise answers based on the FAQ information
- For unrelated questions, redirect with: "I can assist you with HackDay Butwal info only. Please ask about the event, venue, rules, or teams!"

SUGGESTED SCHEDULE (NPT):
- 08:00 — Registration & Breakfast
- 09:00 — Opening Ceremony
- 10:00 — Hacking Begins
- 13:00 — Lunch
- 15:00 — Workshops & Mentoring
- 17:30 — Project Submission Deadline
- 18:00 — Closing & Awards

ELIGIBILITY:
- Open to students (high school, college, university)

WHAT TO BRING:
- Laptop, chargers, any hardware you intend to use, and student ID
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
