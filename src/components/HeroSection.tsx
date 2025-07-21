"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-power-infrastructure.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden bg-black"
      style={{ minHeight: "100vh" }}
      role="banner"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="PR Power infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2C2C]/80 via-black/70 to-[#F26B1D]/70" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full px-4 sm:px-8 py-24 sm:py-32 text-white">
        <div className="max-w-5xl mx-auto text-center">
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

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
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
              className="bg-[#F26B1D] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium"
              onClick={() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Our Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <a href="/brochure.pdf" download>
              <Button
                size="lg"
                className="bg-white text-[#F26B1D] hover:bg-[#F26B1D] hover:text-white px-8 py-4 rounded-full"
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
            {[
              { value: "30+", label: "Years of Experience" },
              { value: "100+", label: "Projects Completed" },
              { value: "400kV", label: "Turnkey Capability" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-[#F26B1D]">
                  {stat.value}
                </div>
                <p className="text-white/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
