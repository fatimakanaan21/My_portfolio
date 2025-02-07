'use client';
import React from 'react';
import { motion } from 'framer-motion';
// import Testimonials from '../components/Testimonials';
import Image from 'next/image';
import { SiApache } from "react-icons/si";


const AboutContent = () => {
  const experiences = [
    {
      year: "2024 - SEP 2024",
      title: "Front-End Developer",
      company: "BIS Technology Company",
      description: [
        "Developed high-performance web applications using React and Next.js, increasing client satisfaction.",
        "Designed and implemented dynamic dashboards and reports, improving data visualization.",
        "Optimized application performance, reducing load times by 30%.",
        "Collaborated with cross-functional teams to deliver projects on time.",
      ],
    },
    {
      year: "2023 - DEC 2023",
      title: "Front-End Developer ",
      company: "AeroControl Company",
      description: [
        "Designed and implemented web applications for fuel, sales, and procurement management using React and Bootstrap.",
        "Delivered high-quality code, meeting all project objectives and deadlines.",
        "Ensured optimized performance and user-friendly design, increasing productivity by 25%.",
      ],
    },
    {
      year: "2022 - DEC 2022",
      title: "Frontend Developer",
      company: "Freelancer",
      description: [
        "Developed a pharmacy administration website using React and Material UI.",
        "Improved functionality for managing products, employees, and reports."
      ],
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-x-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.1] pointer-events-none" />
      <div className="absolute h-full w-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 relative z-10 py-20 overflow-x-hidden">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              About Me
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 items-center mb-20 overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="overflow-hidden"
          >
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              The Journey So Far
            </h2>
            <p className="text-gray-300 mb-6">
            Motivated Front-End Developer with 2+ years of experience in creating responsive and user-friendly web
applications, Expertise in React and Next.js, focusing on developing efficient interfaces and seamless user
experiences, Skilled in problem-solving and adaptable to dynamic environments.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        {/* <Testimonials /> */}

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto overflow-hidden"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Professional Journey
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="relative pl-8 md:pl-0 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-purple-400 font-medium">{exp.year}</span>
                  </div>
                  <div className="flex-grow bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
                    <h3 className="text-xl text-white font-semibold mb-2">{exp.title}</h3>
                    <p className="text-purple-400 mb-2">{exp.company}</p>
                    {exp.description.map((desc, idx) => (
                      <p key={idx} className="text-gray-400 mb-2">
                        <SiApache className='inline size-6' /> {desc}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="absolute left-0 top-3 md:left-[7.5rem] w-3 h-3 bg-purple-400 rounded-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 mb-8">
            Interested in collaborating or have a project in mind?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutContent;
