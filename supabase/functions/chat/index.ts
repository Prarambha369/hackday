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

    const systemPrompt = `You are a helpful assistant for Hack Day Butwal 1.0, a 12-hour hackathon event. Here's key information:

EVENT DETAILS:
- Duration: 12 hours of continuous hacking
- Location: Butwal, Nepal
- Participants: 48+ students from high schools, colleges, and universities
- Date: November 15, 2025 (9 AM - 9 PM)

SCHEDULE:
- 9:00 AM - Registration & Breakfast
- 10:00 AM - Opening Ceremony
- 11:00 AM - Hacking Begins
- 1:00 PM - Lunch
- 3:00 PM - Workshops & Mentoring
- 6:00 PM - Dinner
- 9:00 PM - Project Submissions & Demos
- 10:00 PM - Closing Ceremony

CHALLENGES:
1. AI & Machine Learning
2. Web Development
3. Mobile App Development
4. Hardware & IoT
5. Open Innovation

PRIZES:
- E-gadgets for winners (to be revealed soon)
- Swag and goodies for all participants

REQUIREMENTS:
- Teams of 1-4 people
- Must be a current student
- Free to attend
- Meals and snacks provided
- No sleeping facilities (it's a 12-hour event!)

JUDGING CRITERIA:
- Innovation
- Technical complexity
- Design
- Impact

WHAT TO BRING:
- Laptop and chargers
- Any hardware you want to use
- Student ID

Contact: team@butwalhacks.com

Keep responses concise and helpful. If you don't know something specific, direct them to contact the organizers.`;

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
