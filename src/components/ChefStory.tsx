"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ChefStory() {
  return (
    <section id="story" className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden z-10">
      {/* Background glow stops */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-900/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Chef Image Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-sm border border-white/10 hover:border-gold-500/20 transition-colors duration-500 group shadow-2xl"
            >
              <Image
                src="/images/chef_julien.png"
                alt="Chef Julien Julian"
                fill
                sizes="(max-w-7xl) 40vw"
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 filter grayscale contrast-[1.1] brightness-[0.8] group-hover:brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Chef Story Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-gold-500 mb-4"
            >
              Chef Story
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl text-white tracking-wide mb-8 animate-pulse-slow"
            >
              Crafting <br />
              <span className="text-gold-gradient italic font-light">Extraordinary Moments</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-[1px] w-16 bg-gold-500/30 mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-xs md:text-sm text-[#A0A0A5] leading-relaxed mb-6 font-light"
            >
              Culinary craftsmanship is more than the arrangement of taste; it is the expression of our soul. Led by Michelin-starred culinary designer Chef Julien Julian, L&apos;Étoile D&apos;Or stands at the intersection of local organic excellence and avant-garde gastronomy.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-xs md:text-sm text-[#A0A0A5] leading-relaxed mb-8 font-light"
            >
              Our tasting selections change weekly to preserve absolute seasonal integrity, ensuring that every course is a bespoke exploration of textures, aromas, and sensory details.
            </motion.p>

            {/* Slogan block from frame reference */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5 }}
              className="border-l-2 border-gold-500/30 pl-4 mb-10 text-xs md:text-sm text-gold-200/80 italic font-serif leading-relaxed"
            >
              &ldquo;Passionate inside our visual world and focus giving you delicious product.&rdquo;
            </motion.blockquote>

            {/* Signature Area from references */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="flex flex-col items-start"
            >
              <span className="font-signature text-5xl md:text-7xl text-gold-500 select-none tracking-wider mb-2 drop-shadow-lg leading-none">
                Julien Julian
              </span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-[#A0A0A5] ml-4 font-semibold">
                Executive Chef & Founder
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
