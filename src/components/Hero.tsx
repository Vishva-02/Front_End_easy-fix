import { Button } from "@/components/ui/button";
import { Play, Star, Clock, Shield, Wrench, Car, Zap } from "lucide-react";
import heroImage from "@/assets/hero-service.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional automotive service"
          className="w-full h-full object-cover"
        />
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

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Fast, Reliable
            <span className="block text-accent">Vehicle Recovery</span>
            & Car Care
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            Professional vehicle recovery, mobile car wash, and automotive services.
            Available 24/7 for your peace of mind on the road.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Book Emergency Service
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground">
              <Play className="h-5 w-5 mr-2" />
              Watch How It Works
            </Button>
          </div>

          {/* Service highlights */}
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;