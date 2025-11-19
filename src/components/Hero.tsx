import { RippleButton } from "@/components/ui/ripple-button";
import { ArrowRight, Sparkles } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import heroBackground from "@/assets/hero-background.jpg";
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBackground} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>
      
      {/* Enhanced Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-glow" style={{
      animationDelay: "1.5s"
    }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] animate-pulse-slow" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          

          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight">
            Turn <TextRotate texts={["Chaos", "Bottlenecks", "Manual Work", "Lost Leads"]} mainClassName="text-primary inline-flex" rotationInterval={2000} /> Into Predictable Revenue With Done-For-You AI Automation Systems
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ABS automates every bottleneck so your business grows on autopilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <RippleButton onClick={scrollToContact} className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-md shadow-[0_0_40px_-10px] shadow-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_-5px] hover:shadow-primary/80 hover:-translate-y-2 hover:scale-105" rippleColor="rgba(255, 255, 255, 0.3)">
              Book My Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
            </RippleButton>
          </div>

          {/* Dashboard Mockup */}
          <div className="pt-16 group perspective-[1000px]">
            <div className="relative rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border p-4 md:p-8 backdrop-blur-sm shadow-2xl transition-all duration-700 hover:shadow-[0_0_80px_-10px] hover:shadow-primary/50 hover:border-primary/40 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" style={{
              backgroundSize: '200% 100%'
            }} />
              <div className="relative rounded-lg overflow-hidden border border-border/50 shadow-inner">
                <img src={dashboardMockup} alt="AI Automation Dashboard showing real-time analytics, lead flow, and performance metrics" className="w-full h-auto transform transition-all duration-1000 group-hover:scale-[1.03]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;