import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const BookingForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    vehicleModel: "",
    regNumber: "",
    location: "",
    destination: "",
    serviceType: "",
    preferredTime: "",
    paymentMethod: "",
    notes: "",
  });

   const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
   
   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast({ title: "Authentication Error", description: "You must be logged in to book." });
        navigate('/login');
        return;
      }

      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Send the token!
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create booking.");
      }

      toast({ title: "Success!", description: "Your booking has been confirmed." });
      navigate("/dashboard"); // Redirect to dashboard on success

    } catch (error) {
      console.error("Booking failed:", error);
      toast({ title: "Booking Failed", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="min-h-screen w-full bg-white flex items-center justify-center overflow-hidden">
      {/* Booking Form Box with yellowish bg */}
      <div className="w-full max-w-xl bg-[#f9f5f0] p-6 rounded-xl shadow-2xl border border-[#d4af37]">
        {/* Title + Icon Animate Together */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Car className="h-12 w-12 text-yellow-600 animate-bounce" />
          <h2 className="text-4xl font-bold text-yellow-700">Book a Service</h2>
        </motion.div>


      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="bg-zinc-200 text-black border border-[#d4af37] focus:ring-[#d4af37]"
          />
          <Input
            name="phone"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
            className="bg-zinc-200 text-black border border-[#d4af37] focus:ring-[#d4af37]"
          />
          <Input
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="bg-zinc-200 text-black border border-[#d4af37] focus:ring-[#d4af37]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="vehicleType"
            placeholder="Vehicle Type"
            onChange={handleChange}
            required
            className="bg-zinc-200 text-black border border-[#d4af37] focus:ring-[#d4af37]"
          />
          <Input
            name="vehicleModel"
            placeholder="Vehicle Model"
            onChange={handleChange}
            required
            className="bg-zinc-200 text-black border border-[#d4af37] focus:ring-[#d4af37]"
          />
          <Input
            name="regNumber"
            placeholder="Registration Number"
            onChange={handleChange}
            required
            className="bg-zinc-200 text-black border border-[#d4af37] focus:ring-[#d4af37]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="location"
            placeholder="Current Location"
            onChange={handleChange}
            required
            className="bg-zinc-200 text-black border border-[#d4af37] focus:ring-[#d4af37]"
          />
          <Input
            name="destination"
            placeholder="Destination"
            onChange={handleChange}
            className="bg-zinc-200 text-black border border-[#d4af37] focus:ring-[#d4af37]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="serviceType"
            onChange={handleChange}
            required
            className="bg-zinc-200 text-black border border-[#d4af37] focus:ring-[#d4af37]"
          >
            <option value="">Select Service Type</option>
            <option value="Recovery">Vehicle Recovery</option>
            <option value="Flat Tire">Flat Tire</option>
            <option value="Battery">Battery Jump Start</option>
            <option value="Lockout">Lockout</option>
            <option value="Fuel">Fuel Delivery</option>
            <option value="Mechanic">Mobile Mechanic</option>
            <option value="Car Wash">Car Wash</option>
          </select>
          <Input
            name="preferredTime"
            placeholder="Preferred Time"
            onChange={handleChange}
            className="bg-zinc-200 text-black border border-[#d4af37] focus:ring-[#d4af37]"
          />
        </div>

        <div>
          <select
            name="paymentMethod"
            onChange={handleChange}
            required
            className="bg-zinc-200 text-black border border-[#d4af37] focus:ring-[#d4af37]"
          >
            <option value="">Select Payment Method</option>
            <option value="Cash">Cash</option>
            <option value="UPI">UPI</option>
            <option value="Card">Card</option>
            <option value="Online">Online Transfer</option>
          </select>
        </div>

        <Textarea
          name="notes"
          placeholder="Additional notes..."
          rows={3}
          onChange={handleChange}
          className="bg-zinc-200 text-black border border-[#d4af37] focus:ring-[#d4af37]"
        />

        <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#d4af37] text-white py-3 rounded-full shadow-lg hover:bg-[#c9a530] transition-all text-lg group"
          >
            <CarFront className="h-6 w-6 group-hover:scale-110 transition-transform" />
            Book Now
          </Button>
        </form>
      </div>
    </div>
  );
};


export default BookingForm;
