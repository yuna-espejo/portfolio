"use client";
import { useLang } from "@/context/LanguageContext";

export default function NetCloneProjectPage() {
  const { t } = useLang();
  const data = t.projectsData["netclone"];

  return (
    <main style={{
      paddingTop: "80px",
      color: "var(--text)",
      fontFamily: "var(--font-jetbrains), monospace",
    }}>
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
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "0.75rem" }}>
            <h1 style={pageTitle}>{data.pageTitle}</h1>
            <span style={wipBadge}>WIP</span>
          </div>
          <p style={pageDesc}>{data.pageDesc}</p>
        </div>

        {data.sections.map(({ title, body, accent }: { title: string; body: string; accent?: boolean }) => (
          <div key={title} style={block}>
            <h2 style={blockTitle}>{title}</h2>
            <p style={{ ...blockBody, color: accent ? "var(--accent)" : "var(--text-muted)" }}>{body}</p>
          </div>
        ))}

        <div style={block}>
          <h2 style={blockTitle}>{data.technologiesTitle}</h2>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "0.5rem" }}>
            {["Python", "Flask", "Playwright"].map(tech => (
              <span key={tech} style={tag}>{tech}</span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3rem" }}>
          <a
            href="https://github.com/yuna-espejo/NetClone"
            target="_blank"
            rel="noopener noreferrer"
            style={githubBtn}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-dim)";
            }}
          >
            {data.githubBtn}
          </a>
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
  margin: 0,
  letterSpacing: "-0.02em",
};
const wipBadge: React.CSSProperties = {
  fontSize: "9px",
  letterSpacing: "0.12em",
  padding: "4px 10px",
  border: "1px solid #f59e0b",
  color: "#f59e0b",
  background: "rgba(245,158,11,0.08)",
  flexShrink: 0,
  alignSelf: "center",
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
const githubBtn: React.CSSProperties = {
  display: "inline-block",
  fontSize: "12px",
  letterSpacing: "0.06em",
  padding: "8px 16px",
  border: "1px solid var(--border)",
  color: "var(--text-dim)",
  textDecoration: "none",
  transition: "all 0.2s",
  fontFamily: "var(--font-jetbrains), monospace",
};
