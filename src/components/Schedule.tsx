import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";
import { EVENT } from "@/data/event";

const Schedule = () => {
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
            {EVENT.durationHours} hours of non-stop innovation and learning, {EVENT.dateLong}
          </p>
          
          <div className="bg-card border-4 border-foreground p-8 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">
            <p className="text-6xl font-black text-primary mb-4 font-heading">{EVENT.dateLabel}</p>
            <p className="text-2xl font-bold text-foreground mb-2">Event Date</p>
            <p className="text-lg text-muted-foreground">
              Held on {EVENT.dateLong} at {EVENT.venue}, Tilottama.
            </p>

            <div className="mt-6 flex flex-col items-center gap-4">
              <a
                href={EVENT.links.mlh}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="bg-orange-500 hover:bg-orange-600 text-white transform -rotate-1">
                  View on MLH
                </Button>
              </a>

              <div className="mt-4 text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-primary font-heading mb-2">
                  Venue — {EVENT.venue}
                </p>

                <a
                  href={EVENT.links.maps}
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
