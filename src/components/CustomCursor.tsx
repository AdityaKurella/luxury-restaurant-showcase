"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device is desktop / has hover capabilities
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (!mediaQuery.matches) return;

    // Enable custom cursor styles in CSS
    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Track all buttons, anchors and inputs for hover states
    const updateHoverables = () => {
      const hoverables = document.querySelectorAll("a, button, select, input, textarea, .hover-target");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    // Initial setup and a small mutation observer to catch dynamic elements
    updateHoverables();
    const observer = new MutationObserver(updateHoverables);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.body.classList.remove("custom-cursor-active");
      observer.disconnect();
      const hoverables = document.querySelectorAll("a, button, select, input, textarea, .hover-target");
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-gold-500 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${hovered ? 0.5 : 1})`,
        }}
      />
      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-gold-500/55 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${hovered ? 1.6 : 1})`,
          backgroundColor: hovered ? "rgba(212, 175, 55, 0.05)" : "transparent",
          boxShadow: hovered ? "0 0 15px rgba(212, 175, 55, 0.3)" : "none",
        }}
      />
    </>
  );
}
