import { Features } from "../components/home/Features";
import { Hero } from "../components/home/Hero";
import { Projects } from "../components/home/Projects";

export function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <Features />
      <Projects/>
    </div>
  );
}
