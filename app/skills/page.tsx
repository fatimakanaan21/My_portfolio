'use client';
import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BackgroundDrops } from "../components/ui/background-drops";
import { projects, projectSkills, type ProjectSkill } from '@/app/data/projects';

export default function SkillsPage() {
  // Get unique skills from projects and their details
  const availableSkills = useMemo(() => {
    const skillsWithProjects = new Map<ProjectSkill, number>();

    // Count how many projects use each skill
    projects.forEach(project => {
      project.tech.forEach(tech => {
        skillsWithProjects.set(tech, (skillsWithProjects.get(tech) || 0) + 1);
      });
    });

    // Only include skills that have at least one project
    return Array.from(skillsWithProjects.entries())
      .map(([skillName, projectCount]) => ({
        id: skillName as ProjectSkill,
        projectCount,
        ...projectSkills[skillName as ProjectSkill]
      }))
      .sort((a, b) => b.level - a.level); // Sort by skill level
  }, []);

  return (
    <main className="relative min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Radial mask */}
      <div className="absolute inset-0 bg-black/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {/* Background drops */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="fixed inset-0 z-0">
        {/* <BackgroundDrops /> */}
      </div>

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
            >
              Skills & Expertise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
            >
              Explore my technical skills and related projects. Click on any skill to see associated projects.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pb-16"
          >
            <AnimatePresence mode="popLayout">
              {availableSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/skills/${skill.id}`}>
                      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-neutral-900/50 to-neutral-900/30 p-6 border border-neutral-800/50 hover:border-purple-500/50 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative w-12 h-12 flex items-center justify-center text-purple-500 group-hover:text-purple-400 transition-colors">
                            <Icon size={32} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                              {skill.name}
                            </h3>
                            <div className="flex gap-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-4 h-1 rounded-full ${i < skill.level
                                    ? 'bg-purple-500'
                                    : 'bg-neutral-700'
                                    }`}
                                />
                              ))}
                            </div>
                            <div className="text-sm text-gray-400 mt-2">
                              {skill.projectCount} project{skill.projectCount !== 1 ? 's' : ''}
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
