import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import absLogo from "@/assets/abs-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={absLogo} alt="ABS Logo" className="h-12 w-12" />
            <span className="text-xl font-bold text-foreground">ABS</span>
          </div>

          <Button onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
            Book Strategy Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
