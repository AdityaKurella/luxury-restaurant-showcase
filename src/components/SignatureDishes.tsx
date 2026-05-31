"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";

const DISHES = [
  {
    id: "scallops",
    title: "Saint-Jacques à l'Or",
    subtitle: "Pan-Seared Truffle Scallops",
    price: "$78",
    description: "Hand-dived wild Atlantic scallops perfectly caramelized, served over an airy truffle potato foam, glazed with a light saffron reduction, and topped with delicate flakes of 24k edible gold leaf.",
    ingredients: ["Atlantic Scallops", "Truffle Foam", "Saffron Glaze", "24k Gold Leaf"],
    image: "/images/dish_scallops.png",
    badge: "Signature Entry",
  },
  {
    id: "wagyu",
    title: "Miyazaki Wagyu A5",
    subtitle: "Premium Marbled Fillet",
    price: "$135",
    description: "Centuries of heritage on a plate. Slices of world-class A5 Miyazaki Wagyu beef, marbled to melt at body temperature, seared gently and finished with volcanic sea salt, served with dynamic red-wine demi-glace.",
    ingredients: ["Miyazaki A5 Wagyu", "Demi-Glace", "Volcanic Salt", "Root Glaze"],
    image: "/images/dish_wagyu.png",
    badge: "Chef Specialty",
  },
];

export default function SignatureDishes() {
  return (
    <section id="dishes" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden z-10">
      {/* Background Ambience Sparks */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-900/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-2 mb-4"
          >
            <Award className="w-4 h-4 text-gold-500" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-semibold">
              The Gastronomic Collection
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl tracking-tight text-white mb-6"
          >
            Signature Masterpieces
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[1px] w-20 bg-gold-500/30 mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xs md:text-sm text-[#A0A0A5] tracking-wide leading-relaxed"
          >
            Catering to elite sensory experiences. Each creation combines standard culinary balance with avant-garde artistic presentations.
          </motion.p>
        </div>

        {/* Dishes Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {DISHES.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: idx * 0.2 }}
              className="group flex flex-col justify-between p-6 md:p-8 bg-[#0A0A0A] border border-white/5 hover:border-gold-500/20 rounded-md transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/[0.02]"
            >
              {/* Photo Area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#050505] border border-white/5 mb-8">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  fill
                  sizes="(max-w-7xl) 50vw"
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.85] group-hover:brightness-[1]"
                />
                {/* Gold floating overlay label */}
                <div className="absolute top-4 left-4 glass-panel px-4 py-1.5 border border-gold-500/30 rounded-sm">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gold-500 font-semibold">
                    {dish.badge}
                  </p>
                </div>
              </div>

              {/* Title & Price Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide group-hover:text-gold-200 transition-colors duration-300">
                    {dish.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80 mt-1">
                    {dish.subtitle}
                  </p>
                </div>
                <span className="font-serif text-xl md:text-2xl text-gold-500 tracking-wider">
                  {dish.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-[#A0A0A5] leading-relaxed mb-6 font-light">
                {dish.description}
              </p>

              {/* Ingredients tag wrap */}
              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
                {dish.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="text-[9px] uppercase tracking-[0.15em] px-3 py-1 bg-[#121212] border border-white/5 text-[#D0D0D5] rounded-full"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
