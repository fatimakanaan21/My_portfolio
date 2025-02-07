import FeaturedProjects from './components/FeaturedProjects';
import Hero from './components/Hero';
import Skills from './components/Skills';
import { BackgroundDrops } from "./components/ui/background-drops";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black/95 overflow-x-hidden">
      {/* Animated Backdrop with Background Drops */}
      <div className="fixed inset-0">
        {/* <BackgroundDrops /> */}
      </div>

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <Hero />

        {/* Featured Projects Preview */}
        <div className="overflow-x-hidden">
          <FeaturedProjects />
        </div>

        {/* Skills Section */}
        <div className="overflow-x-hidden">
          <Skills />
        </div>
      </div>
    </main>
  );
}
