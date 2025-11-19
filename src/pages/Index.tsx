import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import WhyChoose from "@/components/WhyChoose";
import { IntegrationCarousel } from "@/components/IntegrationCarousel";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Problems />
        <Solutions />
        <WhyChoose />
        <IntegrationCarousel />
        <ContactForm />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
