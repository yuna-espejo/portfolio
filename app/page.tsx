import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Circuit from "@/app/components/Circuit";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Circuit />
      <About />
      <Projects />
      
    </main>
  );
}