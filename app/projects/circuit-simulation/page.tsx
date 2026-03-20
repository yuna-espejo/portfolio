"use client";

import Circuit from "@/app/components/Circuit";

export default function CircuitProjectPage() {
  return (
    <main
      style={{
        paddingTop: "100px",
        color: "white",
      }}
    >
      {/* 🏁 HERO (CIRCUIT CENTRADO) */}
      <section
        style={{
          padding: "40px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          <Circuit />
        </div>
      </section>

      {/* 📄 CONTENT */}
      <section
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
            Real-Time Circuit Simulation
          </h1>

          <p style={muted}>
            A system that renders a car moving along a circuit using{" "}
            <strong>path interpolation</strong> and{" "}
            <strong>canvas-based animation</strong>.
          </p>
        </div>

        {/* CONTEXT */}
        <Section title="Context">
          This project started as a way to represent an F1 circuit in a more{" "}
          <strong>visual and interactive</strong> way.
          <br />
          Instead of a static image, I wanted something with{" "}
          <strong>movement</strong> and more depth.
        </Section>

        {/* PROBLEM */}
        <Section title="Problem">
          A basic animation wasn’t enough. The goal was to make the car follow
          the track in a <strong>smooth and continuous</strong> way, without
          jumps or unnatural movement.
        </Section>

        {/* SOLUTION */}
        <Section title="Solution">
          I built a system based on <strong>points</strong> representing the
          center of the track.
          <br />
          Positions are interpolated between segments to create{" "}
          <strong>smooth movement</strong>.
        </Section>

        {/* REAL */}
        <Section title="Real-world reference">
          The car speed is calibrated so that a full lap matches the real track
          record:
          <p style={highlight}>
            1:14.637 — Michael Schumacher (Ferrari, 2006)
          </p>
        </Section>

        {/* HOW */}
        <Section title="How it works">
          <ul style={list}>
            <li>
              Track defined as a <strong>set of points</strong>
            </li>
            <li>
              Total distance calculated across segments
            </li>
            <li>
              Movement via <strong>distance-based interpolation</strong>
            </li>
            <li>
              Animation with <strong>requestAnimationFrame</strong>
            </li>
            <li>
              Rendering using <strong>Canvas API</strong>
            </li>
          </ul>
        </Section>

        {/* CHALLENGES */}
        <Section title="Challenges">
          Achieving <strong>fully smooth motion</strong> across the track.
          <br />
          Avoiding <strong>visible jumps between segments</strong>.
        </Section>

        {/* LEARNINGS */}
        <Section title="What I learned">
          Better understanding of <strong>canvas animations</strong> and{" "}
          <strong>trajectory-based systems</strong>.
          <br />
          Reinforced concepts in <strong>geometry</strong> and{" "}
          <strong>real-time rendering</strong>.
        </Section>

        {/* TECH */}
        <Section title="Technologies">
          <div style={tags}>
            {[
              "JavaScript",
              "TypeScript",
              "Canvas API",
              "requestAnimationFrame",
            ].map((t) => (
              <span key={t} style={tag}>
                {t}
              </span>
            ))}
          </div>
        </Section>
      </section>
    </main>
  );
}

/* 🔧 SECTION COMPONENT */
function Section({ title, children }: any) {
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2 style={{ marginBottom: "10px", fontSize: "22px" }}>{title}</h2>
      <div style={text}>{children}</div>
    </div>
  );
}

/* 🎨 STYLES */

const text: React.CSSProperties = {
  opacity: 0.75,
  lineHeight: "1.6",
};

const muted: React.CSSProperties = {
  opacity: 0.7,
  maxWidth: "600px",
  margin: "0 auto",
};

const highlight: React.CSSProperties = {
  marginTop: "10px",
  fontWeight: "600",
  color: "#e11d48",
};

const list: React.CSSProperties = {
  paddingLeft: "20px",
  lineHeight: "1.6",
  opacity: 0.75,
};

const tags: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const tag: React.CSSProperties = {
  padding: "6px 12px",
  borderRadius: "999px",
  background: "#1e293b",
  fontSize: "12px",
};