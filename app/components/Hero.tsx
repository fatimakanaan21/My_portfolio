'use client';
import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useIsMobile } from '../hooks/useIsMobile';
import Tilt from 'react-parallax-tilt';

const techStack = [
  { name: 'Next.js', color: '#8B5CF6' }, // purple
  { name: 'React', color: '#06B6D4' }, // cyan
  { name: 'TypeScript', color: '#3B82F6' }, // blue
  { name: 'Tailwind', color: '#14B8A6' }, // teal
];

const Hero = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const [shouldAnimate, setShouldAnimate] = useState(!isMobile && !prefersReducedMotion);

  useEffect(() => {
    setShouldAnimate(!isMobile && !prefersReducedMotion);
  }, [isMobile, prefersReducedMotion]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

        <div
          className="absolute top-1/4 left-0 sm:left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/10 rounded-full blur-2xl"
        />
        <div
          className="absolute bottom-1/4 right-0 sm:right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-pink-500/10 rounded-full blur-2xl"
        />
      </div>
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-20 md:left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 md:right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Radial mask */}
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto pt-16 md:pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold md:tracking-tight">
              <div className="mb-2 md:mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 block md:inline">
                  Fatima
                </span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 block md:inline">
                  Kanaan
                </span>
              </div>
              <div className="text-xl md:text-3xl text-gray-300 font-normal mt-4">
                <div className="space-y-1">
                  <span className="inline">Building </span>
                  <span className="inline">Digital </span>
                  <span className="inline relative">
                    Experiences
                    <div className="hidden md:block absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500" />
                  </span>
                </div>
              </div>
            </h1>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
              Transforming ideas into elegant, functional, and user-friendly
              applications. Specialized in modern web development and creative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium transition-transform hover:scale-105"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="border border-gray-700group relative inline-flex items-center justify-center px-6 py-3 rounded-full overflow-hidden transition-all duration-300 ease-out hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transition-all duration-300 group-hover:opacity-100 opacity-0" />
                <span className="absolute inset-0 border border-gray-700 rounded-full group-hover:border-gray-500 transition-colors" />
                <span className="relative text-gray-300 font-medium flex items-center gap-2">
                  Contact Me
                  <svg
                    className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Content - Tech Stack */}
          <div className="flex-1 w-full mt-8 md:mt-0">
            <div className="relative w-full max-w-lg mx-auto md:ms-auto md:mx-0">
              {/* Background blobs - hidden on mobile for better performance */}
              <div className="hidden md:block absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
              <div className="hidden md:block absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
              <div className="hidden md:block absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70" />

              {/* Tech Stack Card */}
              <div className="relative px-4 md:px-0">
                <div className="p-6 md:p-8 relative backdrop-blur-lg rounded-2xl border border-gray-800/50 bg-black/50">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-4 md:mb-6">Tech Stack</h3>
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {techStack.map((tech, index) => (
                      <div
                        key={tech.name}
                        className="flex items-center space-x-3 group p-2 md:p-0"
                      >
                        <div
                          className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full"
                          style={{ backgroundColor: tech.color }}
                        />
                        <span className="text-sm md:text-base text-gray-300">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
