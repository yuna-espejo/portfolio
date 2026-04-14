"use client";
import { useRef, useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1400;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <div ref={ref} style={{
      fontFamily: "var(--font-montserrat), sans-serif",
      fontSize: "clamp(36px, 5vw, 52px)",
      fontWeight: 900,
      color: "var(--accent)",
      lineHeight: 1,
      letterSpacing: "-0.02em",
    }}>
      {count}{suffix}
    </div>
  );
}

export default function StatsCounter() {
  const { t } = useLang();

  const stats = [
    { value: 18, suffix: "", label: t.stats.months },
    { value: 3, suffix: "+", label: t.stats.projects },
    { value: 2, suffix: "", label: t.stats.certifications },
    { value: 2, suffix: "", label: t.stats.countries },
  ];

  return (
    <section style={{
      padding: "0 1.5rem 4rem",
      maxWidth: "900px",
      margin: "0 auto",
      fontFamily: "var(--font-jetbrains), monospace",
    }}>
      <div className="stats-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1px",
      }}>
        {stats.map(({ value, suffix, label }) => (
          <div key={label} style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}>
            <AnimatedNumber target={value} suffix={suffix} />
            <div style={{
              fontSize: "10px",
              color: "var(--text-dim)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              lineHeight: 1.4,
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
