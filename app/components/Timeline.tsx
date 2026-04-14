"use client";
import { useLang } from "@/context/LanguageContext";

export default function Timeline() {
  const { t } = useLang();

  return (
    <div style={{
      position: "relative",
      paddingLeft: "2.5rem",
    }}>
      {/* Vertical line */}
      <div style={{
        position: "absolute",
        left: "6px",
        top: "8px",
        bottom: "8px",
        width: "1px",
        background: "var(--border)",
      }} />

      {t.journey.items.map((item, i) => (
        <div key={i} style={{
          position: "relative",
          marginBottom: i < t.journey.items.length - 1 ? "2rem" : 0,
        }}>
          {/* Dot */}
          <div style={{
            position: "absolute",
            left: "-2.5rem",
            top: "4px",
            width: "13px",
            height: "13px",
            background: (item as { active?: boolean }).active ? "var(--accent)" : "var(--bg)",
            border: (item as { active?: boolean }).active
              ? "2px solid var(--accent)"
              : "1px solid var(--border)",
            boxSizing: "border-box",
          }} />

          <div style={{
            fontSize: "11px",
            color: "var(--accent)",
            letterSpacing: "0.08em",
            marginBottom: "0.25rem",
            fontFamily: "var(--font-jetbrains), monospace",
          }}>
            {item.year}
          </div>

          <div style={{
            fontSize: "14px",
            color: "var(--text)",
            fontWeight: 500,
            marginBottom: "0.2rem",
            fontFamily: "var(--font-jetbrains), monospace",
          }}>
            {item.title}
          </div>

          <div style={{
            fontSize: "12px",
            color: "var(--text-muted)",
            lineHeight: 1.6,
            fontFamily: "var(--font-jetbrains), monospace",
          }}>
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  );
}
