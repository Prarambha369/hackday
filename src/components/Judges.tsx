import { Gavel, UserRound } from "lucide-react";
import { JUDGES, JUDGING_CRITERIA } from "@/data/judging";

const tilts = ["-rotate-2", "rotate-1", "-rotate-1"];

const Judges = () => {
  return (
    <section id="judges" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-10 right-20 w-28 h-28 bg-primary/5 rotate-45 hidden lg:block" />
      <Gavel className="absolute bottom-10 left-20 w-16 h-16 text-accent/10 -rotate-12 hidden lg:block" aria-hidden="true" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-black text-foreground font-heading transform -rotate-1">
              Judges & Judging
            </h2>
            <svg className="absolute -bottom-3 left-4 w-3/4 h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,7 Q50,4 100,8 T200,6" stroke="hsl(var(--accent))" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Every team presented their project to the judges at the end of the day, with mentors on hand throughout
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {JUDGES.map((judge, i) => (
            <li
              key={judge.name}
              className={`bg-card border-4 border-foreground p-6 transform ${tilts[i % tilts.length]} hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1`}
            >
              <div className="w-16 h-16 bg-accent border-4 border-foreground flex items-center justify-center mb-4 transform -rotate-6">
                <UserRound className="w-8 h-8 text-foreground" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-black mb-1 font-heading">{judge.name}</h3>
              <p className="text-sm font-semibold text-muted-foreground">{judge.org}</p>
            </li>
          ))}
        </ul>

        <div className="text-center bg-accent/10 border-4 border-foreground p-8 transform -rotate-1 shadow-[8px_8px_0px_0px_hsl(var(--foreground))] max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-black text-primary mb-6 font-heading">Judging Criteria</p>
          <ul className="flex flex-wrap justify-center gap-3">
            {JUDGING_CRITERIA.map((c) => (
              <li key={c} className="px-4 py-2 bg-card border-2 border-foreground font-bold text-foreground">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Judges;
