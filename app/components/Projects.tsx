"use client";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  return (
    <section style={{
      padding: "5rem 3rem",
      fontFamily: "var(--font-jetbrains), monospace",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "2rem" }}>
        <div style={{ width: "2px", height: "48px", background: "var(--accent)", flexShrink: 0, marginTop: "4px" }} />
        <div>
          <div style={{ fontSize: "12px", color: "var(--text-dim)", letterSpacing: "0.06em", marginBottom: "0.25rem" }}>
            <span style={{ color: "var(--accent)" }}>$</span> ls ./projects --featured
          </div>
          <h2 style={{ fontSize: "22px", fontWeight: 500, color: "var(--text)", margin: 0, fontFamily: "var(--font-montserrat), sans-serif", letterSpacing: "-0.01em" }}>
            Featured Projects
          </h2>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 320px))", gap: "1px" }}>
        {featured.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </section>
  );
}