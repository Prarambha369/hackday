import { ExternalLink, Gift } from "lucide-react";
import { EVENT } from "@/data/event";
import { PARTICIPANT_PERKS, PODIUM, PRIZE_POOL, PROJECT_COUNT, SPECIAL_PRIZES } from "@/data/prizes";
import type { Winner } from "@/data/prizes";

const WinnerLink = ({ winner }: { winner: Winner }) => (
  <a
    href={winner.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 font-bold text-foreground hover:text-primary underline decoration-primary/40 underline-offset-4"
  >
    {winner.project}
    <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
  </a>
);

const tilts = ["-rotate-2", "rotate-1", "-rotate-1"];

const Challenges = () => {
  return (
    <section id="challenges" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/10 -rotate-12 hidden lg:block" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-black text-foreground font-heading transform -rotate-1">
              Prizes & Winners
            </h2>
            <svg className="absolute -bottom-3 left-0 w-full h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,7 Q50,4 100,7 T200,7" stroke="hsl(var(--accent))" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            {PRIZE_POOL} in prizes across {PROJECT_COUNT} submitted projects
          </p>
        </div>

        <div className="text-center bg-accent/10 border-4 border-foreground p-8 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto mb-16">
          <p className="text-3xl font-black text-primary mb-4 font-heading">
            Built with Google Gemini 🎯
          </p>
          <p className="text-lg text-muted-foreground">
            Teams built their projects with the Google Gemini API and other cutting-edge tools.
          </p>
        </div>

        {/* Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PODIUM.map((prize, i) => (
            <div
              key={prize.place}
              className={`bg-card border-4 border-foreground p-8 transform ${tilts[i]} hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}
            >
              <div className="text-6xl mb-4" aria-hidden="true">{prize.emoji}</div>
              <p className="text-3xl font-black text-primary font-heading">{prize.place}</p>
              <p className="text-2xl font-black text-foreground mb-3">{prize.cash}</p>
              <p className="text-sm text-muted-foreground mb-4">{prize.reward}</p>
              {prize.winner && (
                <p className="text-sm">
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground mb-1">Winner</span>
                  <WinnerLink winner={prize.winner} />
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Special prizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {SPECIAL_PRIZES.map((prize) => (
            <div key={prize.title} className="bg-card border-4 border-foreground p-6 shadow-[6px_6px_0px_0px_hsl(var(--primary))]">
              <p className="text-xl font-black text-foreground mb-1">{prize.title}</p>
              <p className="text-sm text-muted-foreground mb-4">{prize.reward}</p>
              {prize.winner && (
                <p className="text-sm">
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground mb-1">Winner</span>
                  <WinnerLink winner={prize.winner} />
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Perks for everyone */}
        <div className="text-center bg-card border-4 border-foreground p-8 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto">
          <p className="text-2xl font-bold text-foreground mb-4 inline-flex items-center gap-2">
            <Gift className="w-6 h-6 text-primary" aria-hidden="true" />
            Every team took home
          </p>
          <ul className="text-lg text-muted-foreground space-y-1 mb-6">
            {PARTICIPANT_PERKS.map((perk) => (
              <li key={perk.title}>
                <span className="font-semibold text-foreground">{perk.title}:</span> {perk.reward}
              </li>
            ))}
          </ul>
          <a
            href={EVENT.links.projects}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Browse all {PROJECT_COUNT} projects on Devpost →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
