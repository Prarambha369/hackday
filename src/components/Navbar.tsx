import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/hackday-logo.png";
import topLeftLogo from "@/assets/butwal-hacks-mark.png";
import { EVENT } from "@/data/event";
import ThemeToggle from "@/components/ThemeToggle";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Schedule", href: "#schedule" },
    { label: "Prizes", href: "#challenges" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "FAQ", href: "#faq" },
    { label: "Code of Conduct", href: "/cod" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between ${isScrolled ? 'py-2' : 'py-4'} transition-all duration-300`}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 group"
          >
            <img
              src={isScrolled ? logo : topLeftLogo}
              alt="HackDay Butwal"
              className={`w-auto transform group-hover:scale-105 transition-all duration-500 ${isScrolled ? 'h-16 md:h-20 translate-y-0 opacity-100' : 'h-20 md:h-28 -translate-y-1 opacity-100'}`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm font-bold text-foreground hover:text-primary transition-colors uppercase tracking-wide hover:scale-105 transform"
              >
                {link.label}
              </a>
            ))}
            <Button 
              size="sm" 
              className="transform -rotate-1 hover:rotate-0"
              onClick={() => window.open(EVENT.upcomingEventsUrl, '_blank', 'noopener,noreferrer')}
            >
              Upcoming Events
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle + menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 border-2 border-foreground text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background shadow-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-sm font-bold text-foreground hover:text-primary transition-colors uppercase tracking-wide py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button size="sm" className="w-full" onClick={() => window.open(EVENT.upcomingEventsUrl, '_blank', 'noopener,noreferrer')}>
                Upcoming Events
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
