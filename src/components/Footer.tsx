"use client";

import { Star, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#050505] text-white border-t border-white/5 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Logo & Slogan Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2.5 mb-6">
              <div className="flex items-center justify-center w-8 h-8 border border-gold-500/30 rounded-full">
                <Star className="w-3.5 h-3.5 text-gold-500" />
              </div>
              <span className="font-serif tracking-[0.25em] text-xs uppercase text-white">
                L&apos;Étoile D&apos;Or
              </span>
            </div>
            <p className="text-[10px] text-[#A0A0A5] tracking-wide leading-relaxed font-light mb-6">
              Three Michelin Stars. A sensory journey of culinary mastery and elegant hospitality curated in the heart of Paris.
            </p>
            {/* Socials */}
            <div className="flex items-center space-x-4">
              <a href="#" className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-[#A0A0A5] hover:text-gold-500 hover:border-gold-500/30 transition-all duration-300" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-[#A0A0A5] hover:text-gold-500 hover:border-gold-500/30 transition-all duration-300" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.9.2-1.2 1-1.2h2V2h-3c-3 0-5 1.8-5 4.8V8z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-[#A0A0A5] hover:text-gold-500 hover:border-gold-500/30 transition-all duration-300" aria-label="Twitter">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-gold-500 mb-6">
              Explore
            </h4>
            <ul className="space-y-3.5 text-[11px] uppercase tracking-[0.15em] text-[#A0A0A5] font-light">
              <li>
                <a href="#dishes" className="hover:text-gold-500 transition-colors">
                  Signature Menu
                </a>
              </li>
              <li>
                <a href="#atmosphere" className="hover:text-gold-500 transition-colors">
                  Our Atmosphere
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-gold-500 transition-colors">
                  Chef Biography
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-500 transition-colors">
                  Media Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-gold-500 mb-6">
              Inquiries
            </h4>
            <ul className="space-y-3.5 text-[11px] text-[#A0A0A5] font-light tracking-wide">
              <li>
                <span className="block text-[8px] uppercase tracking-[0.2em] text-white/50 mb-0.5">Reservations Desk</span>
                <span className="hover:text-gold-500 transition-colors">+33 1 45 67 89 00</span>
              </li>
              <li>
                <span className="block text-[8px] uppercase tracking-[0.2em] text-white/50 mb-0.5">Press & Events</span>
                <span className="hover:text-gold-500 transition-colors">press@letoiledor.com</span>
              </li>
            </ul>
          </div>

          {/* Michelin Citation Column */}
          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-gold-500 mb-6">
              Accreditation
            </h4>
            <div className="flex items-start space-x-3 bg-[#0A0A0A] p-4 border border-white/5 rounded-sm">
              <ShieldCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white font-medium mb-1">
                  Verified Excellence
                </p>
                <p className="text-[9px] text-[#A0A0A5] leading-relaxed font-light">
                  L&apos;Étoile D&apos;Or is proudly featured in the Michelin Guide with three stars, representing exceptional cuisine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-white/5 mb-8" />

        {/* Bottom copyright and legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] uppercase tracking-[0.25em] text-[#606065] font-medium">
          <p>© {new Date().getFullYear()} L&apos;Étoile D&apos;Or. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
