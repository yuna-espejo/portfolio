import Hero from "./components/Hero";
import Circuit from "@/app/components/Circuit";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <div style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 3rem",
      }}>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 3rem",
      }}>
        <div style={{ width: "100%", maxWidth: "900px" }}>
          <Circuit />
        </div>
      </div>

      <Projects />
    </main>
  );
}