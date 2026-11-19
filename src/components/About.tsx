import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Sparkles } from "lucide-react";
import { EVENT } from "@/data/event";
import butwalHacksMark from "@/assets/butwal-hacks-mark.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-28 h-28 border-4 border-accent/20 -rotate-12 hidden lg:block" />
      <div className="absolute bottom-10 left-20 w-20 h-20 bg-primary/10 rotate-45 hidden lg:block" />
      <Sparkles className="absolute top-1/3 left-10 w-12 h-12 text-primary/20 animate-pulse hidden lg:block" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative inline-block mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-foreground font-heading transform -rotate-2">
              About HackDay Butwal
            </h2>
            <svg className="absolute -bottom-3 left-4 w-3/4 h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,7 Q50,3 100,8 T200,6" stroke="hsl(var(--primary))" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          
          <div className="mb-12 transform rotate-1">
            <Card className="p-10 border-4 border-foreground bg-card shadow-[10px_10px_0px_0px_hsl(var(--foreground))]">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                HackDay Butwal was a one-day, beginner-friendly <span className="font-black text-primary">student hackathon</span> in Butwal, Nepal, and an
                official <span className="font-black text-primary">Major League Hacking (MLH)</span> event. It brought together <span className="font-black text-primary">creators, developers,
                and innovators</span> to build web apps, AI projects and more, learn from mentors, and connect with Nepal's tech community. 🚀
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          <Card className="h-full flex flex-col p-8 md:p-10 bg-primary/10 border-4 border-foreground transform rotate-1 shadow-[10px_10px_0px_0px_hsl(var(--primary))] hover:shadow-[14px_14px_0px_0px_hsl(var(--primary))] hover:-translate-y-1 transition-all">
            <div className="flex items-start gap-4 mb-6">
              <img
                src={butwalHacksMark}
                alt=""
                className="w-16 h-16 shrink-0 rounded-full border-4 border-foreground bg-white object-contain transform rotate-6"
              />
              <div>
                <h3 className="text-3xl font-black text-foreground font-heading mb-2">
                  What is {EVENT.organizer}?
                </h3>
                <div className="w-24 h-1 bg-primary" />
              </div>
            </div>
            <p className="text-lg text-foreground leading-relaxed mb-8 font-medium flex-1">
              {EVENT.organizer} is a <span className="font-bold">student-run nonprofit</span> from Lumbini Province, Nepal,
              founded in 2024. It runs free hackathons, game jams and hands-on workshops for young builders,
              and organized HackDay Butwal. 🧡
            </p>
            <Button
              variant="outline"
              size="lg"
              className="h-auto whitespace-normal text-center border-4 border-foreground font-bold text-base sm:text-lg px-4 sm:px-8 py-3 shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[3px_3px_0px_0px_hsl(var(--foreground))] hover:translate-x-1 hover:translate-y-1 transition-all transform -rotate-1 hover:rotate-0"
              onClick={() => window.open(EVENT.organizerUrl, '_blank', 'noopener,noreferrer')}
            >
              Learn More About {EVENT.organizer}
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </Card>
          <Card className="h-full flex flex-col p-8 md:p-10 bg-accent/10 border-4 border-foreground transform -rotate-1 shadow-[10px_10px_0px_0px_hsl(var(--accent))] hover:shadow-[14px_14px_0px_0px_hsl(var(--accent))] hover:-translate-y-1 transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-primary border-4 border-foreground flex items-center justify-center transform -rotate-6">
                <ExternalLink className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-foreground font-heading mb-2">
                  What is MLH?
                </h3>
                <div className="w-24 h-1 bg-primary" />
              </div>
            </div>
            <p className="text-lg text-foreground leading-relaxed mb-8 font-medium flex-1">
              Major League Hacking (MLH) is a <span className="font-bold">global organization</span> that supports 
              student hackathons. HackDay Butwal followed MLH's code of conduct, values, and innovation spirit. ✨
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="h-auto whitespace-normal text-center border-4 border-foreground font-bold text-base sm:text-lg px-4 sm:px-8 py-3 shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[3px_3px_0px_0px_hsl(var(--foreground))] hover:translate-x-1 hover:translate-y-1 transition-all transform rotate-1 hover:rotate-0"
              onClick={() => window.open('https://mlh.io', '_blank', 'noopener,noreferrer')}
            >
              Learn More About MLH
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
