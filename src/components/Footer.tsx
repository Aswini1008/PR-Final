// Footer.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Download,
  Linkedin,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Engineering Services",
    "Installation Services",
    "Supply Services",
    "Testing & Commissioning",
    "O&M Services",
  ];

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-transparent" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">PR</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    PR Power & Infrastructures
                  </h3>
                  <p className="text-white/80">
                    Engineering Tomorrow's Energy Infrastructure Today
                  </p>
                </div>
              </div>

              <p className="text-white/90 leading-relaxed mb-6 max-w-md">
                Since 2018, we've delivered turnkey infrastructure solutions
                across South India in AIS/GIS substations, transmission lines,
                and renewables.
              </p>

              <a href="/brochure.pdf" download>
                <Button
                  variant="outline"
                  className="border border-orange-500 text-orange-500 hover:bg-orange-500/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Company Profile
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-orange-400">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-orange-400 transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-orange-400">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-white/80 hover:text-orange-400 transition duration-300 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-white/20 pt-8 mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-sm text-white/80">
                    +91 9080537672 • +91 9445257630
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-sm text-white/80">
                    prpowerinfra@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-sm text-white/80">
                    Chennai (Avadi), Tamil Nadu
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-white/70">
                © 2025 PR Power and Infrastructures. All rights reserved.
              </div>
              <div className="flex items-center space-x-6">
                <Link
                  to="#"
                  className="text-white/70 hover:text-orange-400 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <button
                  onClick={scrollToTop}
                  className="flex items-center space-x-2 text-white/70 hover:text-orange-400 transition"
                >
                  <ArrowUp className="w-4 h-4" />
                  <span className="text-sm">Back to top</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
