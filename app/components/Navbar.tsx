"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        padding: "18px 1.5rem",
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

        <div className="nav-desktop" style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}>
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

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-btn"
          style={{
            background: "transparent",
            border: "1px solid var(--border)",
            color: "var(--text-muted)",
            cursor: "pointer",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "11px",
            letterSpacing: "0.08em",
            padding: "6px 10px",
          }}
        >
          {menuOpen ? "[ close ]" : "[ menu ]"}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed",
          top: "57px",
          left: 0,
          right: 0,
          zIndex: 49,
          background: "var(--bg-soft)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          fontFamily: "var(--font-jetbrains), monospace",
        }}>
          <Link href="/projects" style={mobileLink} onClick={() => setMenuOpen(false)}>./projects</Link>
          <Link href="/about" style={mobileLink} onClick={() => setMenuOpen(false)}>./about</Link>
          <div style={{ paddingTop: "0.5rem", borderTop: "1px solid var(--border)" }}>
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
}

const navLink: React.CSSProperties = {
  fontSize: "12px",
  color: "var(--text-muted)",
  textDecoration: "none",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const mobileLink: React.CSSProperties = {
  fontSize: "14px",
  color: "var(--text-muted)",
  textDecoration: "none",
  letterSpacing: "0.08em",
};