"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollDown = () => {
    const target = document.getElementById("dishes");
    if (target) {
      const yOffset = -80;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Immersive Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out z-0 scale-105"
        style={{
          backgroundImage: "url('/images/hero_bg.png')",
        }}
      />
      {/* Dark Radial / Linear Overlay for Premium Contrast */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(0,0,0,0.15)_0%,rgba(5,5,5,0.95)_100%] bg-[#050505]/45 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/30 to-[#050505] z-0" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center space-x-2.5 mb-6"
        >
          <span className="h-[1px] w-8 bg-gold-500/40" />
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-500 font-medium font-sans">
            Three Michelin Stars
          </p>
          <span className="h-[1px] w-8 bg-gold-500/40" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-8 leading-[1.1] text-balance"
        >
          A Culinary Experience <br />
          <span className="text-gold-gradient italic font-light font-serif">Beyond Expectations</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
          className="text-xs sm:text-sm md:text-base tracking-[0.1em] text-[#A0A0A5] max-w-xl font-light mb-12 leading-relaxed"
        >
          Exceptional ingredients, artistic presentation, unforgettable moments.
        </motion.p>

        {/* Dynamic Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => {
              const el = document.getElementById("reservation");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 bg-gold-500 hover:bg-gold-200 text-black text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 w-full sm:w-auto shadow-lg shadow-gold-500/10 cursor-pointer"
          >
            Reserve Table
          </button>
          <button
            onClick={handleScrollDown}
            className="px-8 py-3.5 border border-white/10 hover:border-white/30 text-white text-xs font-medium uppercase tracking-[0.2em] rounded-sm transition-all duration-300 w-full sm:w-auto hover:bg-white/[0.02] cursor-pointer"
          >
            Discover Menu
          </button>
        </motion.div>
      </div>

      {/* Floating Animated Scroll Down mouse indicator */}
      <div 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer group"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#A0A0A5] group-hover:text-gold-500 transition-colors duration-300 mb-2.5">
          Scroll Down
        </span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1 group-hover:border-gold-500/40 transition-colors duration-300">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1.5 bg-gold-500 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
