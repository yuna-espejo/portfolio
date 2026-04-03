"use client";
import Circuit from "@/app/components/Circuit";

export default function CircuitProjectPage() {
  return (
    <main style={{
      paddingTop: "80px",
      color: "var(--text)",
      fontFamily: "var(--font-jetbrains), monospace",
    }}>
      <section style={{
        padding: "2rem 1.5rem 0",
        maxWidth: "960px",
        margin: "0 auto",
      }}>
        <Circuit />
      </section>

      <section style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
      }}>
        <div style={{ marginBottom: "3rem" }}>
          <div style={termLine}>
            <span style={{ color: "var(--accent)" }}>$</span>
            <span style={{ color: "var(--text-muted)" }}> cat circuit-simulation/README.md</span>
          </div>
          <h1 style={pageTitle}>Real-Time Circuit Simulation</h1>
          <p style={pageDesc}>
            Path interpolation + Canvas API. A car that follows the track based on real curvature data.
          </p>
        </div>

        {[
          { title: "Context", body: "Started as a way to represent an F1 circuit visually — not a static image, but something with real movement and physics." },
          { title: "Problem", body: "Make the car follow the track smoothly, with speed that varies based on actual corner geometry — not just a fixed rate." },
          { title: "Solution", body: "A system of centerline points with distance-based interpolation. Speed is computed from local curvature: tight corners slow the car, straights speed it up." },
          { title: "Real-world reference", body: "Lap time is calibrated to the actual circuit record — 1:14.637, Michael Schumacher, Ferrari, 2006.", accent: true },
          { title: "What I learned", body: "Canvas animation loops, geometry for trajectory systems, and real-time rendering performance in the browser." },
        ].map(({ title, body, accent }) => (
          <div key={title} style={block}>
            <h2 style={blockTitle}>{title}</h2>
            <p style={{ ...blockBody, color: accent ? "var(--accent)" : "var(--text-muted)" }}>{body}</p>
          </div>
        ))}

        <div style={block}>
          <h2 style={blockTitle}>Technologies</h2>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "0.5rem" }}>
            {["JavaScript", "TypeScript", "Canvas API", "requestAnimationFrame"].map(t => (
              <span key={t} style={tag}>{t}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const termLine: React.CSSProperties = {
  fontSize: "12px",
  letterSpacing: "0.04em",
  marginBottom: "1rem",
  display: "flex",
  gap: "6px",
};
const pageTitle: React.CSSProperties = {
  fontFamily: "var(--font-montserrat), sans-serif",
  fontSize: "clamp(28px, 4vw, 40px)",
  fontWeight: 900,
  color: "var(--text)",
  margin: "0 0 0.75rem",
  letterSpacing: "-0.02em",
};
const pageDesc: React.CSSProperties = {
  fontSize: "13px",
  color: "var(--text-muted)",
  lineHeight: 1.8,
  margin: 0,
};
const block: React.CSSProperties = {
  marginBottom: "2.5rem",
  paddingLeft: "1.25rem",
  borderLeft: "1px solid var(--border)",
};
const blockTitle: React.CSSProperties = {
  fontSize: "13px",
  color: "var(--text-dim)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  margin: "0 0 0.5rem",
  fontWeight: 400,
};
const blockBody: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: 1.8,
  margin: 0,
};
const tag: React.CSSProperties = {
  fontSize: "10px",
  padding: "4px 10px",
  border: "1px solid var(--border)",
  color: "var(--text-dim)",
  letterSpacing: "0.06em",
};