import { AlertCircle, PhoneOff, Clock, BarChart3, Users, FileX } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
] as const;

type Problem = (typeof problems)[number];

const ProblemCard = ({ problem, index }: { problem: Problem; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-700 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 0.1}s` : "0s" }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-[0_0_20px] group-hover:shadow-primary/40 transition-all duration-500">
          <problem.icon className="w-6 h-6" />
        </div>
        <p className="text-foreground font-medium leading-relaxed pt-2 group-hover:text-primary/90 transition-colors duration-300">{problem.title}</p>
      </div>
    </div>
  );
};

const Problems = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  return (
    <section id="problems" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div 
            ref={titleRef}
            className={`text-center space-y-4 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-condensed font-bold text-foreground">
              The Bottlenecks We <span className="text-primary">Eliminate</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <ProblemCard key={problem.title} problem={problem} index={index} />
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
