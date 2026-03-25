"use client";

export default function AboutPage() {
  return (
    <main style={container}>
      {/* PROFILE */}
      <section style={profileSection}>
        <img src="/me.jpg" alt="Yuna" style={profileImg} />

        <div style={{ maxWidth: "600px" }}>
          <h1 style={{ fontSize: "44px", marginBottom: "10px" }}>
            Hi, I'm Yuna.
          </h1>

          <h2 style={subtitle}>
            Junior Technology Consultant · Future Software Engineer
          </h2>

          <p style={muted}>
            I work on data integrations, automation and backend systems.
          </p>

          <p style={{ ...muted, marginTop: "10px" }}>
            Focused on building software that transforms data into decisions.
          </p>

          <br />

          <a href="/cv.pdf" download className="download-btn">
            Download CV
          </a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section style={section}>
        <h2 style={sectionTitle}>Experience</h2>

        <div style={column}>
          <div style={card}>
            <strong>Junior Technology Consultant — Timestamp</strong>
            <p style={date}>Nov 2025 – Present</p>
          </div>

          <div style={card}>
            <strong>SAP Integration Trainee — Timestamp</strong>
            <p style={date}>Mar 2025 – Oct 2025</p>
          </div>

          <div style={card}>
            <strong>ERASMUS+ — ClickTech (Portugal)</strong>
            <p style={date}>Mar 2024 – Apr 2024</p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={section}>
        <h2 style={sectionTitle}>Certifications</h2>

        <div style={row}>
          <a
            href="https://www.credly.com/badges/200565ce-c8ba-46f8-9ea8-06b69085aff2/linked_in_profile"
            target="_blank"
            style={card}
          >
            📊 Excel Associate
          </a>
          <a
            href="https://www.credly.com/badges/a2049f18-c4ce-473d-ad92-3fe67f517de3/linked_in_profile"
            target="_blank"
            style={card}
          >
            ☁️ SAP BTP
          </a>
          <a href="/excel-championship.png" target="_blank" style={card}>
            🏆 Excel Championship (3rd place)
          </a>
        </div>
      </section>

      {/* DISCOVER */}
      <section>
        <h2 style={sectionTitle}>Discover more about me</h2>

        <div style={row}>
          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/yesa.exe/"
            target="_blank"
            style={{
              ...linkBtn,
              background:
              "linear-gradient(to right, #ec4899 0%, #ec4899 100%)"
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundPosition = "left";
              el.style.borderColor = "#ec4899";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow =
                "0 6px 20px rgba(236,72,153,0.25)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundPosition = "right";
              el.style.borderColor = "#1e293b";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            Instagram
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/yuna-espejo-santana/"
            target="_blank"
            style={{
              ...linkBtn,
              background:
                "linear-gradient(to right, #0a66c2 0%, #0a66c2 100%, transparent 50%)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundPosition = "left";
              el.style.borderColor = "#0a66c2";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow =
                "0 6px 20px rgba(10,102,194,0.25)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundPosition = "right";
              el.style.borderColor = "#1e293b";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            LinkedIn
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/yuna-espejo"
            target="_blank"
            style={{
              ...linkBtn,
              background:
                "linear-gradient(to right, #64748b 0%, #64748b 100%)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundPosition = "left";
              el.style.borderColor = "#64748b";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow =
                "0 6px 20px rgba(100,116,139,0.25)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundPosition = "right";
              el.style.borderColor = "#1e293b";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

//////////////////////////////////////
// 🎨 STYLES
//////////////////////////////////////

const container: React.CSSProperties = {
  padding: "120px 60px",
  color: "white",
  maxWidth: "1100px",
  margin: "0 auto",
};

const profileSection: React.CSSProperties = {
  display: "flex",
  gap: "50px",
  alignItems: "center",
  marginBottom: "100px",
  flexWrap: "wrap",
};

const profileImg: React.CSSProperties = {
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "2px solid #1e293b",
};

const subtitle: React.CSSProperties = {
  fontSize: "22px",
  opacity: 0.9,
  marginBottom: "12px",
};

const muted: React.CSSProperties = {
  opacity: 0.6,
};

const section: React.CSSProperties = {
  marginBottom: "80px",
};

const sectionTitle: React.CSSProperties = {
  marginBottom: "20px",
  fontSize: "22px",
};

const column: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const row: React.CSSProperties = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
};

const card: React.CSSProperties = {
  border: "1px solid #334155",
  borderRadius: "10px",
  padding: "16px",
  background: "#111827",
};

const date: React.CSSProperties = {
  opacity: 0.4,
  fontSize: "13px",
};

//////////////////////////////////////
// 🔥 BOTONES
//////////////////////////////////////

const linkBtn: React.CSSProperties = {
  padding: "10px 18px",
  borderRadius: "8px",
  border: "1px solid #1e293b",
  textDecoration: "none",
  color: "white",
  backgroundSize: "200% 100%",
  backgroundPosition: "right",
  transition: "all 0.5s ease",
};