export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'mobile' | 'other';
}

export const skills: Skill[] = [
  {
    id: 'nextjs',
    name: 'Next.js',
    description: 'A React framework for production-grade applications with server-side rendering and static site generation capabilities.',
    icon: '/icons/nextjs.svg',
    color: '#000000',
    level: 5,
    category: 'frontend'
  },
  {
    id: 'react',
    name: 'React',
    description: 'A JavaScript library for building user interfaces with component-based architecture.',
    icon: '/icons/react.svg',
    color: '#61DAFB',
    level: 5,
    category: 'frontend'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'A typed superset of JavaScript that compiles to plain JavaScript, adding optional static types.',
    icon: '/icons/typescript.svg',
    color: '#3178C6',
    level: 4,
    category: 'frontend'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.',
    icon: '/icons/nodejs.svg',
    color: '#339933',
    level: 4,
    category: 'backend'
  },
  {
    id: 'python',
    name: 'Python',
    description: 'A versatile programming language that lets you work quickly and integrate systems effectively.',
    icon: '/icons/python.svg',
    color: '#3776AB',
    level: 4,
    category: 'backend'
  }
];
