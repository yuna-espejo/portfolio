"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [tick, setTick] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => !t), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      background: "var(--bg)",
      overflow: "hidden",
      fontFamily: "var(--font-jetbrains), monospace",
      color: "var(--text)",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "linear-gradient(var(--grid) 1px, transparent 1px)," +
          "linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative",
        zIndex: 2,
        flex: 1,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 260px",
        gap: "2rem",
        alignItems: "center",
        padding: isMobile ? "3rem 1.5rem 4rem" : "6rem 3rem 5rem",
      }}>
        {/* LEFT */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{
            fontSize: "13px",
            letterSpacing: "0.04em",
            display: "flex",
            alignItems: "center",
            marginBottom: "1.25rem",
            flexWrap: "wrap",
            gap: "1px",
          }}>
            <span style={{ color: "var(--prompt)" }}>yuna@dev</span>
            <span style={{ color: "var(--text-dim)" }}>:</span>
            <span style={{ color: "var(--path)" }}>~</span>
            <span style={{ color: "var(--text-dim)" }}>$</span>
            <span style={{ color: "var(--text-muted)" }}> cat about.md</span>
            <span style={{ color: "var(--prompt)", marginLeft: "3px", opacity: tick ? 1 : 0 }}>█</span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: isMobile ? "clamp(44px, 14vw, 72px)" : "clamp(44px, 6.5vw, 80px)",
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            margin: "0 0 1.25rem",
            padding: 0,
          }}>
            Yuna<br />
            <span style={{ color: "var(--text-dim)" }}>Espejo</span>
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "var(--accent)", flexShrink: 0,
              animation: "pulse 2s ease-in-out infinite",
              display: "inline-block",
            }} />
            <span style={{ fontSize: "11px", color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              available for opportunities
            </span>
          </div>

          <p style={{
            fontSize: "14px",
            color: "var(--text-muted)",
            lineHeight: 1.9,
            maxWidth: "420px",
            margin: "0 0 2rem",
            padding: 0,
          }}>
            Junior Consultant @{" "}
            <span style={{ color: "var(--text)" }}>Timestamp Group.</span><br />
            Finishing <span style={{ color: "var(--text)" }}>ASIX</span> · Starting CS @{" "}
            <span style={{ color: "var(--text)" }}>UOC</span> this September.<br />
            Building data tools and motorsport visualizations.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="/projects" style={{
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
            }}>./projects</a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" style={{
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
            }}>cat cv.pdf</a>
          </div>
        </div>

        {/* RIGHT — stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "1fr",
          gap: "1px",
          alignSelf: isMobile ? "start" : "center",
          marginTop: isMobile ? "1.5rem" : 0,
        }}>
          {[
            { label: "current role", value: "Junior Consultant", accent: true },
            { label: "stack", value: "Node · React · Canvas" },
            { label: "next milestone", value: "CS @ UOC · Sept '25", accent: true },
            { label: "focus area", value: "Software Engineering" },
          ].map(({ label, value, accent }) => (
            <div key={label} style={{
              border: "1px solid var(--border)",
              padding: "1rem 1.25rem",
              background: "var(--bg-card)",
            }}>
              <div style={{
                fontSize: "10px",
                color: "var(--text-dim)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "0.3rem",
              }}>{label}</div>
              <div style={{ fontSize: "13px", color: "var(--text)" }}>
                {accent && <span style={{ color: "var(--accent)" }}>■ </span>}
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "1rem 1.5rem" : "1rem 3rem",
        borderTop: "1px solid var(--border)",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}>
        <span style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.06em" }}>
          41.3851° N, 2.1734° E — Barcelona
        </span>
        <span style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.1em" }}>
          scroll to explore ——
        </span>
      </div>
    </section>
  );
}