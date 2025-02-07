import { IconType } from 'react-icons';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
  SiAngular,
  SiBootstrap,
  SiSass,
  SiRedux,
  SiMui,
  SiFirebase,
  SiGithub,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiDotnet,
  SiFramer,
  SiThreedotjs
} from 'react-icons/si';

export type ProjectSkill = keyof typeof projectSkills;

export const projectSkills = {
  'nextjs': { name: 'Next.js', icon: SiNextdotjs, level: 5, category: 'frontend' },
  'react': { name: 'React', icon: SiReact, level: 5, category: 'frontend' },
  'angular': { name: 'Angular', icon: SiAngular, level: 5, category: 'frontend' },
  'typescript': { name: 'TypeScript', icon: SiTypescript, level: 5, category: 'language' },
  'javascript': { name: 'JavaScript', icon: SiJavascript, level: 5, category: 'language' },
  'nodejs': { name: 'Node.js', icon: SiNodedotjs, level: 4, category: 'backend' },
  'express': { name: 'Express', icon: SiExpress, level: 4, category: 'backend' },
  'mongodb': { name: 'MongoDB', icon: SiMongodb, level: 4, category: 'database' },
  'prisma': { name: 'Prisma', icon: SiPrisma, level: 4, category: 'database' },
  'postgresql': { name: 'PostgreSQL', icon: SiPostgresql, level: 4, category: 'database' },
  'tailwind': { name: 'Tailwind', icon: SiTailwindcss, level: 5, category: 'styling' },
  'bootstrap': { name: 'Bootstrap', icon: SiBootstrap, level: 4, category: 'styling' },
  'sass': { name: 'SASS', icon: SiSass, level: 4, category: 'styling' },
  'redux': { name: 'Redux', icon: SiRedux, level: 4, category: 'state' },
  'materialui': { name: 'MaterialUI', icon: SiMui, level: 4, category: 'ui' },
  'firebase': { name: 'Firebase', icon: SiFirebase, level: 4, category: 'backend' },
  'php': { name: 'Php', icon: SiPhp, level: 4, category: 'backend' },
  'laravel': { name: 'Laravel', icon: SiLaravel, level: 4, category: 'backend' },
  'mysql': { name: 'MySql', icon: SiMysql, level: 4, category: 'backend' },
  'dotnet': { name: 'Dot net', icon: SiDotnet, level: 4, category: 'backend' },
  'farmermotion': { name: 'Farmer motion', icon: SiFramer, level: 4, category: 'frontend' },
  'threejs': { name: 'Three.js', icon: SiThreedotjs, level: 4, category: 'frontend' },
} as const;

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: ProjectSkill[];
  demo?: string;
  live?: string;
  date: string;
  features: string[];
  category: string;
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'My Portfolio',
    description: 'Modern portfolio website built with Next.js 14, featuring server components, beautiful animations, and a responsive design.',
    image: '/projects/4.webp',
    tech: ['nextjs', 'react', 'farmermotion', 'typescript', 'tailwind'],
    live: '',
    date: '2025-02-07',
    features: [
      'Server-side rendering with Next.js 14',
      'Responsive design with Tailwind CSS',
      'Beautiful animations using Framer Motion',
      'Type-safe development with TypeScript',
      'Dynamic project filtering and sorting'
    ],
    category: 'Web Application'
  },
  {
    id: 'sidal-website',
    title: 'Pharmacy Administration Website (Sidal)',
    description: 'A comprehensive web application for pharmacy management, enabling inventory tracking, sales monitoring, and detailed reporting. It provides an intuitive dashboard to enhance daily operations and efficiency.',
    image: '/projects/1.webp',
    tech: ['javascript', 'react', 'materialui', 'redux'],
    demo: 'https://sidal12.netlify.app',
    date: '2023-2-01',
    "features": [
      "Efficient product and inventory management.",
      "Track sales and financial transactions.",
      "Generate detailed performance and inventory reports.",
      "User management and role-based access control.",
      "Smart alerts for low stock and inventory updates.",
      "Responsive and user-friendly design.",
      "SEO-friendly structure for better online visibility.",
      "These features do not represent all available functionalities.",
    ],
    category: 'Frontend Development'
  },
  {
    "id": "react-blog",
    "title": "React Blog",
    "description": "A modern and responsive blogging platform built with React, featuring a dynamic user interface, content management, and seamless navigation.",
    "image": "/projects/2.webp",
    "tech": ["javascript", "react", "bootstrap", "redux"],
    "live": "https://blog11233.netlify.app",
    "date": "2022-01-01",
    "features": [
      "Elegant and responsive design for an engaging reading experience.",
      "SEO-optimized structure to improve search engine visibility.",
      "User-friendly interface with easy content navigation.",
      "Integrated Redux for state management and improved performance.",
      "Call-to-action features to enhance user engagement."
    ],
    "category": "Frontend Development"
  },
  {
    id: 'nextjs-stunning-portfolio',
    title: 'Stunning portfolio',
    description: 'A sleek and modern portfolio website built with Next.js and Tailwind CSS, designed to showcase projects, skills, and achievements in an engaging and professional manner.',
    image: '/projects/3.webp',
    tech: ['javascript', 'react', 'typescript', 'nextjs', 'tailwind'],
    live: 'https://stunning-app-cvj7.vercel.app',
    date: '2023-12-01',
    "features": [
      "Fully responsive and visually appealing design.",
      "Next.js-powered performance optimization for fast loading times.",
      "Dynamic project showcase with filtering and categorization.",
      "SEO-friendly structure to enhance visibility in search engines.",
      "Interactive contact section with integrated form and social links.",
      "Dark mode support for a better user experience.",
      "Smooth animations and transitions for an elegant feel."
    ],
    category: 'Web Application'
  },
  {
    "id": "nextjs-pizza-restaurant",
    "title": "Pizza Restaurant Website",
    "description": "A full-stack multilingual restaurant website built with Next.js and PostgreSQL, offering an intuitive online ordering system, menu management, and a seamless customer experience.",
    "image": "/projects/5.webp",
    "tech": ["javascript", "react", "typescript", "nextjs", "tailwind", "postgresql"],
    "date": "2025-02-01",
    "features": [
      "Fully responsive and visually appealing design.",
      "Multilingual support (English & Arabic) for a wider audience reach.",
      "Dynamic menu with categories, item details, and real-time updates.",
      "Online ordering system with cart and checkout functionality.",
      "User authentication and role-based access for customers and admins.",
      "Admin dashboard for managing orders, menu items, and customers.",
      "SEO-friendly structure to enhance search engine visibility.",
      "Dark mode support for an improved user experience.",
      "Fast and optimized performance with Next.js server-side rendering (SSR).",
      "Secure database management using PostgreSQL."
    ],
    "category": "Full Stack Development"
  }
];
