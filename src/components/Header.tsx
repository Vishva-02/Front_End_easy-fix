import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, LogOut, LayoutDashboard, Car } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleScrollToId = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "#contact" },
    { name: "Booking", href: "/booking" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/mylog.png" alt="Easy Fix Logo" className="h-8 w-8 object-contain" />
            <h1 className="text-xl font-bold text-primary-foreground">
              EASY <span className="text-accent">FIX</span>
            </h1>
          </div>

          {/* CORRECTED: Conditional Login/Logout/Dashboard Buttons for Desktop */}
          <div className="hidden md:block">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2 text-primary-foreground hover:bg-primary-foreground/20">
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Button>
                </Link>
                <Button onClick={handleLogout} variant="ghost" size="sm" className="flex items-center gap-2 text-primary-foreground hover:bg-primary-foreground/20">
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="ghost" size="sm" className="flex items-center gap-2 text-primary-foreground hover:bg-primary-foreground/20">
                  <LogIn className="w-4 h-4" />
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 flex items-center justify-between h-16 relative">
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-4">
          {navigation.map((item) =>
            item.href.startsWith("#") ? (
              <button key={item.name} onClick={() => handleScrollToId(item.href.replace("#", ""))} className="group inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium shadow-sm">
                <Car className="h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
                {item.name}
              </button>
            ) : (
              <Link key={item.name} to={item.href} className="group inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium shadow-sm">
                <Car className="h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* This empty div is a placeholder to help with centering the nav. It's not strictly necessary with absolute positioning but can help balance flexbox if you change the layout. */}
        <div className="hidden md:block w-24"></div>

        <div className="md:hidden ml-auto">
          <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* CORRECTED: Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-2 border-t border-border">
            {navigation.map((item) =>
              item.href.startsWith("#") ? (
                <button key={item.name} onClick={() => { handleScrollToId(item.href.replace("#", "")); setIsMenuOpen(false); }} className="group flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all font-medium shadow-sm w-full text-left">
                  <Car className="h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
                  {item.name}
                </button>
              ) : (
                <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className="group flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all font-medium shadow-sm w-full">
                  <Car className="h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
                  {item.name}
                </Link>
              )
            )}
            
            {/* CORRECTED: Mobile Conditional Buttons */}
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="group flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all font-medium shadow-sm w-full">
                  <LayoutDashboard className="h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
                  Dashboard
                </Link>
                <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="group flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all font-medium shadow-sm w-full text-left">
                  <LogOut className="h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="group flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all font-medium shadow-sm w-full">
                <LogIn className="h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
                Login
              </Link>
            )}

            <div className="px-3 py-2">
              <Button variant="hero" size="lg" className="w-full" onClick={() => { setIsMenuOpen(false); navigate("/booking"); }}>
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;