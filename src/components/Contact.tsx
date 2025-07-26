import React, { FormEvent, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import LiveChat from "./LiveChat";


const Contact: React.FC = () => {
  const [showChat, setShowChat] = useState(false); // ✅ Move here inside the component

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you shortly!",
    });
  };

  return (
    <motion.section
      id="contact"
      className="bg-white py-16 px-4 md:px-8 lg:px-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">Contact Us</h2>
        <p className="text-muted-foreground mb-10">
          Reach out for emergency service, booking queries or just to say hi!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Form */}
        <form
          className="space-y-6 bg-muted p-8 rounded-xl shadow-md"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:border-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:border-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="How can we help?"
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:border-primary"
              required
            ></textarea>
          </div>

          <Button type="submit" className="w-full gap-2">
            <Send className="w-4 h-4" />
            Send Message
          </Button>
        </form>

        {/* Contact Details */}
        <motion.div
          className="bg-primary text-primary-foreground p-8 rounded-xl shadow-md space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>+1-800-EASY-FIX</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>support@easyfix.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p>123 Recovery Lane, Auto City, IN</p>
            </div>
          </div>
          
        </motion.div>
      </div>

      <div className="mt-10 max-w-5xl mx-auto text-center">
        <button
          onClick={() => setShowChat((prev) => !prev)}
          className="bg-primary text-white px-6 py-2 rounded shadow"
        >
          {showChat ? "Close Chat" : "Chat with us"}
        </button>

        {showChat && (
          <div className="mt-4">
            <LiveChat />
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;
