import Link from "next/link";

export default function ProjectCard({ project }: any) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          borderRadius: "12px",
          border: "1px solid #475569",
          overflow: "hidden",
          background: "#0b1220",
          transition: "0.2s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-5px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        <img
          src={project.image}
          style={{
            width: "100%",
            height: "140px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "16px" }}>
          <h3>{project.title}</h3>

          <p style={{ opacity: 0.6 }}>{project.description}</p>

          <div style={{ marginTop: "10px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                style={{
                  fontSize: "11px",
                  padding: "3px 8px",
                  borderRadius: "999px",
                  background: "#1e293b",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}