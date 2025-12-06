import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import img1 from "@/assets/hack-day-logo.png";
import img2 from "@/assets/butwal-hack-logo.png";
import img3 from "@/assets/579501461_1354121903124379_5661373177081933099_n.jpg";
import img4 from "@/assets/1000015171.png";
import img5 from "@/assets/hack-day-logo-new.png";

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
            {[
              { src: '/1.png', label: 'Bronze Sponsor' },
              { src: '/7.jpg', label: 'EyeCare Partner' },
              { src: '/2.jpg', label: 'Event Partner' },
              { src: '/3.png', label: 'Venue Partner' },
              { src: '/4.png', label: 'Work Space Partner' },
              { src: '/WhatsApp Image 2025-11-28 at 23.00.42.jpeg', label: 'Education Partner' },
              { src: '/WhatsApp Image 2025-11-28 at 22.55.28 (1).jpeg', label: 'Domain Partner' },
              { src: '/2.png', label: 'Theater Partner' },
              { src: '/5.jpg', label: 'Delivery Partner' },
              { src: '/WhatsApp Image 2025-11-28 at 22.56.09 (1).jpeg', label: 'Out Reach Partner' },
            ].map((sponsor, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className={`rounded-full flex items-center justify-center transition-all hover:bg-primary/20 overflow-hidden ${idx === 0 ? 'w-48 h-48' : 'w-32 h-32'}`}>
                  {sponsor.src ? (
                    <img src={sponsor.src} alt={sponsor.label} className="w-full h-full object-contain rounded-full" />
                  ) : (
                    <div className="absolute inset-0 rounded-full bg-primary/10" />
                  )}
                </div>
                <span className="text-foreground font-semibold text-sm">{sponsor.label}</span>
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
