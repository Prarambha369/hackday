import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Download, Clock, MapPin } from "lucide-react";

const Schedule = () => {
  const schedule = [
    {
      day: "Day 1",
      title: "Registration + Idea Pitch",
      date: "Friday, June 20, 2025",
      color: "primary",
      rotate: "rotate-2",
      events: [
        { time: "09:00 AM", event: "Registration & Check-in" },
        { time: "10:00 AM", event: "Opening Ceremony" },
        { time: "11:00 AM", event: "Team Formation" },
        { time: "02:00 PM", event: "Idea Pitching Sessions" },
        { time: "04:00 PM", event: "Hacking Begins!" },
      ],
    },
    {
      day: "Day 2",
      title: "Hacking + Mentorship Sessions",
      date: "Saturday, June 21, 2025",
      color: "accent",
      rotate: "-rotate-1",
      events: [
        { time: "09:00 AM", event: "Workshop: Intro to Hackathons" },
        { time: "11:00 AM", event: "Mentor Office Hours" },
        { time: "01:00 PM", event: "Workshop: Rapid Prototyping" },
        { time: "03:00 PM", event: "Continue Hacking" },
        { time: "07:00 PM", event: "Evening Mentorship" },
      ],
    },
    {
      day: "Day 3",
      title: "Demos + Judging + Closing",
      date: "Sunday, June 22, 2025",
      color: "secondary",
      rotate: "rotate-1",
      events: [
        { time: "09:00 AM", event: "Final Sprint" },
        { time: "12:00 PM", event: "Submission Deadline" },
        { time: "01:00 PM", event: "Project Demos" },
        { time: "03:00 PM", event: "Judging" },
        { time: "05:00 PM", event: "Awards & Closing Ceremony" },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-32 right-10 w-24 h-24 border-4 border-primary/10 -rotate-45 hidden lg:block" />
      <Clock className="absolute bottom-20 left-10 w-16 h-16 text-accent/10 rotate-12 hidden lg:block" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-6">
            <h2 className="text-4xl md:text-5xl font-black text-foreground transform -rotate-1">
              Event Schedule
            </h2>
            <div className="absolute -bottom-3 left-0 w-full h-4 bg-primary/20 -rotate-1" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            12 hours of non-stop innovation and learning
          </p>
          
          <div className="bg-card border-4 border-foreground p-8 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">
            <p className="text-6xl font-black text-primary mb-4 font-heading">January 17</p>
            <p className="text-2xl font-bold text-foreground mb-2">Event Date</p>
            <p className="text-lg text-muted-foreground">
              Detailed schedule to be revealed soon. Stay tuned!
            </p>

            <div className="mt-6 flex flex-col items-center gap-4">
              <a
                href="https://events.mlh.io/events/13395-hackday-butwal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="bg-orange-500 hover:bg-orange-600 text-white transform -rotate-1">
                  Register on MLH
                </Button>
              </a>

              <div className="mt-4 text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-primary font-heading mb-2">
                  Venue — Lumbini World School
                </p>

                <a
                  href="https://www.google.com/maps/dir/Lumbini+World+School,+Tilottama/Tilottama+32903/@27.6149174,83.4754816,14.82z/data=!4m13!4m12!1m5!1m1!1s0x39969b1c4e081619:0xa390707f6f2be4bf!2m2!1d83.466295!2d27.5793586!1m5!1m1!1s0x39969b1c4e081619:0xa390707f6f2be4bf!2m2!1d83.466295!2d27.5793586?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-500 hover:underline"
                >
                  <MapPin className="w-5 h-5" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
