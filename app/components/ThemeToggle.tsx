"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("light", saved === "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
  };

  if (!mounted) return null;

  return (
    <button onClick={toggle} style={btn}
      onMouseEnter={e => {
        e.currentTarget.style.color = "var(--accent)";
        e.currentTarget.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = "var(--text-dim)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      {theme === "dark" ? "[ dark ]" : "[ light ]"}
    </button>
  );
}

const btn: React.CSSProperties = {
  background: "transparent",
  border: "1px solid var(--accent)",  // ← siempre visible
  color: "var(--accent)",              // ← siempre visible
  fontSize: "11px",
  letterSpacing: "0.08em",
  fontFamily: "var(--font-jetbrains), monospace",
  cursor: "pointer",
  textTransform: "uppercase",
  padding: "4px 10px",
  transition: "all 0.2s",
};