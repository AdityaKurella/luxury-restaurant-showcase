"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Atmosphere() {
  return (
    <section id="atmosphere" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title Section with Frame Reference Glow */}
        <div className="flex flex-col items-center justify-center text-center mb-20 relative">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-gold-500 mb-4"
          >
            Restaurant Ambiance
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl uppercase tracking-[0.1em] text-white"
          >
            Every Detail Considered
          </motion.h2>

          {/* Golden glowing shine underline from references */}
          <div className="relative mt-6 w-72 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent">
            {/* Glow bead */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold-200 filter blur-sm opacity-60 animate-pulse" />
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-100 to-transparent" />
          </div>
        </div>

        {/* Atmosphere Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="group relative overflow-hidden rounded-sm border border-white/5 hover:border-gold-500/30 transition-all duration-500 aspect-[3/4]"
          >
            <Image
              src="/images/hero_bg.png"
              alt="Salon d'Honneur"
              fill
              className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-[0.7] group-hover:brightness-[0.9]"
            />
            {/* Card Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <span className="text-[9px] uppercase tracking-[0.25em] text-gold-500 mb-1 font-sans">
                Fine Dining Hall
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-white tracking-wide">
                Le Salon d&apos;Honneur
              </h3>
              <p className="text-[10px] text-[#A0A0A5] tracking-wide mt-2 font-light max-w-[80%] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Crisp linens, hand-blown crystal, and candle-lit privacy.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Bar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="group relative overflow-hidden rounded-sm border border-white/5 hover:border-gold-500/30 transition-all duration-500 aspect-[3/4] md:translate-y-6"
          >
            <Image
              src="/images/luxury_bar.png"
              alt="Crystal Bar"
              fill
              className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-[0.7] group-hover:brightness-[0.9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <span className="text-[9px] uppercase tracking-[0.25em] text-gold-500 mb-1 font-sans">
                Curated Cocktails
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-white tracking-wide">
                The Crystal Bar
              </h3>
              <p className="text-[10px] text-[#A0A0A5] tracking-wide mt-2 font-light max-w-[80%] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Backlit warm glows displaying the finest spirits in the world.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Cellar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="group relative overflow-hidden rounded-sm border border-white/5 hover:border-gold-500/30 transition-all duration-500 aspect-[3/4]"
          >
            <Image
              src="/images/hero_bg.png"
              alt="La Cave Royale"
              fill
              className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-[0.7] group-hover:brightness-[0.8] saturate-[0.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <span className="text-[9px] uppercase tracking-[0.25em] text-gold-500 mb-1 font-sans">
                Sommelier Selections
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-white tracking-wide">
                La Cave Royale
              </h3>
              <p className="text-[10px] text-[#A0A0A5] tracking-wide mt-2 font-light max-w-[80%] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                A massive selection of rare grand crus in dark gold cellar vaults.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
