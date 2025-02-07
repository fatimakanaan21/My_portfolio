'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectSkills, type Project } from '@/app/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Format date to "MMM DD, YYYY"
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    });
  };

  return (
    <Link href={`/projects/${encodeURIComponent(project.id)}`} passHref>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group h-full relative overflow-hidden rounded-xl bg-gradient-to-b from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50 hover:border-purple-500/50 transition-all duration-300"
      >
        {/* Project Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-gray-400">
              {formatDate(project.date)}
            </span>
          </div>

          <p className="text-gray-400 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((tech) => {
              const skillInfo = projectSkills[tech];
              const Icon = skillInfo.icon;
              return (
                <div
                  key={tech}
                  className="flex items-center gap-1 px-2 py-1 rounded-full text-sm bg-purple-500/10 border border-purple-500/20 text-purple-300"
                >
                  <Icon size={14} />
                  <span>{skillInfo.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hover Effect Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </motion.div>
    </Link>
  );
}
