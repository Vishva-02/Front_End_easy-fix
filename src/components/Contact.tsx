import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import LiveChat from "./LiveChat";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "Message Sent!",
          description: "We've received your message and will get back to you shortly.",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Submission Error",
        description: "Could not send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="scroll-mt-24 bg-white text-[#3b2f0b] pt-20 pb-14 px-4 md:px-8 lg:px-20 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-[#b49156] mb-2">Contact Us</h2>
        <p className="text-muted-foreground">
          Reach out for emergency service, booking queries or just to say hi!
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <form
          className="md:order-2 space-y-4 bg-[#f9f5f0]/80 p-6 rounded-xl shadow-md border border-[#e5d1a7] w-full md:w-[42%]"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-[#5f4c2b]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full px-3 py-1.5 text-sm border border-[#d9c9a3] rounded-md focus:outline-none focus:ring focus:border-[#b49156]"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-[#5f4c2b]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-1.5 text-sm border border-[#d9c9a3] rounded-md focus:outline-none focus:ring focus:border-[#b49156]"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-[#5f4c2b]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="How can we help?"
              className="w-full px-3 py-1.5 text-sm border border-[#d9c9a3] rounded-md focus:outline-none focus:ring focus:border-[#b49156]"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <Button
            type="submit"
            className="w-full gap-2 bg-[#b49156] hover:bg-[#9c7d3c] text-white text-sm py-2"
            disabled={isSubmitting}
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>

        <div className="flex flex-col justify-start gap-6 text-[#5f4c2b] text-base md:text-lg w-full md:w-[50%] md:pr-8">
            <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3 text-[#b49156]" />
                <a href="tel:+18003279349" className="hover:underline font-medium">
                    +1-800-EASY-FIX
                </a>
            </div>
            <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-[#b49156]" />
                <a href="mailto:support@easyfix.com" className="hover:underline font-medium">
                    support@easyfix.com
                </a>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-3 text-[#b49156] mt-1" />
                    <span className="font-medium">
                    123 Recovery Lane,<br />Auto City, IN
                    </span>
                </div>
            </div>
        </div>
      </div>

      <div className="mt-10 max-w-5xl mx-auto text-center">
        <button
          onClick={() => setShowChat((prev) => !prev)}
          className="bg-[#b49156] hover:bg-[#9c7d3c] text-white px-6 py-2 rounded shadow transition duration-300"
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