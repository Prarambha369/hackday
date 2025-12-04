import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Download, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is it free?",
      answer: "Yes!! It's free under MHL.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "Not at all! Butwal Hack is designed for hackers of all skill levels. We'll have workshops for beginners and mentors to help you throughout the event.",
    },
    {
      question: "Is it free?",
      answer:
        "No. The pricing details will be revealed soon. Stay tuned for more information!",
    },
    {
      question: "What's the team size requirement?",
      answer:
        "Teams must have a minimum of 2 members and a maximum of 3 members. Come with a pre-formed team or form one during the team formation session on Day 1!",
    },
    {
      question: "What's the judging process?",
      answer:
        "Projects will be judged based on innovation, technical complexity, design, and impact. You'll present your project in a 3-minute demo to our panel of judges.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, chargers, any hardware you want to use, and your student ID. Come prepared for a full 12-hour innovation marathon!",
    },
    {
      question: "What if I have more questions?",
      answer:
        "Feel free to reach out to us at support@butwalhacks.com for quick answers!",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-accent/10 rotate-12 hidden lg:block" />
      <HelpCircle className="absolute bottom-20 right-20 w-20 h-20 text-primary/10 -rotate-12 hidden lg:block" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-black text-foreground font-heading transform rotate-1">
              FAQ of Hack Day Butwal
            </h2>
            <svg className="absolute -bottom-3 right-4 w-2/3 h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,7 Q50,3 100,7 T200,7" stroke="hsl(var(--primary))" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Frequently Asked Questions about Butwal Hack, Nepal's web development and student innovation hackathon 💡
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="border-4 border-foreground bg-card p-8 transform -rotate-1 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-foreground/20">
                  <AccordionTrigger className="text-left font-black text-lg hover:text-primary font-heading py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-medium text-base pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Download button removed as requested */}
      </div>
    </section>
  );
};

export default FAQ;
