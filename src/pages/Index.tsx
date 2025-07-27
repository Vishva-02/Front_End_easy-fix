import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import BookingForm from "@/components/BookingForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#fff8e1] text-[#4a3f1c]">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
