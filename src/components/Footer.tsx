import absLogo from "@/assets/abs-logo.png";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { RippleButton } from "@/components/ui/ripple-button";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <img src={absLogo} alt="ABS Logo" className="h-10 w-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                <span className="text-lg font-condensed font-bold text-foreground">ABS</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Automated Business Systems - Turn chaos into predictable revenue with AI automation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-foreground font-condensed font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm inline-block hover:translate-x-1">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm inline-block hover:translate-x-1">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm inline-block hover:translate-x-1">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm inline-block hover:translate-x-1">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-foreground font-condensed font-semibold">Connect</h3>
              <div className="flex gap-4">
                <RippleButton className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                  <Linkedin className="w-5 h-5" />
                </RippleButton>
                <RippleButton className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                  <Twitter className="w-5 h-5" />
                </RippleButton>
                <RippleButton className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                  <Mail className="w-5 h-5" />
                </RippleButton>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Automated Business Systems. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
