'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BackgroundDrops } from "../../components/ui/background-drops";
import { projects, projectSkills, type ProjectSkill } from '@/app/data/projects';
import { ProjectCard } from '@/app/components/ProjectCard';
import { notFound } from 'next/navigation';

export default function SkillPage({ params }: { params: { id: ProjectSkill } }) {
  const skill = projectSkills[params.id];

  if (!skill) {
    notFound();
  }

  const relatedProjects = projects.filter(project =>
    project.tech.includes(params.id)
  );

  if (relatedProjects.length === 0) {
    notFound();
  }

  const Icon = skill.icon;

  return (
    <main className="relative min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Radial mask */}
      <div className="absolute inset-0 bg-black/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {/* Background drops */}
      <div className="fixed inset-0 z-0">
        <BackgroundDrops />
      </div>

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/skills"
            className="inline-flex items-center text-sm text-gray-400 hover:text-purple-400 mb-8 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Skills
          </Link>

          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 flex items-center justify-center text-purple-500">
                <Icon size={64} />
              </div>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
            >
              {skill.name}
            </motion.h1>
            <div className="flex justify-center gap-2 mb-12">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-6 h-2 rounded-full ${i < skill.level
                      ? 'bg-purple-500'
                      : 'bg-neutral-700'
                    }`}
                />
              ))}
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Projects Using {skill.name}
          </motion.h2>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto pb-16"
          >
            <AnimatePresence mode="popLayout">
              {relatedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
