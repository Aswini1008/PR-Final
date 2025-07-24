"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", path: "/projects" }, // Route-based
  { name: "Clients", id: "clients" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // Scroll spy for section highlighting
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
      if (item.id) {
        const section = document.getElementById(item.id);
        if (section) observer.observe(section);
      }
    });

    return () => {
      navItems.forEach((item) => {
        if (item.id) {
          const section = document.getElementById(item.id);
          if (section) observer.unobserve(section);
        }
      });
    };
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white bg-opacity-90 backdrop-blur-md border-b border-orange-100 h-20 px-4 md:px-8 shadow-sm">
        <Link to="/" className="text-xl font-bold text-orange-700">
          PR Power
        </Link>

        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          {navItems.map((item) =>
            item.path ? (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`hover:text-orange-600 transition ${
                    location.pathname === item.path
                      ? "text-orange-600 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ) : (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id!)}
                className={`cursor-pointer hover:text-orange-600 transition ${
                  activeSection === item.id ? "text-orange-600 font-semibold" : ""
                }`}
              >
                {item.name}
              </li>
            )
          )}
        </ul>

        <div className="hidden md:flex space-x-3">
          <a
            href="/PR-POWER-BROCHURE.pdf"
            target="_blank"
            className="px-4 py-2 border border-orange-700 text-orange-700 rounded-md hover:bg-orange-100 text-sm transition"
          >
            Brochure
          </a>
          <span
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 bg-orange-600 text-white rounded-md text-sm hover:bg-orange-700 transition cursor-pointer"
          >
            Contact
          </span>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-700 focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-20 left-0 right-0 bg-white border-b border-orange-100 z-40 md:hidden shadow-sm"
        >
          <ul className="flex flex-col items-center py-4 space-y-3 text-gray-700 text-sm">
            {navItems.map((item) =>
              item.path ? (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-orange-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ) : (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className={`cursor-pointer hover:text-orange-600 ${
                    activeSection === item.id ? "text-orange-600 font-semibold" : ""
                  }`}
                >
                  {item.name}
                </li>
              )
            )}
            <li>
              <a
                href="/PR-POWER-BROCHURE.pdf"
                target="_blank"
                className="px-4 py-2 border border-orange-700 text-orange-700 rounded-md hover:bg-orange-100 transition"
              >
                Brochure
              </a>
            </li>
            <li>
              <span
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition cursor-pointer"
              >
                Contact
              </span>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
