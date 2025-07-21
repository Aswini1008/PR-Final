"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Clients", id: "clients" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress bar
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  // Scroll spy for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -80; // navbar height
      const y = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[99]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navbar Container */}
      <nav className="fixed top-1 left-0 right-0 z-50 flex items-center justify-between bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-200 h-20 px-4 md:px-8">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold text-blue-800 cursor-pointer"
        >
          PR Power
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer hover:text-blue-600 transition ${
                activeSection === item.id ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex space-x-3">
          <a
            href="/PR-POWER-BROCHURE.pdf"
            className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white text-sm transition"
            target="_blank"
          >
            Brochure
          </a>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 bg-blue-700 text-white rounded-md text-sm hover:bg-blue-800 transition"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-20 left-0 right-0 bg-white border-b border-gray-200 z-40 md:hidden shadow-sm"
        >
          <ul className="flex flex-col items-center py-4 space-y-3 text-gray-700">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer hover:text-blue-600 text-sm ${
                  activeSection === item.id ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {item.name}
              </li>
            ))}
            <li>
              <a
                href="/PR-POWER-BROCHURE.pdf"
                target="_blank"
                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white text-sm transition"
              >
                Brochure
              </a>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 bg-blue-700 text-white rounded-md text-sm hover:bg-blue-800 transition"
              >
                Contact
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
