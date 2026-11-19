import { Button } from "@/components/ui/button";
import { EVENT } from "@/data/event";
import { SPONSORS, TIERS } from "@/data/sponsors";
import type { SponsorTier } from "@/data/sponsors";

/** Logo circle and caption size per tier, largest first. */
const SIZES: Record<SponsorTier, { circle: string; caption: string; gap: string }> = {
  main: { circle: "", caption: "", gap: "" }, // rendered as wordmarks, see below
  title: { circle: "w-48 h-48 sm:w-64 sm:h-64", caption: "max-w-[16rem] text-lg", gap: "gap-12" },
  gold: { circle: "w-44 h-44 sm:w-56 sm:h-56", caption: "max-w-[14rem] text-base", gap: "gap-12" },
  silver: { circle: "w-40 h-40 sm:w-52 sm:h-52", caption: "max-w-[13rem] text-base", gap: "gap-12" },
  bronze: { circle: "w-36 h-36 sm:w-44 sm:h-44", caption: "max-w-[12rem] text-base", gap: "gap-12" },
  partner: { circle: "w-28 h-28 sm:w-32 sm:h-32", caption: "max-w-[9rem] text-sm", gap: "gap-8 sm:gap-10" },
  community: { circle: "w-24 h-24 sm:w-28 sm:h-28", caption: "max-w-[8rem] text-xs", gap: "gap-6 sm:gap-8" },
};

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

        <div className="max-w-5xl mx-auto space-y-14">
          {TIERS.map((tier) => {
            const sponsors = SPONSORS.filter((s) => s.tier === tier.id);
            if (!sponsors.length) return null;
            const size = SIZES[tier.id];
            return (
              <div key={tier.id}>
                <h3 className="text-center text-sm font-black uppercase tracking-widest text-muted-foreground mb-6">
                  {tier.label}
                </h3>
                {tier.id === "main" ? (
                  /* Main partners: official wordmarks, small, on white so they read in dark mode too. */
                  <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                    {sponsors.map((sponsor) => (
                      <li key={sponsor.logo}>
                        <a
                          href={sponsor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center h-16 px-6 rounded-xl bg-white border-2 border-foreground/10 transition-transform hover:scale-105"
                        >
                          <img src={sponsor.logo} alt={sponsor.name} title={sponsor.name} className={`w-auto ${sponsor.logoHeight ?? "h-8 sm:h-9"}`} />
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className={`flex flex-wrap justify-center ${size.gap}`}>
                    {sponsors.map((sponsor) => (
                      <li key={sponsor.logo} className="flex flex-col items-center gap-3">
                        <div
                          className={`rounded-full overflow-hidden bg-white border-2 border-foreground/10 transition-transform hover:scale-105 ${size.circle}`}
                        >
                          {/* The name is printed right below, so the image itself is decorative. */}
                          <img
                            src={sponsor.logo}
                            alt=""
                            title={sponsor.name}
                            loading="lazy"
                            decoding="async"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className={`text-center leading-tight ${size.caption}`}>
                          <span className="block text-foreground font-semibold">{sponsor.name}</span>
                          {sponsor.role !== tier.label && (
                            <span className="block text-muted-foreground text-xs">{sponsor.role}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

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
