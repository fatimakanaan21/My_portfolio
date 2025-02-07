'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks: { title: string; links: { name: string; href: string; target?: string }[] }[] = [
  {
    title: 'Quick Links',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Skills', href: '/skills' },
    ],
  },
  {
    title: 'Social',
    links: [
      { name: 'GitHub', href: 'Kanaanfatima69@gmail.com', target: '_blank' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/fatima-kanaan-06b450219', target: '_blank' },
      { name: 'Facebook', href: 'https://www.facebook.com/fatima.latakia.96', target: '_blank' },
    ],
  },
];

const Footer = () => {
  const [year] = React.useState(() => new Date().getFullYear());

  return (
    <footer className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-48 -left-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-48 -right-48 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
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
        <div className="absolute inset-0 bg-black/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500">
                Portfolio
              </h2>
              <p className="mt-4 text-gray-400 text-sm max-w-xs leading-relaxed">
                Building digital experiences with modern web technologies.
              </p>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-medium text-white/90">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.target}
                      className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200 inline-flex items-center group"
                    >
                      {link.name}
                      <motion.span
                        className="inline-block ml-1 opacity-0 group-hover:opacity-100"
                        initial={{ x: -5 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="text-center text-gray-400 text-sm">
            &copy; {year} Portfolio. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
