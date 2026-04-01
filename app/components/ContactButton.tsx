"use client";
import { useState } from "react";
import { Mail, MessageCircle, Linkedin, X } from "lucide-react";

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      position: "fixed",
      bottom: "2rem",
      right: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      alignItems: "flex-end",
      zIndex: 1000,
      fontFamily: "var(--font-jetbrains), monospace",
    }}>

      {open && (
        <>
          {[
            { href: "mailto:y.espejo.santana@gmail.com", label: "email", prefix: "01" },
            { href: "https://wa.me/34722332309", label: "whatsapp", prefix: "02" },
            { href: "https://www.linkedin.com/in/yuna-espejo-santana/", label: "linkedin", prefix: "03" },
          ].map(({ href, label, prefix }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={contactBtn}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.background = "var(--bg-card)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.background = "var(--bg-soft)";
              }}
            >
              <span style={contactPrefix}>{prefix}</span>
              <span style={contactDivider} />
              <span style={{ fontSize: "12px", letterSpacing: "0.08em" }}>
                ./{label}
              </span>
              <span style={{ marginLeft: "auto", fontSize: "11px", color: "var(--text-dim)" }}>↗</span>
            </a>
          ))}
        </>
      )}

      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.2s",
          outline: "none",
          background: open ? "var(--bg-soft)" : "var(--accent)",
          border: open ? "1px solid var(--accent)" : "none",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        {open
          ? <X size={20} color="var(--accent)" />
          : <Mail size={20} color="var(--accent-dark)" />
        }
      </button>
    </div>
  );
}

const contactBtn: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 18px",
  width: "200px",
  background: "var(--bg-soft)",
  border: "1px solid var(--border)",
  color: "var(--text-muted)",
  textDecoration: "none",
  backdropFilter: "blur(12px)",
  transition: "all 0.2s",
};

const contactPrefix: React.CSSProperties = {
  fontSize: "10px",
  color: "var(--accent)",
  letterSpacing: "0.1em",
  flexShrink: 0,
};

const contactDivider: React.CSSProperties = {
  width: "1px",
  height: "12px",
  background: "var(--border)",
  flexShrink: 0,
};