export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  featured: boolean;
  github?: string;
  status?: "wip";
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
  title: "F1 Telemetry Analysis Tool",
  description: "Interactive F1 telemetry analysis — lap times, speed trace, pit stop detection and driver comparison using real race data from the official F1 API.",
  tags: ["Python", "FastF1", "pandas", "matplotlib"],
  image: "/projects/f1-analysis.png",
  featured: true,
  github: "https://github.com/yuna-espejo/fastf1-analysis",
},
{
  slug: "netclone",
  title: "NetClone",
  description: "Automates new router setup when switching ISP — detects the router's IP, opens its admin panel via Playwright, and applies your existing SSID and password so every device reconnects automatically.",
  tags: ["Python", "Flask", "Playwright"],
  image: "/projects/netclone.png",
  featured: true,
  github: "https://github.com/yuna-espejo/NetClone",
  status: "wip",
},
];