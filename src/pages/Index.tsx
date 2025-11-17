import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import WhyChoose from "@/components/WhyChoose";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Problems />
      <Solutions />
      <WhyChoose />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
