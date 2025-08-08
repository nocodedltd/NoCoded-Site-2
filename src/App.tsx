
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/hooks/useTheme";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import HowItWorks from "@/pages/HowItWorks";
import Services from "@/pages/Services";
import ServicesShowcase from "@/pages/ServicesShowcase";
import ClientLogin from "@/pages/ClientLogin";
import NotFound from "@/pages/NotFound";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import AiAgents from "@/pages/services/AiAgents";
import AiTransformation from "@/pages/services/AiTransformation";
import BespokeAI from "@/pages/services/BespokeAI";
import ProcessAutomation from "@/pages/services/ProcessAutomation";

const queryClient = new QueryClient();

// Global Floating Orbs Component
const FloatingOrbs = () => {
  const orbs = [
    { id: 1, size: "w-32 h-32", opacity: "opacity-20", duration: 8, delay: 0, position: "top-20 left-20" },
    { id: 2, size: "w-24 h-24", opacity: "opacity-15", duration: 10, delay: 1, position: "top-40 right-32" },
    { id: 3, size: "w-40 h-40", opacity: "opacity-25", duration: 6, delay: 2, position: "bottom-32 left-16" },
    { id: 4, size: "w-20 h-20", opacity: "opacity-10", duration: 11, delay: 3, position: "bottom-20 right-20" },
    { id: 5, size: "w-36 h-36", opacity: "opacity-18", duration: 9, delay: 4, position: "top-1/2 left-1/3" },
    { id: 6, size: "w-28 h-28", opacity: "opacity-12", duration: 7, delay: 5, position: "top-1/3 right-1/4" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute ${orb.size} ${orb.opacity} ${orb.position} rounded-full bg-gradient-to-br from-[#f9dec9]/30 to-[#6e74af]/20 blur-md`}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#f9dec9]"></div>
          <p className="mt-4 text-[#f9dec9]">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="aura-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            
            {/* Global Floating Orbs Background */}
            <FloatingOrbs />
            
            <div className="flex flex-col min-h-screen relative z-10">
              <Navbar />
              <div className="pt-20">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services-showcase" element={<ServicesShowcase />} />
                  <Route path="/client-login" element={<ClientLogin />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/services/ai-agents" element={<AiAgents />} />
                  <Route path="/services/ai-transformation" element={<AiTransformation />} />
                  <Route path="/services/bespoke-ai" element={<BespokeAI />} />
                  <Route path="/services/process-automation" element={<ProcessAutomation />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
