// src/components/layout/Navbar.tsx

import { Button } from "@/components/ui/button";
import { Menu, X, LifeBuoy, BookOpen, ShieldCheck, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Collections", href: "/products" },
  ];

  const supportLinks = [
    {
      title: "Help Center",
      href: "/help",
      description: "Find answers to common questions.",
      icon: <LifeBuoy className="h-4 w-4" />,
    },
    {
      title: "Documentation",
      href: "/documentation",
      description: "Technical guides and product specs.",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      title: "Quality Guide",
      href: "/quality-guide",
      description: "Our commitment to excellence.",
      icon: <ShieldCheck className="h-4 w-4" />,
    },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass + gradient shell */}
      <div className="relative border-b border-white/10 bg-zinc-950/55 backdrop-blur-xl">
        {/* Premium gradient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
          <div className="absolute -top-24 left-1/2 h-44 w-[640px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -top-32 right-20 h-44 w-44 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main row */}
          <div className="flex h-16 items-center justify-between">
            {/* LEFT: Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Good Deal Logo" className="h-20 w-auto" />
              <div className="hidden sm:block">
                <div className="text-sm font-semibold tracking-wide text-white/90">
                  Good Deal
                </div>
                <div className="text-[11px] text-white/55 -mt-0.5">
                  Premium collections
                </div>
              </div>
            </Link>

            {/* CENTER: Main nav (pill) */}
            <nav className="hidden md:flex items-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur">
                <div className="flex items-center gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-medium transition",
                        "text-white/75 hover:text-white hover:bg-white/8",
                        isActive(item.href) && "bg-white/10 text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* RIGHT: Support + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "rounded-xl border border-white/10 bg-white/5 px-4 py-2",
                        "text-sm font-medium text-white/80 hover:text-white hover:bg-white/10"
                      )}
                    >
                      Support
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="bg-zinc-950/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl">
  <div className="w-[280px] p-3">
    <div className="space-y-1">
      {supportLinks.map((link) => (
        <Link
          key={link.title}
          to={link.href}
          className={cn(
            "flex items-start gap-3 rounded-lg px-3 py-2 transition",
            "text-white/80 hover:text-white",
            "hover:bg-white/10"
          )}
        >
          <span className="mt-1 text-white/60">{link.icon}</span>
          <div>
            <div className="text-sm font-medium text-white/90">
              {link.title}
            </div>
            <div className="text-xs text-white/55">
              {link.description}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</NavigationMenuContent>

                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="h-7 w-px bg-white/10" />

              <Button
                variant="cta"
                size="default"
                asChild
                className={cn(
                  "rounded-xl bg-white text-white hover:bg-white/90",
                  "shadow-lg shadow-black/30"
                )}
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* MOBILE: Menu button */}
            <button
              className={cn(
                "md:hidden inline-flex items-center justify-center rounded-xl",
                "h-10 w-10 text-white/85 hover:text-white",
                "bg-white/5 hover:bg-white/10 border border-white/10"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* MOBILE panel */}
          {isOpen && (
            <div className="md:hidden pb-5 pt-4 border-t border-white/10">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 transition",
                      "border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10",
                      isActive(item.href) && "bg-white/10 text-white"
                    )}
                  >
                    {item.name}
                    <ChevronRight className="h-4 w-4 text-white/40" />
                  </Link>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="text-xs font-semibold tracking-wider text-white/50 px-1">
                  SUPPORT
                </div>
                <div className="mt-2 space-y-2">
                  {supportLinks.map((link) => (
                    <Link
                      key={link.title}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 transition",
                        "border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10"
                      )}
                    >
                      <span className="text-white/70">{link.icon}</span>
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Button
                variant="cta"
                size="default"
                asChild
                className={cn(
                  "mt-4 w-full rounded-xl bg-white text-zinc-950 hover:bg-white/90"
                )}
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
