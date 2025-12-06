import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

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
            Partner with Butwal Hack to support innovation and connect
            with Nepal's brightest student developers.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className={`rounded-full flex items-center justify-center transition-all hover:bg-primary/20 overflow-hidden ${i === 1 ? 'w-48 h-48' : 'w-32 h-32'}`}
                  style={(i >=1 && i <=8) ? { backgroundColor: 'transparent' } : undefined}
                >
                  {i === 1 ? (
                    <img src="/1.png" alt="Bronze Sponsor" className="w-3/4 h-3/4 object-contain rounded-full" />
                  ) : i === 2 ? (
                    <img src="/7.jpg" alt="EyeCare Partner" className="w-full h-full object-cover rounded-full" />
                  ) : i === 3 ? (
                    <img src="/2.jpg" alt="Event Partner" className="w-full h-full object-cover rounded-full" />
                  ) : i === 4 ? (
                    <img src="/3.png" alt="Venue Partner" className="w-full h-full object-cover rounded-full" />
                  ) : i === 5 ? (
                    <img src="/4.png" alt="Work Space Partner" className="w-full h-full object-cover rounded-full" />
                  ) : i === 6 ? (
                    <img src="/WhatsApp Image 2025-11-28 at 23.00.42.jpeg" alt="Education Partner" className="w-full h-full object-cover rounded-full" />
                  ) : i === 7 ? (
                    <img src="/WhatsApp Image 2025-11-28 at 22.55.28 (1).jpeg" alt="Domain Partner" className="w-full h-full object-cover rounded-full" />
                  ) : i === 8 ? (
                    <img src="/2.png" alt="Theater Partner" className="w-full h-full object-cover rounded-full" />
                  ) : i === 9 ? (
                    <img src="/5.jpg" alt="Delivery Partner" className="w-full h-full object-cover rounded-full" />
                  ) : i === 10 ? (
                    <img src="/WhatsApp Image 2025-11-28 at 22.56.09 (1).jpeg" alt="Out Reach Partner" className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <>
                      <div className="absolute inset-0 rounded-full bg-primary/10" />
                      <span className="text-foreground font-bold text-center text-sm px-4 relative z-10">Sponsor {i}</span>
                    </>
                  )}
                </div>
                {i === 1 && <span className="text-foreground font-semibold text-sm">Bronze Sponsor</span>}
                {i === 2 && <span className="text-foreground font-semibold text-sm">EyeCare Partner</span>}
                {i === 3 && <span className="text-foreground font-semibold text-sm">Event Partner</span>}
                {i === 4 && <span className="text-foreground font-semibold text-sm">Venue Partner</span>}
                {i === 5 && <span className="text-foreground font-semibold text-sm">Work Space Partner</span>}
                {i === 6 && <span className="text-foreground font-semibold text-sm">Education Partner</span>}
                {i === 7 && <span className="text-foreground font-semibold text-sm">Domain Partner</span>}
                {i === 8 && <span className="text-foreground font-semibold text-sm">Theater Partner</span>}
                {i === 9 && <span className="text-foreground font-semibold text-sm">Delivery Partner</span>}
                {i === 10 && <span className="text-foreground font-semibold text-sm">Out Reach Partner</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="transform -rotate-1 hover:rotate-0"
              onClick={() => window.open('mailto:mail@butwalhacks.com')}
            >
              Become a Sponsor
            </Button>
            {/* Sponsorship deck download removed — contact via email */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
                    <img src="/2.jpg" alt="Event Partner" className="w-full h-full object-cover rounded-full" />
