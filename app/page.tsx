import Hero from "./components/Hero";
import StatsCounter from "./components/StatsCounter";
import TechCarousel from "./components/TechCarousel";
import Circuit from "@/app/components/Circuit";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsCounter />
      <TechCarousel />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Circuit />
      </div>
      <Projects />
    </main>
  );
}
