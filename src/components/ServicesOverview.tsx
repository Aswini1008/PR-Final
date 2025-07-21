import { useState } from "react";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
  Zap,
  Settings,
  Package,
  TestTube,
  Wrench,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "Engineering Services",
    description: "Complete electrical engineering including SLDs, layouts & cable designs.",
    features: [
      { name: "System Design", tip: "Efficient electrical flow diagrams." },
      { name: "Foundation Engineering", tip: "Structural support analysis." },
      { name: "Relay Settings", tip: "Device calibration for fault safety." },
      { name: "Cable Scheduling", tip: "Optimized cable layouts." }
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Settings,
    title: "Installation Services",
    description: "Expert installation of AIS/GIS substations and renewable projects.",
    features: [
      { name: "AIS/GIS Substations", tip: "High-voltage insulation systems." },
      { name: "Solar EPC", tip: "Full-cycle solar engineering & build." },
      { name: "Wind EPC", tip: "Execution for wind energy." },
      { name: "Up to 400KV", tip: "High-voltage infra expertise." }
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TestTube,
    title: "Testing & Commissioning",
    description: "Up to 765kV testing and commissioning of electrical assets.",
    features: [
      { name: "CT/PT Testing", tip: "Accurate current & voltage check." },
      { name: "Isolator Testing", tip: "Reliable disconnection assurance." },
      { name: "CVT Testing", tip: "Voltage transformation validation." },
      { name: "Relay Coordination", tip: "Protective relay testing." }
    ],
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Package,
    title: "Supply Services",
    description: "Procurement & delivery of transformers, panels & accessories.",
    features: [
      { name: "Transformers", tip: "High-quality power transformers." },
      { name: "Control Panels", tip: "Protection & control systems." },
      { name: "Cable Trays", tip: "Wire support management." },
      { name: "Protection Equipment", tip: "Relays, breakers & fuses." }
    ],
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Wrench,
    title: "O&M Services",
    description: "24/7 Operations & Maintenance with predictive analytics.",
    features: [
      { name: "24/7 Operations", tip: "Non-stop system monitoring." },
      { name: "Preventive Maintenance", tip: "Downtime prevention." },
      { name: "Predictive Analysis", tip: "Early fault detection." },
      { name: "Emergency Support", tip: "Rapid issue resolution." }
    ],
    color: "from-red-500 to-rose-500"
  }
];

const ServicesWithTooltips = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
            Our Core Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            End-to-end electrical infrastructure—from engineering to execution—with technical excellence.
          </p>
        </motion.div>

        {/* Grid on desktop | Accordion on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="rounded-xl border border-border p-6 bg-card shadow-md hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div className="flex justify-between items-center cursor-pointer md:cursor-default" onClick={() => toggleAccordion(index)}>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <div className="md:hidden text-muted-foreground">
                    {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index || window.innerWidth >= 768 ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <ul className="space-y-2 mt-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Tippy content={feature.tip} placement="right" theme="light">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                        </Tippy>
                        <span className="text-sm text-foreground">{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#F26B1D] to-yellow-500 text-white rounded-full px-6 py-3 hover:scale-105 transition-all"
          >
            <Package className="w-5 h-5 mr-2" />
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesWithTooltips;
