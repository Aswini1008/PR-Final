import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import AboutPreview from "@/components/AboutPreview";
import ClientsSection from "@/components/ClientsSection";
import ContactPreview from "@/components/ContactPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutPreview />
      </section>
      <section id="clients">
        <ClientsSection />
      </section>
      <section id="services">
        <ServicesOverview />
      </section>
      <section id="contact">
        <ContactPreview />
      </section>
    </div>
  );
};

export default Index;
