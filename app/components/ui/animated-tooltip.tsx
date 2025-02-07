"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex gap-2 relative">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="absolute -inset-4 rounded-lg bg-white dark:bg-slate-800/[0.8] opacity-0 group-hover:opacity-100 transition duration-300"
            layoutId="menu"
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredIndex === idx ? 1 : 0,
              scale: hoveredIndex === idx ? 1 : 0.9,
            }}
            style={{
              zIndex: hoveredIndex === idx ? 1 : 0,
            }}
          >
            <div className="px-4 py-3 text-center">
              <div className="font-medium text-gray-700 dark:text-zinc-100">
                {item.name}
              </div>
              <div className="text-sm text-gray-500 dark:text-zinc-400">
                {item.designation}
              </div>
            </div>
          </motion.div>
          <Image
            src={item.image}
            height={40}
            width={40}
            className="object-cover rounded-full border-2 border-white group-hover:scale-105 transition duration-300"
            alt={item.name}
          />
        </div>
      ))}
    </div>
  );
};
