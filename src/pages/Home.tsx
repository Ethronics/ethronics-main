import { CallToAction } from "../components/home/Cta";
import { Features } from "../components/home/Features";
import { Hero } from "../components/home/Hero";
// import { Projects } from "../components/home/Projects";
import { Solutions } from "../components/home/Solutions";

export function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      
      <Features />
      <Solutions/>
      {/* <Projects/> */}
      <CallToAction />
      
    </div>
  );
}
