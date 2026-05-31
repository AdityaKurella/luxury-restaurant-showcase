"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";

const GALLERY_ITEMS = [
  { id: 1, src: "/images/dish_scallops.png", title: "Gastronomic Texture", size: "col-span-1 lg:col-span-8" },
  { id: 2, src: "/images/luxury_bar.png", title: "Ambient Luminescence", size: "col-span-1 lg:col-span-4" },
  { id: 3, src: "/images/hero_bg.png", title: "Immaculate Assembly", size: "col-span-1 lg:col-span-4" },
  { id: 4, src: "/images/dish_wagyu.png", title: "Flawless Execution", size: "col-span-1 lg:col-span-8" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-2 mb-4"
          >
            <Camera className="w-4 h-4 text-gold-500" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-semibold">
              Visual Archives
            </span>
          </motion.div>

          <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-white mb-6">
            A Glimpse of Perfection
          </h2>
          
          <div className="h-[1px] w-20 bg-gold-500/30 mb-6" />

          <p className="text-xs md:text-sm text-[#A0A0A5] tracking-wide leading-relaxed font-light">
            Step into the artistic visual world of L&apos;Étoile D&apos;Or. A celebration of ingredients, craftsmanship, and elegant luxury design.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.15 }}
              className={`${item.size} group relative aspect-[16/10] overflow-hidden rounded-sm border border-white/5 hover:border-gold-500/20 transition-all duration-500 bg-[#0A0A0A]`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-w-7xl) 60vw"
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 filter brightness-[0.75] group-hover:brightness-[0.95]"
              />
              {/* Overlay with subtle blur & gold glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                <span className="text-[8px] uppercase tracking-[0.3em] text-gold-500 mb-1 font-sans">
                  Gallery Entry #{item.id}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-white tracking-wider">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
