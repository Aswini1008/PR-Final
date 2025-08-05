"use client";

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
 
  { name: "Clients", id: "clients" },
   { name: "Projects", path: "/projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll spy
  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      if (item.id) {
        const section = document.getElementById(item.id);
        if (section) observer.observe(section);
      }
    });

    return () =>
      navItems.forEach((item) => {
        if (item.id) {
          const section = document.getElementById(item.id);
          if (section) observer.unobserve(section);
        }
      });
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  const handleNavClick = (item: any) => {
    if (item.path) {
      navigate(item.path);
    } else {
      scrollToSection(item.id);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white/90 backdrop-blur-md h-20 px-4 md:px-8 border-b border-orange-100 shadow-sm">
        <Link to="/" className="text-xl font-bold text-orange-700">PR Power</Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`cursor-pointer hover:text-orange-600 transition ${
                (item.path && location.pathname === item.path) ||
                (!item.path && activeSection === item.id)
                  ? "text-orange-600 font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="hidden md:flex space-x-3">
          <a
            href="/PR-POWER-BROCHURE.pdf"
            target="_blank"
            className="px-4 py-2 border border-orange-700 text-orange-700 rounded hover:bg-orange-100 text-sm transition"
          >
            Brochure
          </a>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 bg-orange-600 text-white rounded text-sm hover:bg-orange-700 transition"
          >
            Contact
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-orange-700">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className="fixed top-20 left-0 right-0 bg-white border-b border-orange-100 z-40 md:hidden shadow-sm"
          >
            <ul className="flex flex-col items-center py-4 space-y-3 text-gray-700 text-sm">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`cursor-pointer hover:text-orange-600 ${
                    (item.path && location.pathname === item.path) ||
                    (!item.path && activeSection === item.id)
                      ? "text-orange-600 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </li>
              ))}
              <li>
                <a
                  href="/PR-POWER-BROCHURE.pdf"
                  target="_blank"
                  className="px-4 py-2 border border-orange-700 text-orange-700 rounded hover:bg-orange-100 transition"
                >
                  Brochure
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
