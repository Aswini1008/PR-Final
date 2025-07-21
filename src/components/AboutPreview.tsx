import { motion } from "framer-motion";
import { Users, Award, Shield, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import engineersImage from "@/assets/engineers-team.jpg";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Delivering excellence with unwavering quality control and engineering standards."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Led by 30+ years of leadership in high-voltage & renewable infrastructure."
  },
  {
    icon: Target,
    title: "Timely Delivery",
    description: "Reliable project execution with defined timelines and transparent communication."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "100% zero-accident record with best-in-class safety protocols."
  }
];

const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* About Us Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F26B1D]">
            About Us
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Building India's Power Future — One Project at a Time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left - Text Content */}
          <motion.article
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <header>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Driven by Vision.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26B1D] to-yellow-400">
                  Powered by Expertise.
                </span>
              </h3>
            </header>

            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              Since 2018, <strong>PR Power & Infrastructures</strong> has delivered turnkey power solutions
              across South India. Headquartered in Chennai, our reputation is built on executional precision.
            </p>

            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Under <strong>CEO Mr. P. Sakthivel</strong>, our team of seasoned engineers has commissioned
              over 100+ AIS/GIS substations, solar farms, and wind infrastructure projects.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 pl-4 border-[#F26B1D]">
                <h4 className="text-lg font-bold text-[#F26B1D] mb-1">Our Mission</h4>
                <p className="text-gray-600">
                  To engineer future-ready power infrastructure that’s reliable, scalable, and safe.
                </p>
              </div>
              <div className="border-l-4 pl-4 border-yellow-400">
                <h4 className="text-lg font-bold text-yellow-600 mb-1">Our Vision</h4>
                <p className="text-gray-600">
                  To lead India’s energy future with sustainable and smart grid innovations.
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#F26B1D] hover:bg-orange-600 text-white rounded-full px-6 py-3"
            >
              <Users className="w-5 h-5 mr-2" />
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.article>

          {/* Right - Image + Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
              <img
                src={engineersImage}
                alt="PR Power Team"
                loading="lazy"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F26B1D]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-2xl font-semibold">Our Expert Team</h4>
                <p className="text-sm text-white/90">Dedicated, Experienced & Future-Driven</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val, index) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-100 border border-gray-200 p-5 rounded-xl hover:shadow-lg transition duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-7 h-7 text-[#F26B1D] mb-2" />
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{val.title}</h4>
                    <p className="text-sm text-gray-600">{val.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;