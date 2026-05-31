"use client";

import { useEffect, useState } from "react";
import { Star, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      // Calculate height offset for floating navbar
      const yOffset = -80; 
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 shadow-2xl"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Monogram */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center space-x-2.5 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-9 h-9 border border-gold-500/30 rounded-full transition-all duration-300 group-hover:border-gold-500">
            <Star className="w-4 h-4 text-gold-500 transition-transform duration-700 group-hover:rotate-180" />
          </div>
          <span className="font-serif tracking-[0.25em] text-sm uppercase text-white group-hover:text-gold-200 transition-colors duration-300">
            L&apos;Étoile D&apos;Or
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {[
            { label: "Signature", id: "dishes" },
            { label: "Atmosphere", id: "atmosphere" },
            { label: "Story", id: "story" },
            { label: "Gallery", id: "gallery" },
            { label: "Reservation", id: "reservation" },
            { label: "Contact", id: "contact" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs uppercase tracking-[0.2em] text-[#A0A0A5] hover:text-gold-500 transition-colors duration-300 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => scrollToSection("reservation")}
            className="hidden sm:relative sm:inline-flex px-6 py-2.5 border border-gold-500/40 rounded-sm text-xs font-medium uppercase tracking-[0.15em] text-white hover:text-[#050505] transition-all duration-500 ease-out overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">Reserve Table</span>
            <span className="absolute inset-0 bg-gold-500 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 -z-0" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white/80 hover:text-gold-500 transition-colors p-1"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[73px] bg-[#050505]/98 backdrop-blur-md z-30 transition-all duration-500 flex flex-col items-center justify-center space-y-8 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {[
          { label: "Signature Dishes", id: "dishes" },
          { label: "Atmosphere", id: "atmosphere" },
          { label: "Chef Story", id: "story" },
          { label: "Gallery", id: "gallery" },
          { label: "Reservation", id: "reservation" },
          { label: "Contact Details", id: "contact" },
        ].map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="text-lg font-serif tracking-[0.2em] text-[#A0A0A5] hover:text-gold-500 transition-colors"
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => scrollToSection("reservation")}
          className="px-8 py-3 bg-gold-500 text-black uppercase tracking-[0.15em] text-xs font-semibold rounded-sm shadow-xl"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}
