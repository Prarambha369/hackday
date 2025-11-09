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
      question: "Who can participate?",
      answer:
        "Any student currently enrolled in high school, college, or university is welcome to participate. You don't need prior hackathon experience!",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "Not at all! Hack Day is designed for hackers of all skill levels. We'll have workshops for beginners and mentors to help you throughout the event.",
    },
    {
      question: "Is it free?",
      answer:
        "Yes! Hack Day is completely free to attend. We'll provide meals, snacks, swag, and all the resources you need to build your project.",
    },
    {
      question: "How do I form a team?",
      answer:
        "Teams can be 1-4 people. You can come with a team or form one during the team formation session on Day 1. We'll help solo participants find teammates!",
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
        "Feel free to reach out to us at team@butwalhacks.com or join our Discord community for quick answers!",
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
              Got Questions?
            </h2>
            <svg className="absolute -bottom-3 right-4 w-2/3 h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,7 Q50,3 100,7 T200,7" stroke="hsl(var(--primary))" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Everything you need to know about Hack Day Butwal 1.0 💡
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

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="transform rotate-1 hover:rotate-0"
          >
            <Download className="mr-2 w-5 h-5" />
            Download Code of Conduct (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
