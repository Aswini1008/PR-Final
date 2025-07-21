import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import AboutPreview from "@/components/AboutPreview";
import ClientsSection from "@/components/ClientsSection";
import ContactPreview from "@/components/ContactPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <ServicesOverview />
      </section>
      <section id="about">
        <AboutPreview />
      </section>
      <section id="projects">
        <ClientsSection />
      </section>
      <section id="contact">
        <ContactPreview />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
