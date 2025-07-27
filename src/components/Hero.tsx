<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Star, Clock, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
=======
import { Button } from "@/components/ui/button";
import { Play, Star, Clock, Shield, Wrench, Car, Zap } from "lucide-react";
>>>>>>> f73d9c1cd5cda9186076212cd3983f28bbed8a02
import heroImage from "@/assets/hero-service.jpg";

const quotes = [
  "We fix. We recover. You relax.",
  "Your car, our care — anytime, anywhere.",
  "Driven by trust, powered by service.",
  "24/7 recovery, always at your service.",
  "Easy Fix: Where cars feel better."
];

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Moving cars */}
        <div className="absolute top-1/4 left-0 animate-[slide-in-right_15s_linear_infinite]">
          <Car className="h-8 w-8 text-accent/60 transform rotate-90" />
        </div>
        <div className="absolute top-3/4 right-0 animate-[slide-out-right_20s_linear_infinite_reverse]">
          <Car className="h-6 w-6 text-white/40 transform -rotate-90" />
        </div>
        
        {/* Floating service icons */}
        <div className="absolute top-1/3 left-1/4 animate-[float_6s_ease-in-out_infinite]">
          <Wrench className="h-6 w-6 text-accent/50" />
        </div>
        <div className="absolute top-2/3 right-1/4 animate-[float_8s_ease-in-out_infinite_2s]">
          <Shield className="h-5 w-5 text-white/50" />
        </div>
        <div className="absolute top-1/2 left-1/6 animate-[float_7s_ease-in-out_infinite_4s]">
          <Zap className="h-4 w-4 text-accent/60" />
        </div>
        
        {/* Speed lines */}
        <div className="absolute top-1/4 left-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-[slide-in-right_3s_ease-in-out_infinite]"></div>
        <div className="absolute top-3/5 right-1/3 w-12 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[slide-in-right_4s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-4/5 left-1/3 w-20 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-[slide-in-right_5s_ease-in-out_infinite_2s]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-accent/30 animate-pulse-glow">
            <Star className="h-5 w-5 text-accent fill-current animate-spin duration-[10s]" />
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
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => navigate("/emergency-support")}
            >
              Book Emergency Service
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground"
              onClick={() => setShowVideo(true)}
            >
              <Play className="h-5 w-5 mr-2" />
              Watch How It Works
            </Button>
          </div>

          {/* Video Modal */}
          {showVideo && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
              <div className="relative w-full max-w-3xl mx-auto">
                <video
                  src="/videos/car-easy-video.mp4" // ✅ Video in public/videos folder
                  controls
                  autoPlay
                  className="w-full rounded-lg shadow-lg"
                />
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 px-3 py-1 rounded"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Clock className="h-6 w-6 text-accent animate-pulse-glow" />
              <span className="font-semibold">24/7 Emergency</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Shield className="h-6 w-6 text-accent animate-pulse-glow" style={{animationDelay: '0.5s'}} />
              <span className="font-semibold">Fully Insured</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Wrench className="h-6 w-6 text-accent animate-pulse-glow" style={{animationDelay: '1s'}} />
              <span className="font-semibold">Professional Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
