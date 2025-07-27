import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookingPage from "@/pages/BookingPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Gallery from "@/pages/Gallery";
import Services from "./components/Services";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import EmergencySupport from "@/pages/EmergencySupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />

        <div className="flex flex-col min-h-screen">
          {/* Main content */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/services" element={<Services />} />
              <Route path="/emergency-support" element={<EmergencySupport />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {/* Footer only once */}
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
