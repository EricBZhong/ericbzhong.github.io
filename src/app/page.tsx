import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed ambient background orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="animate-float-slow absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-blue-500/[0.04] blur-3xl" />
        <div className="animate-float-slow-delayed absolute -right-32 top-2/3 h-80 w-80 rounded-full bg-cyan-500/[0.03] blur-3xl" />
      </div>

      <div className="relative z-[1]">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Footer />
      </div>
    </>
  );
}
