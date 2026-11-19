import { Button } from "@/components/ui/button";
import { Plane, Code2, Zap, Trophy } from "lucide-react";
import logo from "@/assets/hackday-logo.png";
import { EVENT } from "@/data/event";
import { PRIZE_POOL, PROJECT_COUNT } from "@/data/prizes";
import { useState, useEffect } from "react";

const Hero = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationPlanes, setCelebrationPlanes] = useState<Array<{ id: number; direction: string; delay: number; rotation: number }>>([]);
  

  useEffect(() => {
    // Auto-fly plane animation
    const timer1 = setTimeout(() => {
      setShowLogo(true);
    }, 3000); // Show logo after 3 seconds (when plane reaches right)

    const timer2 = setTimeout(() => {
      setShowCelebration(true);
      // Create 20 celebration planes flying in different directions (north, east, west, northeast, northwest)
      const directions = ['north', 'east', 'west', 'northeast', 'northwest', 'north-east-2', 'north-west-2'];
      const planes = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        direction: directions[Math.floor(Math.random() * directions.length)],
        delay: Math.random() * 0.6, // Random delay for staggered effect
        rotation: Math.random() * 90 - 45, // Random rotation between -45 and 45 degrees
      }));
      setCelebrationPlanes(planes);
    }, 3200); // Start celebration slightly after logo appears

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

      {/* Floating Icons */}
      <div className="absolute top-32 right-1/4 animate-float hidden lg:block">
        <Code2 className="w-12 h-12 text-primary/30 rotate-12" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-float-reverse hidden lg:block">
        <Zap className="w-10 h-10 text-accent/40 -rotate-12" />
      </div>
      <div className="absolute top-1/2 left-10 animate-wiggle hidden lg:block">
        <Trophy className="w-14 h-14 text-primary/25 rotate-6" />
      </div>

      {/* Auto-flying Plane - Starts from middle left and flies to right */}
      <div 
        className="fixed z-50 animate-[fly-across_3s_ease-in-out_forwards]"
        style={{
          left: '-100px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <Plane className="w-24 h-24 md:w-32 md:h-32 text-primary opacity-80 -rotate-12" />
      </div>

      {/* Celebration Planes - Fly in all directions when logo appears */}
      {showCelebration && celebrationPlanes.map((plane) => {
        const getAnimationName = () => {
          switch(plane.direction) {
            case 'north': return 'fly-north';
            case 'east': return 'fly-east';
            case 'west': return 'fly-west';
            case 'northeast': return 'fly-northeast';
            case 'northwest': return 'fly-northwest';
            case 'north-east-2': return 'fly-north-east-2';
            case 'north-west-2': return 'fly-north-west-2';
            default: return 'fly-north';
          }
        };
        
        return (
          <div
            key={plane.id}
            className="fixed z-50"
            style={{
              left: '50%',
              top: '30%',
              animation: `${getAnimationName()} 2.5s ease-out forwards`,
              animationDelay: `${plane.delay}s`,
            }}
          >
            <Plane 
              className="w-6 h-6 text-primary opacity-60" 
              style={{ transform: `rotate(${plane.rotation}deg)` }}
            />
          </div>
        );
      })}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          {/* Logo with Tilt - Pops up when plane launches */}
          <div className={`mb-8 flex justify-center transition-all duration-700 ${showLogo ? 'animate-[scale-in_0.5s_ease-out] opacity-100' : 'opacity-0 scale-50'}`}>
            <img
              src={logo}
              alt={EVENT.name}
              className="w-full max-w-md h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Subtitle with Underline */}
          <div className="relative inline-block mb-8 animate-fade-in">
            <p className="text-xl md:text-3xl font-bold text-foreground tracking-tight transform -rotate-1">
              Major League Hacking Event in Butwal, Nepal
            </p>
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,7 Q50,3 100,7 T200,7" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </svg>
          </div>

          <p className="text-xs md:text-sm uppercase tracking-widest font-bold text-muted-foreground mb-2">Theme</p>
          <p className="text-2xl md:text-4xl font-bold text-primary mb-4 transform rotate-1 animate-slide-in-right">
            {EVENT.theme}
          </p>
          <ul className="flex flex-wrap justify-center gap-3 mb-6" aria-label="Theme tags">
            {EVENT.themeTags.map((tag) => (
              <li key={tag} className="px-3 py-1 border-2 border-foreground bg-accent/20 text-sm font-bold text-foreground">
                {tag}
              </li>
            ))}
          </ul>

          <p className="text-base md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {EVENT.name} by {EVENT.organizer} brought together student builders for {EVENT.durationHours} hours of web development, AI, mobile apps, and innovation. A Major League Hacking (MLH) student hackathon. Here's a look back at the event.
          </p>

          {/* Archive notice + CTAs */}
          <p className="inline-block mb-8 px-5 py-2 border-2 border-foreground bg-primary/10 font-bold text-foreground">
            This event took place on {EVENT.dateLong} at {EVENT.venue}. Thank you to everyone who joined!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              asChild
              className="h-auto max-w-full whitespace-normal sm:whitespace-nowrap text-center text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 font-bold transform -rotate-2 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:translate-x-1 hover:translate-y-1"
            >
              <a href={EVENT.links.projects} target="_blank" rel="noopener noreferrer">View Projects on Devpost</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-auto max-w-full whitespace-normal sm:whitespace-nowrap text-center text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 font-bold border-4 transform rotate-1 hover:rotate-0 transition-all border-foreground shadow-[6px_6px_0px_0px_hsl(var(--primary))] hover:shadow-[3px_3px_0px_0px_hsl(var(--primary))] hover:translate-x-1 hover:translate-y-1"
            >
              <a href={EVENT.upcomingEventsUrl} target="_blank" rel="noopener noreferrer">Upcoming {EVENT.organizer} Events</a>
            </Button>
          </div>

          {/* Event Info - Tilted Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border-4 border-foreground p-6 transform -rotate-2 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1">
              <p className="text-5xl font-black text-primary mb-3 font-heading">{EVENT.durationHours}</p>
              <p className="text-xl font-bold text-foreground">Hours</p>
              <p className="text-sm text-muted-foreground mt-1">Of Innovation</p>
            </div>
            <div className="bg-card border-4 border-foreground p-6 transform rotate-1 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1">
              <p className="text-5xl font-black text-primary mb-3 font-heading">48+</p>
              <p className="text-xl font-bold text-foreground">Hackers</p>
              <p className="text-sm text-muted-foreground mt-1">Participants</p>
            </div>
            <div className="bg-card border-4 border-foreground p-6 transform -rotate-1 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1">
              <p className="text-5xl font-black text-primary mb-3 font-heading">{PRIZE_POOL}</p>
              <p className="text-xl font-bold text-foreground">In Prizes</p>
              <p className="text-sm text-muted-foreground mt-1">{PROJECT_COUNT} projects submitted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Elements (removed to keep section background plain white) */}

    </section>
  );
};

export default Hero;
