import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Droplets, Wrench, Clock, MapPin, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const Services = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const services = [
    {
      icon: Truck,
      title: "Vehicle Recovery",
      description: "24/7 emergency towing and roadside assistance for breakdowns, accidents, and mechanical failures.",
      features: [
        "24/7 Emergency Response",
        "Flatbed & Wheel Lift Towing",
        "Accident Recovery",
        "Long Distance Towing",
        "Motorcycle Transport"
      ],
      price: "From $89",
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Droplets,
      title: "Mobile Car Wash",
      description: "Professional car detailing services that come to your location for ultimate convenience.",
      features: [
        "Exterior Wash & Wax",
        "Interior Deep Clean",
        "Engine Bay Cleaning",
        "Paint Protection",
        "Eco-Friendly Products"
      ],
      price: "From $49",
      color: "accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Wrench,
      title: "Mobile Mechanics",
      description: "Certified mechanics provide on-site vehicle maintenance and repair services.",
      features: [
        "On-Site Diagnostics",
        "Oil Changes",
        "Battery Replacement",
        "Brake Repairs",
        "Tire Services"
      ],
      price: "From $99",
      color: "luxury",
      gradient: "from-luxury/20 to-luxury/5"
    }
  ];

  const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    const [cardRef, cardVisible] = useScrollAnimation(0.1);
    const Icon = service.icon;

    return (
      <div
        ref={cardRef}
        className={`transform transition-all duration-700 ${
          cardVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-20 opacity-0'
        }`}
        style={{ 
          transitionDelay: `${index * 200}ms`,
        }}
        onMouseEnter={(e) => {
          setHoveredService(index);
          setCursorPosition({ x: e.clientX, y: e.clientY });
        }}
        onMouseMove={(e) => {
          if (hoveredService === index) {
            setCursorPosition({ x: e.clientX, y: e.clientY });
          }
        }}
        onMouseLeave={() => setHoveredService(null)}
      >
        <Card className={`relative overflow-hidden group transition-all duration-500 transform hover:scale-[1.02] ${
          hoveredService === index 
            ? 'shadow-2xl border-2 border-primary/40 bg-gradient-to-br ' + service.gradient
            : 'hover:shadow-luxury border-2 hover:border-primary/20'
        }`}>
          {/* Animated background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          
          {/* Glowing border effect */}
          {hoveredService === index && (
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-luxury/20 animate-pulse-glow"></div>
          )}
          
          <CardHeader className="text-center pb-4 relative z-10">
            <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-${service.color}/10 flex items-center justify-center transition-all duration-500 ${
              hoveredService === index 
                ? 'scale-125 bg-' + service.color + '/20 shadow-lg shadow-' + service.color + '/30' 
                : 'group-hover:scale-110'
            }`}>
              <Icon className={`h-10 w-10 text-${service.color} transition-all duration-300 ${
                hoveredService === index ? 'animate-pulse-glow' : ''
              }`} />
            </div>
            <CardTitle className={`text-2xl font-bold transition-colors duration-300 ${
              hoveredService === index ? 'text-' + service.color : ''
            }`}>
              {service.title}
            </CardTitle>
            <CardDescription className="text-base">{service.description}</CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4 relative z-10">
            <ul className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <li 
                  key={featureIndex} 
                  className={`flex items-center gap-3 text-sm transition-all duration-300 ${
                    hoveredService === index ? 'transform translate-x-2' : ''
                  }`}
                  style={{ 
                    transitionDelay: hoveredService === index ? `${featureIndex * 50}ms` : '0ms'
                  }}
                >
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    hoveredService === index 
                      ? 'bg-' + service.color + ' scale-150 shadow-lg shadow-' + service.color + '/50' 
                      : 'bg-primary'
                  }`}></div>
                  <span className={hoveredService === index ? 'font-medium' : ''}>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-3xl font-bold transition-all duration-300 ${
                  hoveredService === index 
                    ? 'text-' + service.color + ' scale-110' 
                    : 'text-primary'
                }`}>
                  {service.price}
                </span>
                <span className="text-sm text-muted-foreground">Starting price</span>
              </div>
              <Button 
                className={`w-full transition-all duration-300 ${
                  hoveredService === index ? 'scale-105 shadow-lg' : ''
                }`} 
                variant={service.color === 'primary' ? 'default' : service.color === 'accent' ? 'hero' : 'luxury'}
              >
                Book {service.title}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Custom cursor for hovered service */}
      {hoveredService !== null && (
        <div 
          className="fixed pointer-events-none z-50 transition-opacity duration-300"
          style={{ 
            left: cursorPosition.x + 10, 
            top: cursorPosition.y + 10,
          }}
        >
          <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-${services[hoveredService].color} shadow-lg animate-pulse-glow`}>
            Click to book
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-700 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-primary animate-pulse-glow">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive automotive solutions designed to keep you moving with confidence and convenience.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Emergency contact section */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground transform transition-all duration-700 hover:scale-[1.02]">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Emergency Assistance?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our emergency response team is available 24/7 to help you get back on the road safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform duration-300">
              <Phone className="h-5 w-5 mr-2" />
              Call Emergency Line
            </Button>
            <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/20 hover:scale-105 transition-transform duration-300">
              <MapPin className="h-5 w-5 mr-2" />
              Track Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;