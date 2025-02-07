"use client";

import { motion } from "framer-motion";
import React from "react";

export const BackgroundDrops = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Purple drop */}
      <motion.div
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [0.8, 1, 0.8],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
      />

      {/* Blue drop */}
      <motion.div
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 0.8, 1],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
      />

      {/* Pink drop */}
      <motion.div
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [0.8, 1, 0.8],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
      />

      {/* Cyan drop */}
      <motion.div
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 0.8, 1],
          x: [0, -50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
      />
    </div>
  );
};
