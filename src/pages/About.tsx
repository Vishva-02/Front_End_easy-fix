import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TestimonialSlider from "@/components/TestimonialSlider";
import Team from "@/components/Team";

const About = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (video && entry.isIntersecting) {
          video.play();
          setIsPlaying(true);
        } else if (video) {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 px-6 md:px-20 space-y-16 bg-white text-[#3b2f0b]">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4 text-yellow-700">About Easy Fix</h1>
        <p className="text-lg leading-relaxed">
          Easy Fix is your trusted partner in 24/7 car recovery, breakdown assistance, and vehicle repair.
          With over a decade of experience and a highly trained team, we bring your car back on the road quickly and safely.
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[
          ["5,000+", "Vehicles Recovered"],
          ["10+", "Years of Experience"],
          ["100%", "Customer Satisfaction"],
        ].map(([number, label], i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-yellow-50 p-6 rounded-xl shadow-md"
          >
            <h2 className="text-3xl font-bold text-yellow-700">{number}</h2>
            <p className="text-sm mt-2">{label}</p>
          </motion.div>
        ))}
      </div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-yellow-700">Behind the Scenes at Easy Fix</h2>
        <div className="relative rounded-xl overflow-hidden shadow-lg">
        <video
            ref={videoRef}
            className="w-full h-[450px] object-cover"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            onCanPlay={() => console.log("Video ready to play")}>
            <source src="/videos/car-easy-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
        </video>


          {/* Play/Pause Button */}
          <button
            onClick={togglePlayback}
            className="absolute bottom-4 right-4 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full shadow-md transition"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </motion.div>

      {/* Team Section */}
      <Team />

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-[#806400] border-t border-yellow-300">
        © 2025 Easy Fix Recovery. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
