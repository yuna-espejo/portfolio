"use client";
import { useState } from "react";
import { projects } from "../data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [tech, setTech] = useState("All");

  const allTechs = ["All", "JavaScript", "React", "Python", "Docker", "PostgreSQL", "NumPy", "Canvas"];

  const filtered = projects.filter(p => {
    const matchesSearch = (p.title + p.description + p.tags.join(" "))
      .toLowerCase().includes(search.toLowerCase());
    const matchesTech = tech === "All" || p.tags.includes(tech);
    return matchesSearch && matchesTech;
  });

  return (
    <main style={container}>
      <div style={{ marginBottom: "3rem" }}>
        <div style={termLine}>
          <span style={{ color: "var(--accent)" }}>yuna@dev</span>
          <span style={{ color: "var(--text-dim)" }}>:~$</span>
          <span style={{ color: "var(--text-muted)" }}> ls ./projects</span>
        </div>
        <h1 style={pageTitle}>Projects</h1>
        <p style={pageDesc}>Data tools, telemetry systems and performance engineering.</p>
      </div>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem", flexWrap: "wrap", alignItems: "center" }}>
        <div style={searchWrapper}>
          <span style={searchPrefix}>grep</span>
          <input
            placeholder="search projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={searchInput}
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: "1px", marginBottom: "2.5rem", flexWrap: "wrap" }}>
        {allTechs.map(t => (
          <button key={t} onClick={() => setTech(t)} style={{
            ...filterBtn,
            background: tech === t ? "var(--accent)" : "var(--bg-card)",
            color: tech === t ? "var(--accent-dark)" : "var(--text-muted)",
            borderColor: tech === t ? "var(--accent)" : "var(--border)",
          }}>
            {t}
          </button>
        ))}
      </div>

      <div style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.06em", marginBottom: "1rem" }}>
        {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
      </div>

      <div style={grid}>
        {filtered.map(p => (
          <Link key={p.slug} href={`/projects/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={card}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ position: "relative" }}>
                <img src={p.image} style={cardImg} />
                <div style={imgOverlay} />
              </div>
              <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
                <div style={cardMeta}>
                  <span style={{ color: "var(--accent)" }}>■</span> {p.tags[0]}
                </div>
                <h3 style={cardTitle}>{p.title}</h3>
                <p style={cardDesc}>{p.description}</p>
                <div style={{ marginTop: "0.75rem", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {p.tags.map((tag, i) => <span key={i} style={tagStyle}>{tag}</span>)}
                </div>
                <div style={cardFooter}>
                  <span style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.08em", opacity: 0.7 }}>
                    ./open ——
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

const container: React.CSSProperties = { padding: "7rem 3rem 5rem", color: "var(--text)", fontFamily: "var(--font-jetbrains), monospace" };
const termLine: React.CSSProperties = { fontSize: "12px", letterSpacing: "0.04em", marginBottom: "1rem", display: "flex", gap: "4px" };
const pageTitle: React.CSSProperties = { fontFamily: "var(--font-montserrat), sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "var(--text)", margin: "0 0 0.5rem", letterSpacing: "-0.02em" };
const pageDesc: React.CSSProperties = { fontSize: "13px", color: "var(--text-muted)", margin: 0 };
const searchWrapper: React.CSSProperties = { display: "flex", alignItems: "center", border: "1px solid var(--border)", background: "var(--bg-card)", overflow: "hidden" };
const searchPrefix: React.CSSProperties = { padding: "0.6rem 0.75rem", fontSize: "11px", color: "var(--accent)", borderRight: "1px solid var(--border)", letterSpacing: "0.06em" };
const searchInput: React.CSSProperties = { padding: "0.6rem 0.75rem", background: "transparent", border: "none", outline: "none", color: "var(--text)", fontSize: "12px", fontFamily: "var(--font-jetbrains), monospace", width: "220px" };
const filterBtn: React.CSSProperties = { padding: "6px 14px", border: "1px solid", cursor: "pointer", fontSize: "11px", letterSpacing: "0.06em", fontFamily: "var(--font-jetbrains), monospace", transition: "all 0.15s" };
const grid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 340px))", gap: "1px" };
const card: React.CSSProperties = { background: "var(--bg-card)", border: "1px solid var(--border)", overflow: "hidden", transition: "all 0.2s", cursor: "pointer" };
const cardImg: React.CSSProperties = { width: "100%", height: "160px", objectFit: "cover", display: "block"};
const imgOverlay: React.CSSProperties = { position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, var(--bg) 100%)", opacity: 0 };
const cardMeta: React.CSSProperties = { fontSize: "10px", color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem", display: "flex", alignItems: "center", gap: "6px" };
const cardTitle: React.CSSProperties = { fontSize: "15px", fontWeight: 500, color: "var(--text)", margin: "0 0 0.4rem", letterSpacing: "-0.01em" };
const cardDesc: React.CSSProperties = { fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 };
const tagStyle: React.CSSProperties = { fontSize: "10px", padding: "3px 8px", border: "1px solid var(--border)", color: "var(--text-dim)", letterSpacing: "0.06em" };
const cardFooter: React.CSSProperties = { marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border-soft)" };