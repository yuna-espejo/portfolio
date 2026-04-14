"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";

type Lang = "en" | "es" | "ca";
const LANGS: Lang[] = ["en", "es", "ca"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 641);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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

        <div className="nav-desktop" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Link href="/projects" style={navLink}>{t.nav.projects}</Link>
          <Link href="/about" style={navLink}>{t.nav.about}</Link>
          <Link href="/contact" style={navLink}>{t.nav.contact}</Link>
          <div style={{ display: "flex", gap: "2px" }}>
            {LANGS.map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  background: lang === l ? "var(--accent)" : "transparent",
                  color: lang === l ? "var(--accent-dark)" : "var(--text-muted)",
                  border: lang === l ? "1px solid var(--accent)" : "1px solid var(--border)",
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "10px",
                  letterSpacing: "0.06em",
                  padding: "4px 7px",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {l}
              </button>
            ))}
          </div>
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
            display: "none",
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

      {menuOpen && isMobile && (
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
          <Link href="/projects" style={mobileLink} onClick={() => setMenuOpen(false)}>
            ./{t.nav.projects}
          </Link>
          <Link href="/about" style={mobileLink} onClick={() => setMenuOpen(false)}>
            ./{t.nav.about}
          </Link>
          <Link href="/contact" style={mobileLink} onClick={() => setMenuOpen(false)}>
            ./{t.nav.contact}
          </Link>
          <div style={{ display: "flex", gap: "2px", paddingTop: "0.25rem" }}>
            {LANGS.map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  background: lang === l ? "var(--accent)" : "transparent",
                  color: lang === l ? "var(--accent-dark)" : "var(--text-muted)",
                  border: lang === l ? "1px solid var(--accent)" : "1px solid var(--border)",
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "11px",
                  letterSpacing: "0.06em",
                  padding: "6px 10px",
                  cursor: "pointer",
                }}
              >
                {l}
              </button>
            ))}
          </div>
          <div style={{ paddingTop: "0.25rem", borderTop: "1px solid var(--border)" }}>
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
