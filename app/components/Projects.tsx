"use client";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      style={{
        padding: "80px 60px",
        color: "white",
      }}
    >
      {/* TITLE */}
      <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
        Featured Projects
      </h2>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 280px)",
          gap: "24px",
        }}
      >
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}