"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "@/context/LanguageContext";

// ─────────────────────────────────────────────────────────────────────────────
// EmailJS credentials — replace these with your own values.
// Sign up free at https://emailjs.com (200 emails/month on the free tier).
//   1. Create an Email Service  → copy the Service ID
//   2. Create an Email Template → copy the Template ID
//      Template variables: {{from_name}}, {{from_email}}, {{message}}
//   3. Go to Account → API Keys → copy your Public Key
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_25vk3c9";
const EMAILJS_TEMPLATE_ID = "template_5hldht7";
const EMAILJS_PUBLIC_KEY = "EAb40L-oUTqT8u1K_";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const btnLabel = () => {
    if (status === "sending") return "./sending...";
    if (status === "success") return "./message_sent ✓";
    if (status === "error") return "./error — try again";
    return `${t.contact.send} →`;
  };

  const btnStyle: React.CSSProperties = {
    background: status === "success" ? "transparent" : status === "error" ? "transparent" : "var(--accent)",
    color:
      status === "success"
        ? "var(--accent)"
        : status === "error"
        ? "#e11d48"
        : "var(--accent-dark)",
    border:
      status === "success"
        ? "1px solid var(--accent)"
        : status === "error"
        ? "1px solid #e11d48"
        : "none",
    fontFamily: "var(--font-jetbrains), monospace",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    padding: "0.75rem 1.5rem",
    cursor: status === "sending" ? "not-allowed" : "pointer",
    opacity: status === "sending" ? 0.6 : 1,
    textAlign: "left" as const,
    transition: "all 0.2s",
  };

  return (
    <main style={container}>
      {/* Terminal header */}
      <div style={{ marginBottom: "3rem" }}>
        <div style={{
          fontSize: "12px",
          letterSpacing: "0.04em",
          display: "flex",
          gap: "2px",
          marginBottom: "1rem",
          flexWrap: "wrap",
        }}>
          <span style={{ color: "var(--prompt)" }}>yuna@dev</span>
          <span style={{ color: "var(--text-dim)" }}>:</span>
          <span style={{ color: "var(--path)" }}>~</span>
          <span style={{ color: "var(--text-dim)" }}>$</span>
          <span style={{ color: "var(--text-muted)" }}> {t.contact.cmd}</span>
        </div>
        <h1 style={{
          fontFamily: "var(--font-montserrat), sans-serif",
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 900,
          color: "var(--text)",
          margin: 0,
          letterSpacing: "-0.02em",
        }}>
          {t.contact.title}
        </h1>
      </div>

      {/* Two-column layout */}
      <div className="contact-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1px",
      }}>
        {/* Form column */}
        <div style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          padding: "2rem",
        }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <label style={labelStyle}>{t.contact.name}</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder={t.contact.namePlaceholder}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>{t.contact.email}</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder={t.contact.emailPlaceholder}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>{t.contact.message}</label>
              <textarea
                required
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder={t.contact.messagePlaceholder}
                rows={6}
                style={{ ...inputStyle, resize: "vertical" as const, minHeight: "140px" }}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              style={btnStyle}
            >
              {btnLabel()}
            </button>
          </form>
        </div>

        {/* Links column */}
        <div style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
          <div>
            <div style={{
              fontSize: "11px",
              color: "var(--text-dim)",
              letterSpacing: "0.06em",
              marginBottom: "1.25rem",
            }}>
              <span style={{ color: "var(--accent)" }}>$</span> {t.contact.findMe}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              {[
                { prefix: "01", label: "LinkedIn", href: "https://www.linkedin.com/in/yuna-espejo-santana/" },
                { prefix: "02", label: "GitHub", href: "https://github.com/yuna-espejo" },
                { prefix: "03", label: "Instagram", href: "https://www.instagram.com/yesa.exe/" },
                { prefix: "04", label: "Email", href: "mailto:y.espejo.santana@gmail.com" },
              ].map(({ prefix, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  style={linkRow}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--text)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  <span style={{ fontSize: "10px", color: "var(--accent)", letterSpacing: "0.1em", flexShrink: 0 }}>
                    {prefix}
                  </span>
                  <span style={{ flex: 1 }}>{label}</span>
                  <span style={{ fontSize: "12px", color: "var(--text-dim)" }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          <div style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "1.5rem",
            marginTop: "2rem",
          }}>
            <div style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "0.4rem", letterSpacing: "0.02em" }}>
              y.espejo.santana@gmail.com
            </div>
            <div style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.04em" }}>
              Disponible remotamente · Barcelona, ES
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const container: React.CSSProperties = {
  padding: "5rem 1.5rem 3rem",
  maxWidth: "900px",
  margin: "0 auto",
  fontFamily: "var(--font-jetbrains), monospace",
  color: "var(--text)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "10px",
  color: "var(--text-dim)",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: "0.5rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  color: "var(--text)",
  fontFamily: "var(--font-jetbrains), monospace",
  fontSize: "12px",
  padding: "0.65rem 0.75rem",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const linkRow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "0.85rem 1.25rem",
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  color: "var(--text-muted)",
  textDecoration: "none",
  fontSize: "13px",
  letterSpacing: "0.04em",
  transition: "all 0.2s",
};
