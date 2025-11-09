import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

const Sponsors = () => {
  const sponsors = {
    platinum: ["Sponsor Logo 1", "Sponsor Logo 2"],
    gold: ["Sponsor Logo 3", "Sponsor Logo 4", "Sponsor Logo 5"],
    silver: ["Sponsor Logo 6", "Sponsor Logo 7", "Sponsor Logo 8", "Sponsor Logo 9"],
  };

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
            Partner with Hack Day Butwal 1.0 to support innovation and connect
            with Nepal's brightest student developers.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-card border-4 border-foreground p-6 transform hover:-rotate-1 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
              >
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground font-bold">Sponsor {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="transform -rotate-1 hover:rotate-0">Become a Sponsor</Button>
            <Button size="lg" variant="outline" className="transform rotate-1 hover:rotate-0">
              <Download className="mr-2 w-4 h-4" />
              Download Sponsorship Deck (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
