'use client';

import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import { useIsMobile } from "@/app/hooks/useIsMobile";

// Define fixed positions and sizes for circles
const circles = [
  // Reduced number of circles and adjusted sizes for mobile
  { width: 80, height: 40, left: 20, top: 30 },
  { width: 50, height: 60, left: 70, top: 10 },
  { width: 70, height: 50, left: 40, top: 50 },
  { width: 40, height: 80, left: 10, top: 20 },
  { width: 60, height: 70, left: 80, top: 15 },
  { width: 50, height: 50, left: 30, top: 25 },
  { width: 70, height: 60, left: 25, top: 30 },
  { width: 55, height: 45, left: 5, top: 10 },
  { width: 45, height: 75, left: 60, top: 25 },
  { width: 40, height: 65, left: 15, top: 70 }
];

export const AnimatedBackdrop = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !isMobile && !prefersReducedMotion;

  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-black">
      {/* Animated gradient background - reduced animation complexity */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10"
        animate={shouldAnimate ? {
          opacity: [0.2, 0.3, 0.2],
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        {circles.map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30"
            style={{
              width: circle.width,
              height: circle.height,
              left: `${circle.left}%`,
              top: `${circle.top}%`,
            }}
            animate={shouldAnimate ? {
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            } : {}}
            transition={{
              duration: 7 + (i % 4), // Varying durations based on index
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2, // Staggered delays
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Moving light bars */}
        <motion.div
          className="absolute -left-32 top-0 h-[200px] w-[500px] rotate-45 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          animate={shouldAnimate ? {
            x: ['-100%', '200%'],
          } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -right-32 bottom-0 h-[200px] w-[500px] -rotate-45 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
          animate={shouldAnimate ? {
            x: ['200%', '-100%'],
          } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-purple-500/30 blur-xl"
          animate={shouldAnimate ? {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-32 w-32 rounded-full bg-cyan-500/30 blur-xl"
          animate={shouldAnimate ? {
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 bg-black/20" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity: 0.4,
      }} />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8))]" />
    </div>
  );
};
