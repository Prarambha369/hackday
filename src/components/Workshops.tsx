import { Card } from "@/components/ui/card";
import { BookOpen, Lightbulb, Presentation, Users } from "lucide-react";

const Workshops = () => {
  const workshops = [
    {
      title: "Pitch Like a Pro",
      icon: Presentation,
      time: "To be announced",
      description: "Learn how to present your project effectively and impress the judges",
      rotate: "-rotate-2"
    },
    {
      title: "Building and Deploying Hackathon Projects",
      icon: Lightbulb,
      time: "To be announced",
      description: "Build faster and deploy your hackathon projects with modern tools",
      rotate: "rotate-1"
    },
    {
      title: "Building and Deploying Websites",
      icon: BookOpen,
      time: "To be announced",
      description: "Learn how to build and deploy websites quickly and efficiently",
      rotate: "-rotate-1"
    },
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-28 h-28 bg-primary/5 rotate-45 hidden lg:block" />
      <Users className="absolute bottom-10 left-20 w-16 h-16 text-accent/10 -rotate-12 hidden lg:block" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-black text-foreground font-heading transform -rotate-1">
              Workshops & Mentorship
            </h2>
            <svg className="absolute -bottom-3 left-4 w-3/4 h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,7 Q50,4 100,8 T200,6" stroke="hsl(var(--accent))" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Learn from experts and get guidance throughout the event
          </p>
        </div>

        <div className="text-center bg-accent/10 border-4 border-foreground p-8 transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto mb-16">
          <p className="text-3xl font-black text-primary mb-4 font-heading">
            Workshops Coming Soon! 🚀
          </p>
          <p className="text-lg text-muted-foreground">
            Stay tuned for exciting hands-on workshops to level up your skills!
          </p>
        </div>

        {/* Workshops */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {workshops.map((workshop, index) => (
            <Card 
              key={index} 
              className={`border-4 border-foreground hover:rotate-0 transition-all bg-card shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 ${workshop.rotate}`}
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-accent border-4 border-foreground flex items-center justify-center mb-4 transform -rotate-6">
                  <workshop.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-black mb-2 font-heading">{workshop.title}</h3>
                <p className="text-sm font-bold text-primary mb-3 bg-primary/10 inline-block px-3 py-1 border-2 border-primary/20">
                  {workshop.time}
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {workshop.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Our Team Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h3 className="text-3xl md:text-4xl font-black text-foreground transform rotate-1">
                Meet Our Team
              </h3>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-accent/30 rotate-1" />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-card border-4 border-foreground p-8 transform -rotate-2 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-sm">
              <p className="text-xl text-muted-foreground text-center">Team members will be revealed soon!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
