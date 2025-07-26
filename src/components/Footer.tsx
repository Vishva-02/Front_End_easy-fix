import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Emergency Support", href: "#emergency" },
    { name: "Book Appointment", href: "#book" },
  ];

  const services = [
    { name: "Vehicle Recovery", href: "#recovery" },
    { name: "Mobile Car Wash", href: "#wash" },
    { name: "Mobile Mechanics", href: "#mechanics" },
    { name: "Roadside Assistance", href: "#roadside" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-luxury text-luxury-foreground">
      {/* Newsletter section */}
      <div className="border-b border-luxury-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with EASY FIX
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get exclusive offers, maintenance tips, and emergency service updates directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-foreground border-0 flex-1"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              EASY <span className="text-accent">FIX</span>
            </h2>
            <p className="mb-6 opacity-90">
              Professional vehicle recovery and car care services. Fast, reliable, and affordable solutions 
              to keep you moving with confidence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="p-2 text-luxury-foreground hover:bg-luxury-foreground/20 hover:text-accent"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="opacity-90 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="opacity-90 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Emergency: +1-800-EASY-FIX</div>
                  <div className="text-sm opacity-90">Business: +1-555-EASY-123</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div>support@easyfix.com</div>
                  <div className="text-sm opacity-90">emergency@easyfix.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>Serving Nationwide<br />
                <span className="text-sm opacity-90">Main Office: Your City, State</span></div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div>Emergency: 24/7</div>
                  <div className="text-sm opacity-90">Business: Mon-Fri 8AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-luxury-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <div>
              © 2024 EASY FIX. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 hover:text-accent transition-all">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-100 hover:text-accent transition-all">
                Terms of Service
              </a>
              <a href="#" className="hover:opacity-100 hover:text-accent transition-all">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;