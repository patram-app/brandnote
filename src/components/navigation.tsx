"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navButtonClasses = `transition-all duration-300 font-medium hover:scale-105 ${
    isScrolled
      ? "text-white hover:text-accent"
      : "text-foreground hover:text-accent"
  }`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "floating-nav mt-4 mx-4 rounded-2xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-2xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent"
        >
          BrandNote
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {["hero", "comparison", "how-it-works", "benefits"].map(
            (section, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(section)}
                className={navButtonClasses}
              >
                {section === "hero"
                  ? "Home"
                  : section === "comparison"
                  ? "Why Better"
                  : section === "how-it-works"
                  ? "How It Works"
                  : "Benefits"}
              </button>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Contact Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground hover:text-accent transition-colors"
        >
          {isMobileMenuOpen ? (
            <X size={24} className={isScrolled ? "text-white" : "text-black"} />
          ) : (
            <Menu
              size={24}
              className={isScrolled ? "text-white" : "text-black"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          ref={menuRef} // <-- assign ref here
          initial={{ opacity: 0, y: -10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.97 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 rounded-t-2xl mx-4 shadow-xl overflow-hidden"
        >
          <div className="px-6 py-6 flex flex-col space-y-4 text-center">
            {[
              { label: "Home", section: "hero" },
              { label: "Why Better", section: "comparison" },
              { label: "How It Works", section: "how-it-works" },
              { label: "Benefits", section: "benefits" },
            ].map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.section)}
                whileHover={{ scale: 1.05, color: "#60A5FA" }}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-white text-lg font-medium py-2 rounded-xl transition-all duration-200"
              >
                {item.label}
              </motion.button>
            ))}

            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-2xl shadow-lg transition-all duration-200"
            >
              Contact Now
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
