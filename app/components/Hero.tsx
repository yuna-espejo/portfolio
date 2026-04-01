"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [tick, setTick] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => !t), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={s.section}>
      <div style={s.gridBg} />

      <div style={s.layout}>
        <div style={s.left}>
          <div style={s.terminalLine}>
            <span style={s.prompt}>yuna@dev</span>
            <span style={s.dim}>:</span>
            <span style={s.path}>~</span>
            <span style={s.dim}>$</span>
            <span style={s.cmd}> cat about.md</span>
            <span style={{ ...s.cursor, opacity: tick ? 1 : 0 }}>█</span>
          </div>

          <h1 style={s.name}>
            Yuna<br />
            <span style={s.nameOutline}>Espejo</span>
          </h1>

          <div style={s.tagRow}>
            <span style={s.dot} />
            <span style={s.tagText}>available for opportunities</span>
          </div>

          <p style={s.desc}>
            Junior Consultant @{" "}
            <span style={s.hl}>Timestamp Group.</span><br />
            Finishing <span style={s.hl}>ASIX</span> · Starting CS @{" "}
            <span style={s.hl}>UOC</span> this September.<br />
            Building data tools and motorsport visualizations.
          </p>

          <div style={s.ctaRow}>
            <a href="/projects" style={s.btnPrimary}>./projects</a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" style={s.btnGhost}>
              cat cv.pdf
            </a>
          </div>
        </div>

        <div style={s.right}>
          {[
            { label: "current role", value: "Junior Consultant", accent: true },
            { label: "stack", value: "Node · React · Canvas" },
            { label: "next milestone", value: "CS @ UOC · Sept '25", accent: true },
            { label: "focus area", value: "Software Engineering" },
          ].map(({ label, value, accent }) => (
            <div key={label} style={s.statBlock}>
              <div style={s.statLabel}>{label}</div>
              <div style={s.statValue}>
                {accent && <span style={s.accentSquare}>■ </span>}
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={s.bottomBar}>
        <span style={s.coords}>41.3851° N, 2.1734° E — Barcelona</span>
        <span style={s.scrollHint}>scroll to explore ——</span>
      </div>
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  section: {
    position: "relative",
    minHeight: "100vh",
    background: "var(--bg)",
    overflow: "hidden",
    fontFamily: "var(--font-jetbrains), monospace",
    color: "var(--text)",
    display: "flex",
    flexDirection: "column",
  },
  gridBg: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(var(--grid) 1px, transparent 1px)," +
      "linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    pointerEvents: "none",
  },
  layout: {
    position: "relative",
    zIndex: 2,
    flex: 1,
    display: "grid",
    gridTemplateColumns: "1fr 260px",
    gap: "2rem",
    alignItems: "center",
    padding: "6rem 3rem 5rem",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  right: {
    display: "flex",
    flexDirection: "column",
    gap: "1px",
    alignSelf: "center",
  },
  terminalLine: {
    fontSize: "13px",
    letterSpacing: "0.04em",
    display: "flex",
    alignItems: "center",
    marginBottom: "1.25rem",
  },
  prompt: { color: "var(--prompt)" },
  dim: { color: "var(--text-dim)" },
  path: { color: "var(--path)" },
  cmd: { color: "var(--text-muted)" },
  cursor: { color: "var(--prompt)", marginLeft: "3px" },
  name: {
    fontFamily: "var(--font-montserrat), sans-serif",
    fontSize: "clamp(44px, 6.5vw, 80px)",
    fontWeight: 900,
    lineHeight: 1.0,
    letterSpacing: "-0.02em",
    color: "var(--text)",
    margin: "0 0 1.25rem",
    padding: 0,
  },
  nameOutline: {
  color: "var(--text-dim)",
  },
  tagRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  dot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "var(--accent)",
    flexShrink: 0,
    animation: "pulse 2s ease-in-out infinite",
  },
  tagText: {
    fontSize: "11px",
    color: "var(--accent)",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  desc: {
    fontSize: "14px",
    color: "var(--text-muted)",
    lineHeight: 1.9,
    maxWidth: "420px",
    margin: "0 0 2rem",
    padding: 0,
  },
  hl: { color: "var(--text)" },
  ctaRow: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: "var(--accent)",
    color: "var(--accent-dark)",
    fontFamily: "var(--font-jetbrains), monospace",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "0.75rem 1.5rem",
    textDecoration: "none",
    display: "inline-block",
  },
  btnGhost: {
    background: "transparent",
    color: "var(--text-muted)",
    fontFamily: "var(--font-jetbrains), monospace",
    fontSize: "12px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "0.75rem 1.5rem",
    border: "1px solid var(--border)",
    textDecoration: "none",
    display: "inline-block",
  },
  statBlock: {
    border: "1px solid var(--border)",
    padding: "1rem 1.25rem",
    background: "var(--bg-card)",
  },
  statLabel: {
    fontSize: "10px",
    color: "var(--text-dim)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "0.3rem",
  },
  statValue: {
    fontSize: "13px",
    color: "var(--text)",
  },
  accentSquare: { color: "var(--accent)" },
  bottomBar: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 3rem",
    borderTop: "1px solid var(--border)",
  },
  coords: {
    fontSize: "11px",
    color: "var(--text-dim)",
    letterSpacing: "0.06em",
  },
  scrollHint: {
    fontSize: "11px",
    color: "var(--text-dim)",
    letterSpacing: "0.1em",
  },
};