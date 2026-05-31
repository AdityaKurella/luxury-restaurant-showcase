"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Clock, Compass, Phone } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "2 Guests",
    session: "Dinner - 8:30 PM",
    date: "",
  });
  const [isBooked, setIsBooked] = useState(false);

  const triggerGoldConfetti = () => {
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      // Golden colors
      const colors = ["#D4AF37", "#FFF6D6", "#C5A059", "#F3E5AB"];

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.date) {
      alert("Please fill out your Name and Date to make a reservation.");
      return;
    }

    setIsBooked(true);
    triggerGoldConfetti();

    // Compile dynamic message for WhatsApp redirect
    const waNumber = "1234567890"; // Dummy restaurant booking number
    const message = `Bonjour L'Étoile D'Or! I would like to request a Michelin-star dining reservation.
- Name: ${formData.name}
- Date: ${formData.date}
- Session: ${formData.session}
- Party Size: ${formData.guests}`;

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

    // Redirect after 1.8 seconds so they can see the confetti!
    setTimeout(() => {
      window.open(waUrl, "_blank");
      setIsBooked(false);
    }, 1800);
  };

  return (
    <section id="reservation" className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden z-10 border-t border-white/5">
      {/* Dynamic Gold Glow in background */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gold-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Premium Booking Workspace */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6 p-8 md:p-12 bg-[#050505] border border-white/5 hover:border-gold-500/20 rounded-md transition-colors duration-500 flex flex-col justify-center"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold-500 mb-2 font-semibold">
              Reservation System
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-4 animate-pulse-slow">
              Please choose the services
            </h2>
            <p className="text-xs text-[#A0A0A5] tracking-wide mb-8 font-light">
              Secure your place at our table. Table assignments are allocated upon confirmation.
            </p>

            <form onSubmit={handleBooking} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-[9px] uppercase tracking-[0.2em] text-[#D0D0D5] mb-2 font-semibold">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded-sm py-3 px-4 text-xs text-white placeholder-white/30 focus:border-gold-500/60 focus:outline-none transition-colors duration-300 font-sans"
                  />
                </div>
              </div>

              {/* Grid for Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Party Size */}
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] text-[#D0D0D5] mb-2 font-semibold">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500/70" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded-sm py-3 pl-10 pr-4 text-xs text-white focus:border-gold-500/60 focus:outline-none transition-colors duration-300 font-sans appearance-none"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Session Select */}
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] text-[#D0D0D5] mb-2 font-semibold">
                    Session Period
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500/70" />
                    <select
                      value={formData.session}
                      onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded-sm py-3 pl-10 pr-4 text-xs text-white focus:border-gold-500/60 focus:outline-none transition-colors duration-300 font-sans appearance-none"
                    >
                      <option>Lunch - 12:30 PM</option>
                      <option>Lunch - 2:00 PM</option>
                      <option>Dinner - 6:00 PM</option>
                      <option>Dinner - 8:30 PM</option>
                      <option>Dinner - 9:30 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-[9px] uppercase tracking-[0.2em] text-[#D0D0D5] mb-2 font-semibold">
                  Session Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500/70" />
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded-sm py-3 pl-10 pr-4 text-xs text-white focus:border-gold-500/60 focus:outline-none transition-colors duration-300 font-sans [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Booking Button */}
              <button
                type="submit"
                disabled={isBooked}
                className="w-full relative py-4 bg-gold-500 hover:bg-gold-200 text-black font-semibold text-xs uppercase tracking-[0.25em] rounded-sm shadow-xl shadow-gold-500/10 hover:shadow-gold-500/20 transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[50px]"
              >
                {isBooked ? (
                  <span className="flex items-center space-x-2">
                    <span className="animate-spin h-3.5 w-3.5 border-2 border-black border-t-transparent rounded-full" />
                    <span>Confirming...</span>
                  </span>
                ) : (
                  <span>Book Now</span>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Details, Hours & Map Photo overlay */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-6 p-8 md:p-12 bg-[#050505] border border-white/5 rounded-md flex flex-col justify-between"
          >
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold-500 mb-2 font-semibold block">
                Chef Story Highlight
              </span>
              <p className="text-xs md:text-sm text-gold-200/90 italic font-serif leading-relaxed mb-6">
                &ldquo;Passionate inside our visual world and focus giving you delicious product. Web / Mobile / Tablet.&rdquo;
              </p>
              
              <div className="h-[1px] w-full bg-white/5 my-6" />

              <h3 className="font-serif text-lg text-white mb-6 uppercase tracking-wider">
                Contact & Locality
              </h3>

              <ul className="space-y-4 text-xs md:text-sm font-light text-[#A0A0A5]">
                <li className="flex items-start space-x-3.5">
                  <Compass className="w-4.5 h-4.5 text-gold-500/70 mt-0.5 shrink-0" />
                  <span>18 Champs-Élysées Avenue, Paris 75008, France</span>
                </li>
                <li className="flex items-center space-x-3.5">
                  <Phone className="w-4.5 h-4.5 text-gold-500/70 shrink-0" />
                  <span>+33 1 45 67 89 00</span>
                </li>
              </ul>

              <div className="h-[1px] w-full bg-white/5 my-6" />

              <h4 className="font-serif text-sm text-white mb-4 uppercase tracking-wider">
                Service Schedule
              </h4>
              <div className="grid grid-cols-2 gap-4 text-xs font-light text-[#A0A0A5]">
                <div>
                  <p className="font-medium text-white mb-1">Lunch Selections</p>
                  <p>Mon - Sun: 12:00 PM - 3:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Dinner Selections</p>
                  <p>Mon - Sun: 6:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Photo detail overlay */}
            <div className="relative aspect-[3/1] w-full mt-8 rounded-sm overflow-hidden border border-white/5 group bg-[#0A0A0A]">
              <Image
                src="/images/luxury_bar.png"
                alt="Table Setup Detail"
                fill
                sizes="(max-w-7xl) 50vw"
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55]"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/70 group-hover:text-gold-200 transition-colors duration-300 font-semibold text-center leading-relaxed">
                  Experience The Ambiance In Person
                </span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
