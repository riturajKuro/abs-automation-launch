import { AlertCircle, PhoneOff, Clock, BarChart3, Users, FileX } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Leads contacting you but never getting a reply",
  },
  {
    icon: PhoneOff,
    title: "Missed calls turning into lost revenue",
  },
  {
    icon: Clock,
    title: "Slow manual follow-up",
  },
  {
    icon: BarChart3,
    title: "Disorganized marketing across multiple platforms",
  },
  {
    icon: FileX,
    title: "No visibility into performance or ROI",
  },
  {
    icon: Users,
    title: "Staff overwhelmed with repetitive admin tasks",
  },
];

const Problems = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              The Bottlenecks We <span className="text-primary">Eliminate</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <problem.icon className="w-6 h-6" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed pt-2">{problem.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              If this sounds familiar, <span className="text-primary font-semibold">ABS removes all of it</span> with AI-powered systems that never miss a lead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
