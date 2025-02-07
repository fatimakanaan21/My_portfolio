'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  SiAngular,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiGraphql,
  SiJavascript,
  SiNextdotjs
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <SiReact className='size-6 text-blue-500' />,
    description: "Building modern apps",
    level: "Advanced"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className='size-6 text-black/70' />,
    description: "Building modern apps",
    level: "Advanced"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className='size-6 text-blue-500' />,
    description: "Type-safe development",
    level: "Advanced"
  },
  {
    name: "javascript",
    icon: <SiJavascript className='size-6 text-yellow-500' />,
    description: "Type-safe development",
    level: "Advanced"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className='size-6 text-blue-500' />,
    description: "Rapid UI development",
    level: "Advanced"
  },
];

const Skills = () => {
  return (
    <section className="relative py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/3 -right-20 md:right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 -left-20 md:left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
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

      <div className="relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.05}
                transitionSpeed={2000}
                className="h-full"
              >
                <div className="group relative bg-white/[0.05] backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.1] transition-colors border border-white/[0.05] h-full">
                  <div className="flex items-center gap-4 mb-3">
                    {skill.icon}
                    <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{skill.description}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: skill.level === "Advanced" ? "90%" : "75%" }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className={`h-full rounded-full ${skill.level === "Advanced"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500"
                          : "bg-gradient-to-r from-cyan-500 to-blue-500"
                          }`}
                      />
                    </div>
                    <span className="text-xs text-gray-500">{skill.level}</span>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
