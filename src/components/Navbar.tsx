import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About Us", path: "about" },
    { name: "Services", path: "services" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  const isActive = (path: string) => activeSection === path;

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-gradient-to-r from-orange-500 to-yellow-400" style={{ width: `${scrollProgress}%` }} />

      <motion.nav 
        className="fixed top-1 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">PR</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-display font-bold text-primary">
                  PR Power & Infrastructures
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Engineering Tomorrow's Energy
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.path)}
                  className={`relative py-2 px-1 text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-orange-500"
                      : "text-foreground hover:text-orange-500"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                      layoutId="navbar-indicator"
                      initial={false}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              <a href="/brochure.pdf" download>
                <Button variant="outline" size="sm" className="border border-orange-500 text-orange-500 hover:bg-orange-500/10">
                  <Download className="w-4 h-4 mr-2" />
                  Brochure
                </Button>
              </a>
              <Button size="sm" className="bg-orange-500 text-white hover:opacity-90" onClick={() => scrollToSection('contact')}>
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              className="lg:hidden py-4 border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.path)}
                    className={`block w-full text-left py-3 px-4 text-sm font-medium rounded-lg transition-all ${
                      isActive(item.path)
                        ? "text-orange-500 bg-orange-100"
                        : "text-foreground hover:text-orange-500 hover:bg-orange-50"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                  <a href="/brochure.pdf" download>
                    <Button variant="outline" size="sm" className="w-full border border-orange-500 text-orange-500 hover:bg-orange-100">
                      <Download className="w-4 h-4 mr-2" />
                      Download Brochure
                    </Button>
                  </a>
                  <Button size="sm" className="w-full bg-orange-500 text-white hover:opacity-90" onClick={() => scrollToSection('contact')}>
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
