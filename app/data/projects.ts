export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  featured: boolean;
  github?: string;
};

export const projects: Project[] = [
{
  slug: "circuit-simulation",
  title: "Interactive Circuit Simulation",
  description: "Real-time circuit simulation with curvature-based speed control",
  tags: ["Canvas", "JavaScript", "Simulation"],
  image: "/projects/circuit.png",
  featured: true,
},
{
  slug: "fastf1-analysis",
  title: "F1 Race Analysis",
  description: "Real telemetry data analysis using FastF1 — lap times, tyre strategy and pit stop detection from official F1 API data.",
  tags: ["Python", "FastF1", "pandas", "matplotlib"],
  image: "/projects/f1-analysis.png",
  featured: true,
  github: "https://github.com/yuna-espejo/fastf1-analysis",
},
];