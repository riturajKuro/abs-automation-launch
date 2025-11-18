import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  "Faster than hiring staff",
  "More cost-efficient than traditional agencies",
  "Scales effortlessly",
  "Real-time optimization",
  "Long-term ROI that compounds",
];

const WhyChoose = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();
  
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div 
            ref={titleRef}
            className={`text-center space-y-4 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-condensed font-bold text-foreground">
              Why Choose <span className="text-primary">ABS</span>
            </h2>
          </div>

          <div 
            ref={cardRef}
            className={`p-8 md:p-12 rounded-2xl bg-gradient-to-br from-card/70 to-card/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-700 hover:shadow-[0_0_50px_-10px] hover:shadow-primary/30 hover:-translate-y-1 ${
              cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group flex items-center gap-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-500 hover:translate-x-3 hover:shadow-[0_0_20px_-5px] hover:shadow-primary/20 ${
                    cardVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: cardVisible ? `${index * 0.1}s` : "0s" }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-150 group-hover:shadow-[0_0_15px] group-hover:shadow-primary/60 transition-all duration-500">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg text-foreground font-medium group-hover:text-primary/90 transition-colors duration-300">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border/50">
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                These systems aren't hype. They're <span className="text-primary font-semibold">infrastructure that increases revenue</span> month after month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
