import { MessageCircle, Instagram, Github, Linkedin, Mail } from "lucide-react";
import { EVENT } from "@/data/event";

const Footer = () => {
  return (
    <footer className="bg-background border-t-4 border-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">HackDay Butwal</h3>
            <p className="text-sm text-muted-foreground">
              A student-focused, official Major League Hacking event,
              bringing together Nepal's brightest innovators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-muted-foreground hover:text-primary transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#challenges" className="text-muted-foreground hover:text-primary transition-colors">
                  Prizes
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-muted-foreground hover:text-primary transition-colors">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-primary transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${EVENT.contact.support}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {EVENT.contact.support}
              </a>
              <div className="flex gap-3">
                <a
                  href={EVENT.social.instagram}
                  aria-label="Butwal Hacks on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={EVENT.social.linkedin}
                  aria-label="Butwal Hacks on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={EVENT.social.github}
                  aria-label="Butwal Hacks on GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Organizer & MLH */}
        <div className="border-t border-border pt-8 mb-6 text-center space-y-1">
          <p className="text-sm text-foreground">
            Organized by{" "}
            <a href={EVENT.organizerUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              {EVENT.organizer}
            </a>
          </p>
          {/* Official MLH 2026 season trust badge (from MLH's brand assets). Black on light, white on dark. */}
          <a
            href={EVENT.links.mlh}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block pt-4 transition-transform hover:-translate-y-1"
            aria-label="Official Major League Hacking 2026 season event: view the MLH listing"
          >
            <img src="/badges/mlh-trust-badge-2026-black.svg" alt="" width={70} height={123} loading="lazy" className="h-28 w-auto dark:hidden" />
            <img src="/badges/mlh-trust-badge-2026-white.svg" alt="" width={70} height={123} loading="lazy" className="h-28 w-auto hidden dark:block" />
          </a>
          <p className="text-sm text-foreground">
            <a href={EVENT.links.mlh} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Official MLH event listing
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © 2026 HackDay Butwal by Butwal Hacks | An official{" "}
            <a
              href="https://mlh.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Major League Hacking
            </a>{" "}
            event
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
