import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
// sponsor image replaced with uploaded WhatsApp image in public/

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
          {/* Pyramid layout for 13 sponsors: rows 1,2,3,4,3 */}
          {(() => {
            const rows = [1, 2, 3, 4, 7];
            const sizeClasses = ['w-56 h-56', 'w-44 h-44', 'w-36 h-36', 'w-28 h-28', 'w-20 h-20'];
            let counter = 1;

            return rows.map((count, rowIdx) => {
              const sizeClass = sizeClasses[rowIdx] || 'w-20 h-20';
              const items = Array.from({ length: count }, () => {
                const i = counter++;
                return (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className={`rounded-full flex items-center justify-center transition-all hover:scale-105 overflow-hidden ${sizeClass}`}>
                      {i === 1 ? (
                        <img src="/14.svg" alt="Title Sponsor" className="w-3/4 h-3/4 object-contain rounded-full" />
                      ) : i === 2 ? (
                        <img src="/10.svg" alt="Silver Sponsor" className="w-full h-full object-cover rounded-full" />
                      ) : i === 3 ? (
                        <img src="/1.svg" alt="Bronze Sponsor" className="w-full h-full object-cover rounded-full" />
                      ) : i === 4 ? (
                        <img src="/3.png" alt="Venue Partner" className="w-full h-full object-cover rounded-full" />
                      ) : i === 5 ? (
                        <img src="/! (11).svg" alt="Work Space Partner" className="w-full h-full object-cover rounded-full" />
                      ) : i === 6 ? (
                        <img src="/8.png" alt="Education Partner" className="w-full h-full object-cover rounded-full" />
                      ) : i === 7 ? (
                        <img src="/9.png" alt="Domain Partner" className="w-full h-full object-cover rounded-full" />
                      ) : i === 8 ? (
                        <img src="/2.png" alt="Theater Partner" className="w-full h-full object-cover rounded-full" />
                      ) : i === 9 ? (
                        <img src="/6.svg" alt="EyeCare Partner" className="w-full h-full object-cover rounded-full" />
                      ) : i === 10 ? (
                        <img src="/10.png" alt="Out Reach Partner" className="w-full h-full object-cover rounded-full" />
                      ) : i === 11 ? (
                        <img src="/7.svg" alt="Event Partner" className="w-full h-full object-cover rounded-full" />
                      ) : i === 12 ? (
                        <img src="/13.svg" alt="Event Partner" className="w-full h-full object-cover rounded-full" />
                      ) : i === 13 ? (
                        <img src="/18.svg" alt="Government Patron" className="w-full h-full object-cover rounded-full" />
                      ) : i === 14 ? (
                        <img src="/12.svg" alt="Sports Partner" className="w-full h-full object-cover rounded-full" />
                      ) : i === 15 ? (
                        <img src="/15.svg" alt="Community Partner" className="w-full h-full object-cover rounded-full" />
                      ) : i === 16 ? (
                        <img src="/5.svg" alt="Delivery Partner" className="w-full h-full object-cover rounded-full" />
                      ) : i === 17 ? (
                        <img src="/19.svg" alt="Beverage Partner" className="w-full h-full object-cover rounded-full" />
                      ) : (
                        <>
                          <div className="absolute inset-0 rounded-full bg-primary/10" />
                          <span className="text-foreground font-bold text-center text-sm px-4 relative z-10">Sponsor {i}</span>
                        </>
                      )}
                    </div>
                    {i === 1 && <span className="text-foreground font-semibold text-sm">Title Sponsor</span>}
                    {i === 2 && <span className="text-foreground font-semibold text-sm">Silver Sponsor</span>}
                    {i === 3 && <span className="text-foreground font-semibold text-sm">Bronze Sponsor</span>}
                    {i === 4 && <span className="text-foreground font-semibold text-sm">Venue Partner</span>}
                    {i === 5 && <span className="text-foreground font-semibold text-sm">Work Space Partner</span>}
                    {i === 6 && <span className="text-foreground font-semibold text-sm">Education Partner</span>}
                    {i === 7 && <span className="text-foreground font-semibold text-sm">Domain Partner</span>}
                    {i === 8 && <span className="text-foreground font-semibold text-sm">Theater Partner</span>}
                    {i === 9 && <span className="text-foreground font-semibold text-sm">EyeCare Partner</span>}
                    {i === 10 && <span className="text-foreground font-semibold text-sm">Out Reach Partner</span>}
                    {i === 11 && <span className="text-foreground font-semibold text-sm">Event Partner</span>}
                    {i === 12 && <span className="text-foreground font-semibold text-sm">Event Partner</span>}
                    {i === 13 && <span className="text-foreground font-semibold text-sm">Government Patron</span>}
                    {i === 14 && <span className="text-foreground font-semibold text-sm">Sports Partner</span>}
                    {i === 15 && <span className="text-foreground font-semibold text-sm">Community Partner</span>}
                    {i === 16 && <span className="text-foreground font-semibold text-sm">Delivery Partner</span>}
                    {i === 17 && <span className="text-foreground font-semibold text-sm">Beverage Partner</span>}
                  </div>
                );
              });

              return (
                <div key={rowIdx} className="flex justify-center gap-6 mb-6">
                  {items}
                </div>
              );
            });
          })()}
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
