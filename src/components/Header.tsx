"use client"; 
import { Equal, X, Moon, Sun } from "lucide-react";
import * as React from "react"; 
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";   
import { Toggle } from "@/components/ui/toggle";
import { useEffect, useState } from "react";
import absLogo from "@/assets/abs-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const menuItems = [
  { name: "Problems", href: "#problems" },
  { name: "Solutions", href: "#solutions" },
  { name: "Why Choose Us", href: "#why-choose" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-50 w-full px-3 md:px-4 transition-colors duration-300",
          isScrolled ? "border-transparent" : "border-b border-border/50"
        )}
      >
        <div
          className={cn(
            "mx-auto mt-2 transition-all duration-300",
            isScrolled &&
              "bg-background/50 max-w-5xl rounded-2xl border border-border/50 backdrop-blur-xl px-3 shadow-2xl shadow-primary/10"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-3 py-3">
            <div className="flex w-full justify-between lg:w-auto">
              <a
                href="#"
                aria-label="home"
                className="flex gap-3 items-center group cursor-pointer"
              >
                <img
                  src={absLogo}
                  alt="Automated Business Systems Logo"
                  className="h-12 w-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_15px_rgba(0,217,255,0.3)]"
                />
                <span className="text-lg font-condensed font-bold text-foreground tracking-wide hidden sm:inline">
                  ABS
                </span>
              </a>
              <div className="flex gap-2">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 pr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Equal className="in-data-[state=active]:rotate-180 scale-120 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-120 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden lg:block size-fit">
              <Menus />
            </div>

            <div className="in-data-[state=active]:block border backdrop-blur-2xl lg:in-data-[state=active]:flex hidden w-full flex-wrap items-center justify-end space-y-8 rounded-sm p-3 shadow-3xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden block p-3">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary text-sm block duration-150"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0">
                <ModeToggle />
                <Button
                  variant={"default"}
                  onClick={scrollToContact}
                  className={cn(
                    isScrolled && "lg:hidden",
                    "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] transition-all duration-500"
                  )}
                >
                  <span>Book Strategy Call</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Problems We Solve",
    href: "#problems",
    description:
      "See the common business bottlenecks we eliminate with automation.",
  },  
  {
    title: "Our Solutions",
    href: "#solutions",
    description:
      "Explore our comprehensive AI automation systems and services.",
  },  
  {
    title: "AI Integrations",
    href: "#integrations",
    description: "Powered by industry-leading AI platforms like Claude, OpenAI, and more.",
  },
  {
    title: "Why Choose ABS",
    href: "#why-choose",
    description:
      "Discover what makes us different in AI automation and business systems.",
  },
  {
    title: "Strategy Call",
    href: "#contact",
    description:
      "Book your free consultation to discover how we can transform your business.",
  },
  {
    title: "Contact Us",
    href: "#contact",
    description:
      "Get in touch to discuss your automation needs and start your journey.",
  },
];

export function Menus() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-xs")}
          >
            <a href="#problems">Problems</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-xs")}
          >
            <a href="#solutions">Solutions</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-xs")}
          >
            <a href="#why-choose">Why Choose Us</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-xs">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-2">
            <ul className="grid gap-3 md:grid-cols-3 max-w-xl lg:w-3xl">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-xs")}
          >
            <a href="#contact">Contact</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a className="p-3 block hover:bg-accent rounded-md transition-colors" href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-xs leading-snug mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

export function ModeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col justify-center">
      <div>
        <Toggle
          className="group bg-secondary dark:bg-secondary data-[state=on]:hover:bg-muted cursor-pointer size-9 data-[state=on]:bg-transparent"
          pressed={theme === "dark"}
          onPressedChange={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <Moon
            size={16}
            className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
            aria-hidden="true"
          />
          <Sun
            size={16}
            className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
            aria-hidden="true"
          />
        </Toggle>
      </div>
    </div>
  );
}

export { Header };
