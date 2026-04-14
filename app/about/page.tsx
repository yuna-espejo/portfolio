"use client";
import Timeline from "@/app/components/Timeline";
import { useLang } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLang();

  return (
    <main style={container}>

      <section style={profileSection}>
        <div style={imgWrapper}>
          <img src="/me.jpg" alt="Yuna" style={profileImg} />
          <div style={imgBorder} />
        </div>
        <div style={{ maxWidth: "560px" }}>
          <div style={termLine}>
            <span style={{ color: "var(--accent)" }}>yuna@dev</span>
            <span style={{ color: "var(--text-dim)" }}>:</span>
            <span style={{ color: "var(--path)" }}>~</span>
            <span style={{ color: "var(--text-dim)" }}>$</span>
            <span style={{ color: "var(--text-muted)" }}> {t.about.cmd}</span>
          </div>
          <h1 style={pageTitle}>Yuna Espejo</h1>
          <h2 style={pageSubtitle}>{t.about.subtitle}</h2>
          <p style={mutedText}>
            {t.about.bio1}{" "}
            <span style={{ color: "var(--text)" }}>Timestamp Group.</span>
          </p>
          <p style={{ ...mutedText, marginTop: "0.5rem" }}>
            {t.about.bio2}{" "}
            <span style={{ color: "var(--text)" }}>UOC.</span>{" "}
            {t.about.bio3}
          </p>
          <div style={{ marginTop: "1.75rem" }}>
            <a href="/cv.pdf" download style={dlBtn}>{t.about.cv}</a>
          </div>
        </div>
      </section>

      <section style={blockSection}>
        <SectionHeader cmd={t.journey.cmd} title={t.journey.title} />
        <Timeline />
      </section>

      <section style={blockSection}>
        <SectionHeader cmd={t.about.experience.cmd} title={t.about.experience.title} />
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {[
            { role: "Junior Technology Consultant", company: "Timestamp Group", date: "Nov 2025 – Present", active: true },
            { role: "SAP Integration Trainee", company: "Timestamp Group", date: "Mar 2025 – Oct 2025" },
            { role: "ERASMUS+ Intern", company: "ClickTech · Portugal", date: "Mar 2024 – Apr 2024" },
          ].map(({ role, company, date, active }) => (
            <div key={role} style={expCard}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.25rem" }}>
                {active && <span style={activeDot} />}
                <span style={expRole}>{role}</span>
              </div>
              <div style={expCompany}>{company}</div>
              <div style={expDate}>{date}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={blockSection}>
        <SectionHeader cmd={t.about.certifications.cmd} title={t.about.certifications.title} />
        <div style={{ display: "flex", gap: "1px", flexWrap: "wrap" }}>
          {[
            { href: "https://www.credly.com/badges/200565ce-c8ba-46f8-9ea8-06b69085aff2/linked_in_profile", label: "Excel Associate", icon: "XLS" },
            { href: "https://www.credly.com/badges/a2049f18-c4ce-473d-ad92-3fe67f517de3/linked_in_profile", label: "SAP BTP", icon: "SAP" },
            { href: "/excel-championship.png", label: "Excel Championship · 3rd", icon: "#03" },
          ].map(({ href, label, icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={certCard}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--text)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              <span style={certIcon}>{icon}</span>
              <span style={{ fontSize: "12px", letterSpacing: "0.04em" }}>{label}</span>
              <span style={certArrow}>↗</span>
            </a>
          ))}
        </div>
      </section>

      <section style={blockSection}>
        <SectionHeader cmd={t.about.links.cmd} title={t.about.links.title} />
        <div style={{ display: "flex", gap: "1px", flexWrap: "wrap" }}>
          {[
            { href: "https://www.instagram.com/yesa.exe/", label: "Instagram", accent: "#ec4899" },
            { href: "https://www.linkedin.com/in/yuna-espejo-santana/", label: "LinkedIn", accent: "#0a66c2" },
            { href: "https://github.com/yuna-espejo", label: "GitHub", accent: "var(--accent)" },
          ].map(({ href, label, accent }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={linkCard}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = accent;
                e.currentTarget.style.color = accent;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              ./{label.toLowerCase()} ↗
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

function SectionHeader({ cmd, title }: { cmd: string; title: string }) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <div style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>
        <span style={{ color: "var(--accent)" }}>$</span> {cmd}
      </div>
      <h2 style={{ fontSize: "18px", fontWeight: 500, color: "var(--text)", margin: 0, fontFamily: "var(--font-montserrat), sans-serif" }}>
        {title}
      </h2>
    </div>
  );
}

const container: React.CSSProperties = {
  padding: "5rem 1.5rem 3rem",
  maxWidth: "900px",
  margin: "0 auto",
  fontFamily: "var(--font-jetbrains), monospace",
  color: "var(--text)",
};

const profileSection: React.CSSProperties = {
  display: "flex",
  gap: "3rem",
  alignItems: "flex-start",
  marginBottom: "5rem",
  flexWrap: "wrap",
};

const imgWrapper: React.CSSProperties = {
  position: "relative",
  flexShrink: 0,
};

const profileImg: React.CSSProperties = {
  width: "160px",
  height: "160px",
  objectFit: "cover",
  display: "block",
  filter: "grayscale(15%)",
};

const imgBorder: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  border: "1px solid var(--accent)",
  transform: "translate(6px, 6px)",
  pointerEvents: "none",
  opacity: 0.4,
};

const termLine: React.CSSProperties = {
  fontSize: "12px",
  letterSpacing: "0.04em",
  marginBottom: "1rem",
  display: "flex",
  gap: "1px",
};

const pageTitle: React.CSSProperties = {
  fontFamily: "var(--font-montserrat), sans-serif",
  fontSize: "clamp(28px, 4vw, 42px)",
  fontWeight: 900,
  color: "var(--text)",
  margin: "0 0 0.25rem",
  letterSpacing: "-0.02em",
};

const pageSubtitle: React.CSSProperties = {
  fontSize: "13px",
  color: "var(--text-dim)",
  fontWeight: 400,
  margin: "0 0 1rem",
  letterSpacing: "0.04em",
};

const mutedText: React.CSSProperties = {
  fontSize: "13px",
  color: "var(--text-muted)",
  lineHeight: 1.8,
  margin: 0,
};

const dlBtn: React.CSSProperties = {
  display: "inline-block",
  background: "var(--accent)",
  color: "var(--accent-dark)",
  fontFamily: "var(--font-jetbrains), monospace",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  padding: "0.65rem 1.25rem",
  textDecoration: "none",
};

const blockSection: React.CSSProperties = { marginBottom: "4rem" };

const expCard: React.CSSProperties = {
  padding: "1rem 1.25rem",
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
};

const activeDot: React.CSSProperties = {
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  background: "var(--accent)",
  flexShrink: 0,
  animation: "pulse 2s ease-in-out infinite",
};

const expRole: React.CSSProperties = {
  fontSize: "14px",
  color: "var(--text)",
  fontWeight: 500,
};

const expCompany: React.CSSProperties = {
  fontSize: "12px",
  color: "var(--text-muted)",
  marginBottom: "0.2rem",
};

const expDate: React.CSSProperties = {
  fontSize: "11px",
  color: "var(--text-dim)",
  letterSpacing: "0.06em",
};

const certCard: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  padding: "0.85rem 1.25rem",
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  color: "var(--text-muted)",
  textDecoration: "none",
  transition: "all 0.2s",
  minWidth: "200px",
};

const certIcon: React.CSSProperties = {
  fontSize: "10px",
  background: "var(--bg-card)",
  color: "var(--accent)",
  padding: "3px 6px",
  letterSpacing: "0.05em",
  border: "1px solid var(--border)",
};

const certArrow: React.CSSProperties = {
  marginLeft: "auto",
  fontSize: "12px",
  color: "var(--text-dim)",
};

const linkCard: React.CSSProperties = {
  display: "inline-block",
  padding: "0.75rem 1.5rem",
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  color: "var(--text-muted)",
  textDecoration: "none",
  fontSize: "12px",
  letterSpacing: "0.08em",
  transition: "all 0.2s",
};
