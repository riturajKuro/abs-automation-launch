import { Check } from "lucide-react";

const benefits = [
  "Faster than hiring staff",
  "More cost-efficient than traditional agencies",
  "Scales effortlessly",
  "Real-time optimization",
  "Long-term ROI that compounds",
];

const WhyChoose = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Choose <span className="text-primary">ABS</span>
            </h2>
          </div>

          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/20 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg text-foreground font-medium">{benefit}</p>
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
