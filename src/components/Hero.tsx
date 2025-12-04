import { Button } from "@/components/ui/button";
import { Plane, Code2, Zap, Trophy } from "lucide-react";
import logo from "@/assets/1000015171.png";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

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
              alt="Butwal Hack"
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

          <p className="text-2xl md:text-4xl font-bold text-primary mb-4 transform rotate-1 animate-slide-in-right">
            Web Development & Innovation Hackathon
          </p>

          <p className="text-base md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join Butwal Hack, Nepal's premier hackathon in Butwal! 10 hours of web development, AI, mobile apps, and innovation. Student hackathon featuring MHL challenges. Unite with Nepal's brightest student innovators and builders.
          </p>

          {/* CTA Buttons - Non-uniform */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-lg px-10 py-6 font-bold transform -rotate-2 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1"
              onClick={() => window.open('https://butwal.devpost.com/', '_blank')}
            >
              Register on Devpost
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 font-bold border-4 transform rotate-1 hover:rotate-0 transition-all border-foreground shadow-[6px_6px_0px_0px_hsl(var(--primary))] hover:shadow-[3px_3px_0px_0px_hsl(var(--primary))] hover:translate-x-1 hover:translate-y-1"
              onClick={() => {
                const event = {
                  title: "Butwal Hack",
                  description: "Hackathon - Build, Learn, Win!",
                  location: "Butwal, Nepal",
                  startDate: "2026-01-17T08:00:00",
                  endDate: "2026-01-17T18:00:00"
                };

                const formatLocal = (iso) => {
                  // iso like YYYY-MM-DDTHH:MM:SS
                  return iso.replace(/[-:]/g, '').split('.')[0];
                };

                const dtStart = formatLocal(event.startDate);
                const dtEnd = formatLocal(event.endDate);

                const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Butwal Hack//EN\nCALSCALE:GREGORIAN\nBEGIN:VTIMEZONE\nTZID:Asia/Kathmandu\nX-LIC-LOCATION:Asia/Kathmandu\nBEGIN:STANDARD\nDTSTART:19700101T000000\nTZOFFSETFROM:+0545\nTZOFFSETTO:+0545\nTZNAME:NPT\nEND:STANDARD\nEND:VTIMEZONE\nBEGIN:VEVENT\nDTSTART;TZID=Asia/Kathmandu:${dtStart}\nDTEND;TZID=Asia/Kathmandu:${dtEnd}\nSUMMARY:${event.title}\nDESCRIPTION:${event.description}\nLOCATION:${event.location}\nEND:VEVENT\nEND:VCALENDAR`;

                const blob = new Blob([icsContent], { type: 'text/calendar' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'butwal-hack-20260117.ics';
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
              <p className="text-5xl font-black text-primary mb-3 font-heading">10</p>
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
              <p className="text-xl font-bold text-foreground">Prizes</p>
              <p className="text-sm text-muted-foreground mt-1">To be decided</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Elements (removed to keep section background plain white) */}

      {/* Registration is handled on Devpost (link in Register buttons) */}
    </section>
  );
};

export default Hero;
