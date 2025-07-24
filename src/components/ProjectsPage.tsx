import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Project data
const projects = [
  {
    title: "400kV AIS Substation - Chennai",
    image: "/projects/ais400.jpg",
    description: "Turnkey EPC execution of 400kV Air Insulated Substation with control & relay panels.",
  },
  {
    title: "220kV GIS Substation - Coimbatore",
    image: "/projects/gis220.jpg",
    description: "Gas Insulated Substation with compact layout and high-reliability design.",
  },
  {
    title: "Wind Farm Infra - Tirunelveli",
    image: "/projects/windfarm.jpg",
    description: "Complete infra for 75MW wind farm including pooling station & evacuation lines.",
  },
  {
    title: "Solar EPC – Trichy",
    image: "/projects/solar.jpg",
    description: "Design, procurement, and construction of 10MW ground-mounted solar plant.",
  },
  {
    title: "Transmission Line - Andhra",
    image: "/projects/txline.jpg",
    description: "220kV double circuit line spanning 15km with tension towers and OPGW.",
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-[url('/projects-banner.jpg')] bg-cover bg-center text-white py-28">
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Turnkey infrastructure solutions across India’s power sector
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white text-gray-800 py-20 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-orange-600 mb-4"
          >
            Featured Work
          </motion.h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-12">
            Explore our successful executions in substations, renewables, and power transmission.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative group rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center px-4 text-white text-center">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm mt-1">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16"
          >
            <a
              href="/brochure.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
            >
              Download Full Project Brochure <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ProjectsPage;
