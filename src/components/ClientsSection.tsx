import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CountUp from "react-countup";

const clients = [
  { name: "Sterling & Wilson", placeholder: "S" },
  { name: "Vena Energy", placeholder: "V" },
  { name: "TVS Group", placeholder: "T" },
  { name: "PGCIL", placeholder: "P" },
  { name: "TNEB", placeholder: "T" },
  { name: "Daikin", placeholder: "D" },
  { name: "Mahindra", placeholder: "M" },
  { name: "L&T", placeholder: "L" }
];

const testimonials = [
  {
    name: "Rajesh, Project Manager at TVS Group",
    text: "PR Power delivered our substation project ahead of schedule with zero defects.",
    avatar: "https://i.pravatar.cc/100?u=rajesh"
  },
  {
    name: "Priya, Engineer at Sterling & Wilson",
    text: "Their O&M team ensures our plant runs 24/7 with minimal downtime.",
    avatar: "https://i.pravatar.cc/100?u=priya"
  }
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-orange-500 mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            We proudly collaborate with top-tier companies to power India's energy and industrial revolution.
          </p>
        </motion.div>

        {/* Client Logo Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 }
            }}
            loop
          >
            {clients.map((client, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-44 justify-center transition hover:scale-105 duration-300 border border-orange-200 dark:border-orange-400/20">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 text-white flex items-center justify-center font-bold text-lg mb-3">
                    {client.placeholder}
                  </div>
                  <p className="font-semibold text-sm text-gray-800 dark:text-white">
                    {client.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Animated Metrics */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-card rounded-xl shadow-lg p-6 text-center border border-orange-200">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              <CountUp end={50} duration={2} suffix="+" />
            </div>
            <p className="text-muted-foreground font-medium">Enterprise Clients</p>
          </div>
          <div className="bg-card rounded-xl shadow-lg p-6 text-center border border-orange-200">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              <CountUp end={95} duration={2} suffix="%" />
            </div>
            <p className="text-muted-foreground font-medium">Client Retention Rate</p>
          </div>
          <div className="bg-card rounded-xl shadow-lg p-6 text-center border border-orange-200">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              <CountUp end={24} duration={2} suffix="/7" />
            </div>
            <p className="text-muted-foreground font-medium">Customer Support</p>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Swiper spaceBetween={30} slidesPerView={1} loop>
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <blockquote className="bg-muted/40 rounded-xl shadow-md p-8 max-w-3xl mx-auto text-center transition hover:shadow-lg">
                  <div className="flex justify-center mb-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-full shadow-md object-cover"
                    />
                  </div>
                  <p className="text-lg italic text-muted-foreground">“{t.text}”</p>
                  <footer className="mt-4 text-orange-500 font-semibold not-italic">{t.name}</footer>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
