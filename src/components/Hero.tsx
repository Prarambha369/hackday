import { Button } from "@/components/ui/button";
import { Plane, Code2, Zap, Trophy } from "lucide-react";
import logo from "@/assets/hack-day-logo-new.png";
import { useState, useEffect } from "react";
import RegistrationForm from "./RegistrationForm";

const Hero = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationPlanes, setCelebrationPlanes] = useState<Array<{ id: number; direction: string; delay: number; rotation: number }>>([]);
  const [showRegistration, setShowRegistration] = useState(false);

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
      {/* Chaotic Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border-4 border-primary/20 rotate-12 animate-tilt hidden lg:block" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 -rotate-45 animate-float hidden lg:block" />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 border-4 border-accent/20 rotate-45 animate-wiggle hidden lg:block" />
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-primary/10 rotate-12 animate-float-reverse hidden lg:block" />

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
              alt="Hack Day Butwal 1.0"
              className="w-full max-w-md h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Subtitle with Underline */}
          <div className="relative inline-block mb-8 animate-fade-in">
            <p className="text-xl md:text-3xl font-bold text-foreground tracking-tight transform -rotate-1">
              Major Hacking League Season Event
            </p>
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,7 Q50,3 100,7 T200,7" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </svg>
          </div>

          <p className="text-2xl md:text-4xl font-bold text-primary mb-4 transform rotate-1 animate-slide-in-right">
            Ready to make your plane fly?
          </p>

          <p className="text-base md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's do it in the hackathon! Join Nepal's brightest student innovators for 12 hours of hacking, learning, and building impactful projects.
          </p>

          {/* CTA Buttons - Non-uniform */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-lg px-10 py-6 font-bold transform -rotate-2 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1"
              onClick={() => setShowRegistration(true)}
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 font-bold border-4 transform rotate-1 hover:rotate-0 transition-all border-foreground shadow-[6px_6px_0px_0px_hsl(var(--primary))] hover:shadow-[3px_3px_0px_0px_hsl(var(--primary))] hover:translate-x-1 hover:translate-y-1"
              onClick={() => {
                const event = {
                  title: "Hack Day Butwal 1.0",
                  description: "12-hour hackathon - Build, Learn, Win!",
                  location: "Butwal, Nepal",
                  startDate: "2025-11-15T09:00:00",
                  endDate: "2025-11-15T21:00:00"
                };
                const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.startDate.replace(/[-:]/g, '')}
DTEND:${event.endDate.replace(/[-:]/g, '')}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;
                const blob = new Blob([icsContent], { type: 'text/calendar' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'hack-day-butwal.ics';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Add to Calendar
            </Button>
          </div>

          {/* Event Info - Tilted Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border-4 border-foreground p-6 transform -rotate-2 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
              <p className="text-5xl font-black text-primary mb-3 font-heading">12</p>
              <p className="text-xl font-bold text-foreground">Hours</p>
              <p className="text-sm text-muted-foreground mt-1">Of Innovation</p>
            </div>
            <div className="bg-card border-4 border-foreground p-6 transform rotate-1 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
              <p className="text-5xl font-black text-primary mb-3 font-heading">48+</p>
              <p className="text-xl font-bold text-foreground">Hackers</p>
              <p className="text-sm text-muted-foreground mt-1">Participants</p>
            </div>
            <div className="bg-card border-4 border-foreground p-6 transform -rotate-1 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
              <p className="text-5xl font-black text-primary mb-3 font-heading">🎁</p>
              <p className="text-xl font-bold text-foreground">E-gadgets</p>
              <p className="text-sm text-muted-foreground mt-1">To be revealed soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-primary/10 -rotate-12 hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/5 rotate-45 hidden lg:block" />

      {/* Registration Form */}
      <RegistrationForm open={showRegistration} onOpenChange={setShowRegistration} />
    </section>
  );
};

export default Hero;
