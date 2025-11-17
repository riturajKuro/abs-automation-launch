import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Business Automation
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight">
            Turn <TypewriterEffect words={["Chaos", "Bottlenecks", "Manual Work", "Lost Leads"]} className="text-primary" /> Into Predictable Revenue With Done-For-You AI Automation Systems
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ABS automates every bottleneck so your business grows on autopilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-[0_0_40px_-10px] shadow-primary/50 transition-all hover:shadow-primary/70"
            >
              Book My Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Dashboard Mockup */}
          <div className="pt-16 group">
            <div className="relative rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border p-4 md:p-8 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:shadow-[0_0_60px_-15px] hover:shadow-primary/40 hover:border-primary/30">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-lg overflow-hidden border border-border/50">
                <img 
                  src={dashboardMockup} 
                  alt="AI Automation Dashboard showing real-time analytics, lead flow, and performance metrics" 
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
