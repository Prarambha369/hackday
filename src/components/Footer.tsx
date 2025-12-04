import { MessageCircle, Instagram, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t-4 border-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Butwal Hack</h3>
            <p className="text-sm text-muted-foreground">
              A student-focused hackathon inspired by Major League Hacking,
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
                  Challenges
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
                href="mailto:support@butwalhacks.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@butwalhacks.com
              </a>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/direct/t/758290143656900/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
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

        {/* MLH Badge Placeholder */}
        <div className="border-t border-border pt-8 mb-8 text-center">
          <div className="inline-block bg-muted px-6 py-3 rounded-lg">
            <p className="text-sm text-muted-foreground">
              MLH Official Event Badge (Pending Approval)
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © 2025 Butwal Hack | Inspired by{" "}
            <a
              href="https://mlh.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Major League Hacking
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
