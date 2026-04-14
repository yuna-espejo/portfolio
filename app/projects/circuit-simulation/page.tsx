"use client";
import Circuit from "@/app/components/Circuit";
import { useLang } from "@/context/LanguageContext";

export default function CircuitProjectPage() {
  const { t } = useLang();
  const data = t.projectsData["circuit-simulation"];

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
            <span style={{ color: "var(--text-muted)" }}> {data.readmeCmd}</span>
          </div>
          <h1 style={pageTitle}>{data.pageTitle}</h1>
          <p style={pageDesc}>{data.pageDesc}</p>
        </div>

        {data.sections.map(({ title, body, accent }) => (
          <div key={title} style={block}>
            <h2 style={blockTitle}>{title}</h2>
            <p style={{ ...blockBody, color: accent ? "var(--accent)" : "var(--text-muted)" }}>{body}</p>
          </div>
        ))}

        <div style={block}>
          <h2 style={blockTitle}>{data.technologiesTitle}</h2>
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
