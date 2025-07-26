import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Car } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Gallery", href: "gallery" },
    { name: "Contact", href: "contact" },
  ];

  const handleScrollToId = (id: string) => {
    setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>24/7 Emergency: +1-800-EASY-FIX</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Serving Nationwide</span>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/mylog.png" alt="Easy Fix Logo" className="h-10 w-10 object-contain" />
            <h1 className="text-2xl font-bold text-primary">
              EASY <span className="text-accent">FIX</span>
            </h1>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollToId(item.href)}
                className="group inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-in-out font-medium shadow-sm"
              >
                <Car className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero" size="lg">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 border-t border-border">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleScrollToId(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="group flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-in-out font-medium shadow-sm w-full text-left"
                >
                  <Car className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button variant="hero" size="lg" className="w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
