"use client";

import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import SignatureDishes from "@/components/SignatureDishes";
import Atmosphere from "@/components/Atmosphere";
import ChefStory from "@/components/ChefStory";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Interactive Custom Gold Cursor */}
      <CustomCursor />

      {/* Luxury Navigation Monogram */}
      <Navbar />

      <main className="flex-grow">
        {/* Cinematic Parallax Hero Section */}
        <Hero />

        {/* Signature Dishes Showcase */}
        <SignatureDishes />

        {/* Restaurant Atmosphere Collage */}
        <Atmosphere />

        {/* Storytelling & Craftsmanship */}
        <ChefStory />

        {/* Luxury Image Reveal Gallery */}
        <Gallery />

        {/* Interactive Reservation Workspace */}
        <Reservation />
      </main>

      {/* Accredited Minimalist Footer */}
      <Footer />
    </>
  );
}
