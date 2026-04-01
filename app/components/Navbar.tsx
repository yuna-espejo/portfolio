import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      justifyContent: "space-between",
      padding: "18px 3rem",
      alignItems: "center",
      background: "var(--bg-soft)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
      fontFamily: "var(--font-jetbrains), monospace",
    }}>
      <Link href="/" style={{
        fontSize: "13px",
        color: "var(--accent)",
        textDecoration: "none",
        letterSpacing: "0.04em",
      }}>
        <span style={{ color: "var(--text-dim)" }}>~/</span>yunaespejo
      </Link>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <Link href="/projects" style={navLink}>projects</Link>
        <Link href="/about" style={navLink}>about</Link>
        <ThemeToggle />
        <span style={{
          fontSize: "10px",
          color: "var(--text-dim)",
          letterSpacing: "0.1em",
          borderLeft: "1px solid var(--border)",
          paddingLeft: "1.5rem",
        }}>v2025.1</span>
      </div>
    </nav>
  );
}

const navLink: React.CSSProperties = {
  fontSize: "12px",
  color: "var(--text-muted)",
  textDecoration: "none",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};