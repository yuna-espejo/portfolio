"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [tech, setTech] = useState("All");

  const allTechs = [
    "All",
    "JavaScript",
    "React",
    "Python",
    "Docker",
    "PostgreSQL",
    "NumPy",
  ];

  const filtered = projects.filter((p) => {
    const matchesSearch =
      (p.title + p.description + p.tags.join(" "))
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesTech = tech === "All" || p.tags.includes(tech);

    return matchesSearch && matchesTech;
  });

  return (
    <main
      style={{
        padding: "120px 60px",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Projects
      </h1>

      <p style={{ opacity: 0.7, marginBottom: "30px" }}>
        A collection of software projects focused on data, telemetry
        analysis and performance engineering.
      </p>

      {/* 🔍 SEARCH */}
      <input
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "12px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #334155",
          background: "#020617",
          color: "white",
          marginBottom: "20px",
        }}
      />

      {/* 🏷️ FILTERS */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "30px", flexWrap: "wrap" }}>
        {allTechs.map((t) => (
          <button
            key={t}
            onClick={() => setTech(t)}
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              border: "1px solid #334155",
              background: tech === t ? "#e11d48" : "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* 🧩 GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 420px))",
          justifyContent: "flex-start",
          gap: "20px",
        }}
      >
        {filtered.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                borderRadius: "12px",
                border: "1px solid #1e293b",
                overflow: "hidden",
                background: "#0f172a",
                boxShadow: "0 0 10px rgba(59,130,246,0.08)",
                transition: "0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {/* IMAGE */}
              <img
                src={p.image}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  opacity: 0.85,
                }}
              />

              {/* CONTENT */}
              <div style={{ padding: "16px" }}>
                <h3 style={{ marginBottom: "8px" }}>{p.title}</h3>

                <p style={{ opacity: 0.6, fontSize: "14px" }}>
                  {p.description}
                </p>

                {/* TAGS */}
                <div
                  style={{
                    marginTop: "12px",
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      onClick={(e) => {
                        e.preventDefault();
                        setTech(tag);
                      }}
                      style={{
                        fontSize: "12px",
                        padding: "4px 10px",
                        borderRadius: "999px",
                        background: "#1e293b",
                        cursor: "pointer",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}