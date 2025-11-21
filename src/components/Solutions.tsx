import { Share2, Target, Phone, BarChart, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const solutions = [
  {
    icon: Share2,
    title: "Social Media AI Automation",
    features: [
      "Daily high-performing automated content",
      "Auto-publishing across all platforms",
      "AI responses for comments/messages",
      "Performance tracking",
    ],
    result: "More attention, more trust, more inbound leads.",
  },
  {
    icon: Target,
    title: "AI-Powered Lead Generation System",
    features: [
      "24/7 AI funnels",
      "Automated outbound",
      "Smart lead scoring",
      "Instant qualification",
      "Follow-up sequences",
    ],
    result: "Predictable pipeline of quality prospects.",
  },
  {
    icon: Phone,
    title: "AI Voice & Call Automation",
    features: [
      "AI call assistant replies instantly",
      "Books appointments",
      "Handles FAQs",
      "Sends follow-up texts",
      "Routes urgent calls",
    ],
    result: "Never lose a high-value lead again.",
  },
  {
    icon: BarChart,
    title: "Predictive Analytics Dashboard",
    features: [
      "Lead flow probability",
      "Pipeline health",
      "Churn prediction",
      "Revenue forecasting",
      "Real-time campaign data",
    ],
    result: "Decisions based on data—not hope.",
  },
  {
    icon: Smartphone,
    title: "Unified Portal & Mobile App",
    features: [
      "Leads",
      "Conversations",
      "Calls",
      "Tasks",
      "Analytics",
      "Appointments",
    ],
    result: "Everything centralized, simple, and synced.",
  },
] as const;

type Solution = (typeof solutions)[number];

const SolutionCard = ({ solution, index }: { solution: Solution; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group p-8 rounded-2xl bg-card/60 backdrop-blur-md border border-border hover:border-primary/60 transition-all duration-700 hover:shadow-[0_0_40px_-5px] hover:shadow-primary/30 hover:-translate-y-3 hover:scale-[1.02] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 0.15}s` : "0s" }}
    >
      <div className="space-y-6">
        <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-[0_0_25px] group-hover:shadow-primary/50 transition-all duration-700">
          <solution.icon className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-condensed font-bold text-foreground group-hover:text-primary/90 transition-colors duration-500">{solution.title}</h3>

        <ul className="space-y-3">
          {solution.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-border/50">
          <p className="text-primary font-semibold">
            <span className="text-foreground">Result:</span> {solution.result}
          </p>
        </div>
      </div>
    </div>
  );
};

const Solutions = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  return (
    <section id="solutions" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div 
            ref={titleRef}
            className={`text-center space-y-4 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-condensed font-bold text-foreground">
              What ABS <span className="text-primary">Automates For You</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard key={solution.title} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
