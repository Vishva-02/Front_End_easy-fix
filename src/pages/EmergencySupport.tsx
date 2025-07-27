import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, PhoneCall, AlertTriangle } from "lucide-react";

const EmergencySupport = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 to-white py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
            Emergency Vehicle Support
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Need urgent help on the road? Fill in your details and we’ll dispatch our team immediately.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-center">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <AlertTriangle className="h-8 w-8 mx-auto text-red-500 mb-2" />
            <p className="font-semibold">Instant Dispatch</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <PhoneCall className="h-8 w-8 mx-auto text-red-500 mb-2" />
            <p className="font-semibold">Available 24/7</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <MapPin className="h-8 w-8 mx-auto text-red-500 mb-2" />
            <p className="font-semibold">Live Tracking</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#f9f5f0]/80 rounded-2xl shadow-lg p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input required placeholder="Your Name" className="col-span-1" />
              <Input required placeholder="Phone Number" type="tel" className="col-span-1" />
              <Input required placeholder="Vehicle Type (e.g., Car, Bike)" className="col-span-1" />
              <Input required placeholder="Issue (e.g., Breakdown, Flat Tire)" className="col-span-1" />
              <Input required placeholder="Current Location" className="col-span-2" />
              <Textarea placeholder="Additional Notes (optional)" className="col-span-2" />
              <div className="col-span-2 text-center">
                <Button type="submit" className="px-8 py-4 text-lg">Send Request</Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-10">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">Request Submitted!</h2>
              <p className="text-gray-600">Our emergency team has been notified and will reach you shortly.</p>
            </div>
          )}
        </div>

        {/* Map */}
        <div className="mt-12 flex justify-center">
          <iframe
            title="Service Area Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.018589040567!2d-122.41941528468235!3d37.77492977975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c3aa3e7f3%3A0xf86e6b479b50e1bb!2s123%20Recovery%20Lane%2C%20Auto%20City!5e0!3m2!1sen!2sin!4v1659584539214!5m2!1sen!2sin"
            width="100%"
            height="220"
            className="rounded-lg shadow-md border max-w-3xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Hotline */}
        <div className="text-center mt-10">
          <p className="text-lg font-medium text-gray-800">
            📞 Emergency Hotline: <a href="tel:+919876543210" className="text-red-600 font-bold underline">+91 98765 43210</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmergencySupport;
