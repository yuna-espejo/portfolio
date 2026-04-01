import Link from "next/link";

export default function ProjectCard({ project }: any) {
  if (!project?.slug) return null;
  return (
    <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={card}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src={project.image} style={cardImg} />
          <div style={imgOverlay} />
        </div>
        <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
          <div style={cardMeta}>
            <span style={{ color: "var(--accent)" }}>■</span> {project.tags[0]}
          </div>
          <h3 style={cardTitle}>{project.title}</h3>
          <p style={cardDesc}>{project.description}</p>
          <div style={{ marginTop: "0.75rem", display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {project.tags.map((tag: string, i: number) => (
              <span key={i} style={tagStyle}>{tag}</span>
            ))}
          </div>
          <div style={cardFooter}>
            <span style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.08em", opacity: 0.7 }}>
              ./open ——
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

const card: React.CSSProperties = { background: "var(--bg-card)", border: "1px solid var(--border)", overflow: "hidden", transition: "all 0.25s", cursor: "pointer", fontFamily: "var(--font-jetbrains), monospace" };
const cardImg: React.CSSProperties = { width: "100%", height: "160px", objectFit: "cover", display: "block" };
const imgOverlay: React.CSSProperties = { position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, var(--bg) 100%)", opacity: 0 };
const cardMeta: React.CSSProperties = { fontSize: "10px", color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem", display: "flex", alignItems: "center", gap: "6px" };
const cardTitle: React.CSSProperties = { fontSize: "15px", fontWeight: 500, color: "var(--text)", margin: "0 0 0.4rem", letterSpacing: "-0.01em" };
const cardDesc: React.CSSProperties = { fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 };
const tagStyle: React.CSSProperties = { fontSize: "10px", padding: "3px 8px", border: "1px solid var(--border)", color: "var(--text-dim)", letterSpacing: "0.06em" };
const cardFooter: React.CSSProperties = { marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border-soft)" };