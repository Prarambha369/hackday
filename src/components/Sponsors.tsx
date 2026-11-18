import { Button } from "@/components/ui/button";
import { EVENT } from "@/data/event";
import { SPONSORS } from "@/data/sponsors";

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block relative mb-6">
            <h2 className="text-4xl md:text-5xl font-black text-foreground transform -rotate-1">
              Our Sponsors & Partners
            </h2>
            <div className="absolute -bottom-3 left-0 w-full h-4 bg-primary/20 -rotate-1" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partner with {EVENT.organizer} to support innovation and connect
            with Nepal's brightest student developers.
          </p>
        </div>

        <ul className="max-w-5xl mx-auto flex flex-wrap justify-center gap-10 sm:gap-12">
          {SPONSORS.map((sponsor) => (
            <li key={sponsor.logo} className="flex flex-col items-center gap-3">
              <div
                className={`rounded-full overflow-hidden bg-white border-2 border-foreground/10 transition-transform hover:scale-105 ${
                  sponsor.featured ? "w-40 h-40 sm:w-48 sm:h-48" : "w-32 h-32"
                }`}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  title={sponsor.name}
                  loading="lazy"
                  decoding="async"
                  width={500}
                  height={500}
                  className={`w-full h-full ${sponsor.contain ? "object-contain p-2" : "object-cover"}`}
                />
              </div>
              <span className="text-center max-w-[10rem] leading-tight">
                <span className="block text-foreground font-semibold text-sm">{sponsor.name}</span>
                <span className="block text-muted-foreground text-xs">{sponsor.role}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <Button size="lg" className="transform -rotate-1 hover:rotate-0" asChild>
            <a href={`mailto:${EVENT.contact.sponsorship}`}>Become a Sponsor</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
