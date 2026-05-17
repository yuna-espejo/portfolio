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
  description: "Local tool that automatically detects your router's IP and clones its configuration (SSID + password) to a new router, so all connected devices stay online without manual reconfiguration.",
  tags: ["Python", "Flask", "Playwright"],
  image: "/projects/netclone.png",
  featured: true,
  github: "https://github.com/yuna-espejo/NetClone",
  status: "wip",
},
];