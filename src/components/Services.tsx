import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Droplets, Wrench, Clock, MapPin, Phone } from "lucide-react";

const Services = () => {
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
      color: "primary"
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
      color: "accent"
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
      color: "luxury"
    }
  ];
const getHoverClass = (color: string) => {
  switch (color) {
    case "primary":
      return "hover:border-primary hover:shadow-primary/50";
    case "accent":
      return "hover:border-accent hover:shadow-accent/50";
    case "luxury":
      return "hover:border-yellow-600 hover:shadow-yellow-400/50";
    default:
      return "hover:border-gray-300 hover:shadow-md";
  }
};

const getHoverBg = (color: string) => {
  switch (color) {
    case "primary":
      return "hover:bg-primary/5";
    case "accent":
      return "hover:bg-accent/5";
    case "luxury":
      return "hover:bg-yellow-50";
    default:
      return "hover:bg-gray-50";
  }
};


  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive automotive solutions designed to keep you moving with confidence and convenience.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
            <Card
  key={index}
  className={`relative overflow-hidden group transition-all duration-300 transform border-2 cursor-pointer 
    hover:scale-105 bg-white shadow-md hover:shadow-2xl ${getHoverClass(service.color)} ${getHoverBg(service.color)}`}>





                <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-300">
                  <Icon className={`h-8 w-8 ${getHoverClass(service.color)} group-hover:opacity-80`} />
                </div>


                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <span className="text-sm text-muted-foreground">Starting price</span>
                    </div>
                    <Button className="w-full" variant={service.color === 'primary' ? 'default' : service.color === 'accent' ? 'hero' : 'luxury'}>
                      Book {service.title}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency contact section */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Emergency Assistance?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our emergency response team is available 24/7 to help you get back on the road safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Phone className="h-5 w-5 mr-2" />
              Call Emergency Line
            </Button>
            <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/20">
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