import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast"; // If you're using Sonner, use `import { toast } from "sonner"`

const NewsletterSection = () => {
  const handleSubscribe = () => {
    toast({
      title: "Subscribed!",
      description: "You've been added to the EASY FIX newsletter.",
    });
  };

  return (
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
            <Button variant="hero" size="lg" onClick={handleSubscribe}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
