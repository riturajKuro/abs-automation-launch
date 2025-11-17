import { Share2, Target, Phone, BarChart, Smartphone } from "lucide-react";

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
];

const Solutions = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              What ABS <span className="text-primary">Automates For You</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_-10px] hover:shadow-primary/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit group-hover:scale-110 transition-transform">
                    <solution.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>

                  <ul className="space-y-3">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
