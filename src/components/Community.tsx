import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Community = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join the Community
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with hackers, mentors, and tech enthusiasts
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2"
            onClick={() => window.open('https://www.instagram.com/direct/t/1401193344912939/', '_blank')}
          >
            <Instagram className="w-5 h-5" />
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;
