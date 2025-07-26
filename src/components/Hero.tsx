import { Button } from "@/components/ui/button";
import { Play, Star, Clock, Shield, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-service.jpg";
import { useState, useEffect } from "react";

const quotes = [
  "We fix. We recover. You relax.",
  "Your car, our care — anytime, anywhere.",
  "Driven by trust, powered by service.",
  "24/7 recovery, always at your service.",
  "Easy Fix: Where cars feel better."
];

const Hero = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 500); // fade out before changing
    }, 4000); // total cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-accent/30">
            <Star className="h-5 w-5 text-accent fill-current" />
            <span className="text-sm font-medium">Trusted by 50,000+ Customers</span>
          </div>

          {/* Fading Quote */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-opacity duration-700 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {quotes[quoteIndex]}
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Professional vehicle recovery, mobile car wash, and automotive services.
            Available 24/7 for your peace of mind on the road.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Book Emergency Service
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch How It Works
            </Button>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Clock className="h-6 w-6 text-accent" />
              <span className="font-semibold">24/7 Emergency</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Shield className="h-6 w-6 text-accent" />
              <span className="font-semibold">Fully Insured</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Wrench className="h-6 w-6 text-accent" />
              <span className="font-semibold">Professional Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
