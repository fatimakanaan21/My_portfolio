'use client';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HoverEffect } from "../components/ui/card-hover-effect";
import { BackgroundDrops } from "../components/ui/background-drops";
import { cn } from "@/lib/utils";
import { projects } from '@/app/data/projects';
import { ProjectCard } from '../components/ProjectCard';

type Category = 'all' | 'web' | 'mobile' | 'ai';

const allCategories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'ai', label: 'AI & ML' },
];

export default function Projects() {
  const [filter, setFilter] = useState<Category>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Get available categories based on projects
  const availableCategories = useMemo(() => {
    const categories = new Set(projects.map(project => project.category));
    return allCategories.filter(category =>
      category.id === 'all' || categories.has(category.id)
    );
  }, []);

  const filteredProjects = projects.filter(project =>
    filter === 'all' ? true : project.category === filter
  );

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjectsByCategory, setFilteredProjectsByCategory] = useState(projects);

  useMemo(() => {
    if (selectedCategory === 'All') {
      setFilteredProjectsByCategory(projects);
    } else {
      setFilteredProjectsByCategory(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <main className="relative min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      {/* Background drops */}
      <div className="fixed inset-0 z-0">
        {/* <BackgroundDrops /> */}
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:24px_24px]" />

      </div>

      {/* Radial gradient for the container to give a faded look */}
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
              Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
            >
              Explore my latest work and side projects. Each project represents my passion for creating innovative solutions.
            </motion.p>
          </div>

          {/* Category Tabs */}
          <div className="mt-12 mb-16 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-purple-500/10 text-purple-300 hover:bg-purple-500/20'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto pb-16"
          >
            <AnimatePresence mode="wait">
              {filteredProjectsByCategory.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    delay: index * 0.1
                  }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
