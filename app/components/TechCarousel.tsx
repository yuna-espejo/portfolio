"use client";
import { useLang } from "@/context/LanguageContext";

const TECHS = [
  { icon: "JS", name: "JavaScript" },
  { icon: "TS", name: "TypeScript" },
  { icon: "RE", name: "React" },
  { icon: "NO", name: "Node.js" },
  { icon: "NX", name: "Next.js" },
  { icon: "CA", name: "Canvas API" },
  { icon: "PY", name: "Python" },
  { icon: "SP", name: "SAP BTP" },
  { icon: "EX", name: "Excel" },
  { icon: "GT", name: "Git" },
  { icon: "DK", name: "Docker" },
  { icon: "PG", name: "PostgreSQL" },
];

export default function TechCarousel() {
  const { t } = useLang();
  const allItems = [...TECHS, ...TECHS];

  return (
    <section style={{
      padding: "0 0 4rem",
      overflow: "hidden",
      fontFamily: "var(--font-jetbrains), monospace",
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 1.5rem",
        marginBottom: "1.5rem",
      }}>
        <div style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>
          <span style={{ color: "var(--accent)" }}>$</span> {t.tech.cmd}
        </div>
        <h2 style={{
          fontSize: "18px",
          fontWeight: 500,
          color: "var(--text)",
          margin: 0,
          fontFamily: "var(--font-montserrat), sans-serif",
        }}>
          {t.tech.title}
        </h2>
      </div>

      <div style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "1rem 0",
        position: "relative",
      }}>
        <div style={{
          display: "flex",
          width: "max-content",
          animation: "techScroll 25s linear infinite",
        }}>
          {allItems.map((tech, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.5rem 1.5rem",
              flexShrink: 0,
            }}>
              <span style={{
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                background: "rgba(127,255,127,0.08)",
                color: "var(--accent)",
                padding: "3px 6px",
                fontFamily: "var(--font-jetbrains), monospace",
              }}>
                {tech.icon}
              </span>
              <span style={{
                fontSize: "12px",
                color: "var(--text-muted)",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
