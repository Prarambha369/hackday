import { Card } from "@/components/ui/card";
import { Brain, Code, Cpu, Heart } from "lucide-react";

const Challenges = () => {
  const challenges = [
    {
      icon: Brain,
      title: "AI / ML Innovation",
      description: "Build intelligent solutions using machine learning and AI technologies",
      rotate: "-rotate-2"
    },
    {
      icon: Code,
      title: "Best Beginner Hack",
      description: "Perfect for first-time hackers building their debut project",
      rotate: "rotate-1"
    },
    {
      icon: Cpu,
      title: "Hardware Hero",
      description: "Create innovative solutions combining hardware and software",
      rotate: "-rotate-1"
    },
    {
      icon: Heart,
      title: "Social Impact Award",
      description: "Develop projects that make a positive difference in society",
      rotate: "rotate-2"
    }
  ];

  return (
    <section id="challenges" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/10 -rotate-12 hidden lg:block" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-black text-foreground font-heading transform -rotate-1">
              Challenges & Prizes
            </h2>
            <svg className="absolute -bottom-3 left-0 w-full h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,7 Q50,4 100,7 T200,7" stroke="hsl(var(--accent))" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Compete in multiple tracks and win amazing prizes
          </p>
        </div>

        <div className="text-center bg-accent/10 border-4 border-foreground p-8 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto mb-16">
          <p className="text-3xl font-black text-primary mb-4 font-heading">
            Theme Will Be Revealed Soon! 🎯
          </p>
          <p className="text-lg text-muted-foreground">
            Get ready to build something amazing. Use Google Gemini API and other cutting-edge tools!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card border-4 border-foreground p-8 transform -rotate-2 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-6xl mb-4">🥇</div>
            <p className="text-3xl font-black text-primary mb-2 font-heading">1st Place</p>
            <p className="text-lg text-muted-foreground">Certificate + E-gadgets + Prize Money</p>
          </div>

          <div className="bg-card border-4 border-foreground p-8 transform rotate-1 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-6xl mb-4">🥈</div>
            <p className="text-3xl font-black text-primary mb-2 font-heading">2nd Place</p>
            <p className="text-lg text-muted-foreground">Certificate + E-gadgets + Prize Money</p>
          </div>

          <div className="bg-card border-4 border-foreground p-8 transform -rotate-1 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-6xl mb-4">🥉</div>
            <p className="text-3xl font-black text-primary mb-2 font-heading">3rd Place</p>
            <p className="text-lg text-muted-foreground">Certificate + E-gadgets + Prize Money</p>
          </div>
        </div>

        <div className="text-center bg-card border-4 border-foreground p-8 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto">
          <p className="text-2xl font-bold text-foreground mb-4">
            All winners will receive certificates and exclusive Hack Day swag! 🏆
          </p>
          <p className="text-lg text-muted-foreground">
            Prize money details will be announced soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
