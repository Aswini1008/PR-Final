"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-power-infrastructure.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="PR Power infrastructure"
          className="w-full h-full object-cover scale-105 md:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2C2C]/80 via-black/70 to-[#F26B1D]/70" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-display"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Powering Tomorrow with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26B1D] to-yellow-300">
              Trusted Infrastructure
            </span>{" "}
            Today
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Leading South India's turnkey execution of AIS/GIS substations,
            transmission lines, solar/wind energy, and commissioning — backed
            by 30+ years of excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-[#F26B1D] hover:bg-orange-600 text-white text-base px-8 py-4 rounded-full font-medium transition"
              onClick={() => navigate("/projects")}
            >
              View Our Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <a href="/PR-POWER-BROCHURE.pdf" download>
              <Button
                size="lg"
                className="bg-white text-[#F26B1D] hover:bg-[#F26B1D] hover:text-white text-base px-8 py-4 rounded-full transition"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Brochure
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <div>
              <div className="text-4xl font-bold text-[#F26B1D]">30+</div>
              <p className="text-white/80 text-sm mt-1">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F26B1D]">100+</div>
              <p className="text-white/80 text-sm mt-1">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F26B1D]">400kV</div>
              <p className="text-white/80 text-sm mt-1">Turnkey Capability</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
