"use client";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Circuit() {
  const finishGlowRef = useRef(0);
  const [carColor, setCarColor] = useState("#7fff7f");
  const colors = ["#7fff7f", "#ff1801", "#0090d0", "#00d2be", "#a73c92", "#ffffff"];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const tRef = useRef(0);
  const trailRef = useRef<{ x: number; y: number; age: number }[]>([]);
  const lineGlowRef = useRef<{ x: number; y: number; age: number }[]>([]);
  const carColorRef = useRef(carColor);
  const tRef2 = useRef(200);
  const trailRef2 = useRef<{ x: number; y: number; age: number }[]>([]);
  const lastLapRef = useRef(false);
  const lastLapRef2 = useRef(false);
  const [isLight, setIsLight] = useState(false);
  const isLightRef = useRef(false);

  useEffect(() => { carColorRef.current = carColor; }, [carColor]);

  useEffect(() => {
    const check = () => {
      const light = document.documentElement.classList.contains("light");
      setIsLight(light);
      isLightRef.current = light;
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const exterior = "M 20,190 L 21,205 L 31,220 L 97,257 L 91,300 L 97,314 L 110,323 L 815,337 L 843,327 L 860,298 L 851,246 L 834,230 L 806,220 L 790,172 L 778,158 L 685,127 L 668,128 L 653,137 L 649,147 L 653,167 L 671,181 L 723,201 L 749,240 L 751,255 L 461,120 L 434,121 L 408,134 L 332,212 L 321,247 L 306,258 L 208,249 L 134,193 L 139,189 L 143,196 L 150,194 L 145,187 L 150,184 L 267,186 L 293,178 L 318,161 L 329,141 L 325,120 L 308,108 L 136,103 L 115,107 L 53,139 L 31,163 Z";
  const interior = "M 43,184 L 52,164 L 71,144 L 119,120 L 297,121 L 308,129 L 309,142 L 283,164 L 255,170 L 139,169 L 117,184 L 112,202 L 147,235 L 195,267 L 237,276 L 309,277 L 336,261 L 350,220 L 422,144 L 438,136 L 457,135 L 740,273 L 767,272 L 775,260 L 774,248 L 740,195 L 670,160 L 670,147 L 683,141 L 765,166 L 792,231 L 830,247 L 837,289 L 831,302 L 811,317 L 125,301 L 116,296 L 120,247 L 107,233 L 50,205 Z";

  const clPts: [number, number][] = [
    [32,172],[35,209],[96,241],[110,256],[106,304],[114,310],[822,325],[842,311],
    [848,298],[841,237],[803,219],[780,159],[693,129],[660,135],[658,166],[668,176],
    [729,202],[762,253],[754,260],[468,122],[432,122],[411,132],[340,208],[326,249],
    [298,264],[238,262],[201,253],[127,195],[150,178],[266,179],[293,173],[309,164],
    [320,147],[320,121],[308,109],[109,108],[61,132],[42,152],
  ];
  const pts: [number, number][] = [...clPts].reverse();

  const segLens: number[] = [];
  let totalLen = 0;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    const d = Math.hypot(b[0] - a[0], b[1] - a[1]);
    segLens.push(d);
    totalLen += d;
  }
  const cumLen: number[] = [];
  let acc = 0;
  for (const l of segLens) { cumLen.push(acc); acc += l; }

  function posAtDist(d: number): [number, number] {
    d = ((d % totalLen) + totalLen) % totalLen;
    let i = 0;
    while (i < cumLen.length - 1 && cumLen[i + 1] <= d) i++;
    const rem = d - cumLen[i];
    const frac = rem / segLens[i];
    const a = pts[i], b = pts[(i + 1) % pts.length];
    return [a[0] + (b[0] - a[0]) * frac, a[1] + (b[1] - a[1]) * frac];
  }

  function angleAtDist(d: number): number {
    const [x1, y1] = posAtDist(d - 2);
    const [x2, y2] = posAtDist(d + 2);
    return Math.atan2(y2 - y1, x2 - x1);
  }

  function speedAt(d: number): number {
    const a1 = angleAtDist(d - 15);
    const a2 = angleAtDist(d + 15);
    let diff = Math.abs(a2 - a1);
    if (diff > Math.PI) diff = 2 * Math.PI - diff;
    const curvature = Math.min(diff / Math.PI, 1);
    return 1.6 - curvature * 1.1;
  }

  const VX = 15, VY = 95, VW = 855, VH = 265;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width, H = canvas.height;
    const sx = W / VW, sy = H / VH;
    const tx = (x: number) => (x - VX) * sx;
    const ty = (y: number) => (y - VY) * sy;
    const light = isLightRef.current;

    ctx.clearRect(0, 0, W, H);

    const drawSVGPath = (d: string, fill?: string, stroke?: string, lw = 1) => {
      const p = new Path2D(d);
      ctx.save();
      ctx.setTransform(sx, 0, 0, sy, -VX * sx, -VY * sy);
      if (fill) { ctx.fillStyle = fill; ctx.fill(p); }
      if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw / sx; ctx.stroke(p); }
      ctx.restore();
    };

    // En light: asfalto gris medio, interior más claro
    drawSVGPath(exterior, light ? "#8a9a8a" : "#0a0f1e");
    drawSVGPath(interior, light ? "#b8c4b0" : "#020617");
    // Bordes: verde oscuro en light, verde neón en dark
    drawSVGPath(exterior, undefined, light ? "rgba(30,80,30,0.7)" : "rgba(127,255,127,0.12)", 2);
    drawSVGPath(interior, undefined, light ? "rgba(30,80,30,0.4)" : "rgba(255,255,255,0.06)", 1.5);

    ctx.save();
    ctx.setLineDash([tx(6) - tx(0), tx(18) - tx(0)]);
    drawSVGPath(
      "M 32,172 L 35,209 L 96,241 L 110,256 L 106,304 L 114,310 L 822,325 L 842,311 L 848,298 L 841,237 L 803,219 L 780,159 L 693,129 L 660,135 L 658,166 L 668,176 L 729,202 L 762,253 L 754,260 L 468,122 L 432,122 L 411,132 L 340,208 L 326,249 L 298,264 L 238,262 L 201,253 L 127,195 L 150,178 L 266,179 L 293,173 L 309,164 L 320,147 L 320,121 L 308,109 L 109,108 L 61,132 L 42,152 Z",
      undefined,
      light ? "rgba(30,80,30,0.2)" : "rgba(255,255,255,0.04)",
      1
    );
    ctx.restore();

    // Start/Finish
    const sfX = tx(540), sfY1 = ty(308), sfY2 = ty(338);
    ctx.fillStyle = light ? "rgba(30,100,30,0.9)" : "rgba(127,255,127,0.9)";
    ctx.fillRect(sfX, sfY1, tx(3) - tx(0), sfY2 - sfY1);
    ctx.fillStyle = light ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)";
    ctx.fillRect(sfX + tx(9) - tx(0), sfY1, tx(3) - tx(0), sfY2 - sfY1);

    if (finishGlowRef.current > 0) {
      const progress = finishGlowRef.current / 20;
      ctx.shadowColor = light ? "#1e641e" : "#7fff7f";
      ctx.shadowBlur = 16 * progress;
      ctx.fillStyle = light
        ? `rgba(30,100,30,${0.6 * progress})`
        : `rgba(127,255,127,${0.6 * progress})`;
      ctx.fillRect(sfX, sfY1, tx(3) - tx(0), sfY2 - sfY1);
      ctx.shadowBlur = 0;
      finishGlowRef.current--;
    }

    const BASE = totalLen / (74 * 60);
    const speed = speedAt(tRef.current);
    tRef.current = (tRef.current + BASE * speed + totalLen) % totalLen;
    const speed2 = speedAt(tRef2.current) * 0.8;
    tRef2.current = (tRef2.current + BASE * speed2 + totalLen) % totalLen;

    const [cx, cy] = posAtDist(tRef.current);
    const [cx2, cy2] = posAtDist(tRef2.current);

    trailRef.current.push({ x: cx, y: cy, age: 0 });
    trailRef2.current.push({ x: cx2, y: cy2, age: 0 });

    const finishX = 540, finishY = 320;
    const nearFinish = Math.abs(cx - finishX) < 10 && Math.abs(cy - finishY) < 10;
    if (nearFinish && !lastLapRef.current) finishGlowRef.current = 40;
    lastLapRef.current = nearFinish;
    const nearFinish2 = Math.abs(cx2 - finishX) < 10 && Math.abs(cy2 - finishY) < 10;
    if (nearFinish2 && !lastLapRef2.current) finishGlowRef.current = 20;
    lastLapRef2.current = nearFinish2;

    for (let i = trailRef.current.length - 1; i >= 0; i--) {
      trailRef.current[i].age++;
      if (trailRef.current[i].age > 50) trailRef.current.splice(i, 1);
    }
    for (let i = trailRef2.current.length - 1; i >= 0; i--) {
      trailRef2.current[i].age++;
      if (trailRef2.current[i].age > 50) trailRef2.current.splice(i, 1);
    }
    for (let i = lineGlowRef.current.length - 1; i >= 0; i--) {
      lineGlowRef.current[i].age++;
      if (lineGlowRef.current[i].age > 40) lineGlowRef.current.splice(i, 1);
    }

    const color = carColorRef.current;
    const secondCarColor = "#a855f7";

    for (let i = 0; i < trailRef.current.length - 1; i++) {
      const p = trailRef.current[i];
      const progress = i / trailRef.current.length;
      const alpha = progress * progress * 0.65;
      const radius = (tx(5) - tx(0)) * (0.4 + progress * 0.5);
      ctx.beginPath();
      ctx.arc(tx(p.x), ty(p.y), radius, 0, Math.PI * 2);
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(2)})`;
      ctx.fill();
    }

    for (let i = 0; i < trailRef2.current.length - 1; i++) {
      const p = trailRef2.current[i];
      const progress = i / trailRef2.current.length;
      const alpha = progress * progress * 0.65;
      const radius = (tx(5) - tx(0)) * (0.4 + progress * 0.5);
      ctx.beginPath();
      ctx.arc(tx(p.x), ty(p.y), radius, 0, Math.PI * 2);
      const r = parseInt(secondCarColor.slice(1, 3), 16);
      const g = parseInt(secondCarColor.slice(3, 5), 16);
      const b = parseInt(secondCarColor.slice(5, 7), 16);
      ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(2)})`;
      ctx.fill();
    }

    ctx.save();
    ctx.shadowColor = color;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(tx(cx), ty(cy), tx(9) - tx(0), 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.shadowColor = secondCarColor;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(tx(cx2), ty(cy2), tx(9) - tx(0), 0, Math.PI * 2);
    ctx.fillStyle = secondCarColor;
    ctx.fill();
    ctx.restore();

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);
    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [draw]);

  const VH_VW = VH / VW;

  return (
    <section style={{
      color: "var(--text)",
      fontFamily: "var(--font-jetbrains), monospace",
      width: "100%",
      maxWidth: "900px",
      margin: "0 auto",
      padding: "2rem 1.5rem",
      boxSizing: "border-box",
    }}>

      <div style={{ marginBottom: "2rem", width: "100%" }}>
        <div style={termLine}>
          <span style={{ color: "var(--accent)" }}>$</span>
          <span style={{ color: "var(--text-muted)" }}> render --circuit barcelona-catalunya</span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", flexWrap: "wrap" }}>
          <h2 style={circuitTitle}>Circuit de Barcelona-Catalunya</h2>
          <span style={circuitMeta}>Montmeló · 4.657 km · 16 corners</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: "1px", alignItems: "stretch", flexWrap: "wrap", width: "100%" }}>
        <div style={infoPanel}>
          <div style={infoBlock}>
            <div style={infoLabel}>livery</div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {colors.map(c => (
                <button key={c} onClick={() => setCarColor(c)} style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: c,
                  border: carColor === c ? "2px solid var(--text)" : "2px solid transparent",
                  cursor: "pointer",
                  padding: 0,
                  outline: carColor === c ? "1px solid var(--border)" : "none",
                  outlineOffset: "2px",
                }} />
              ))}
            </div>
          </div>

          <div style={infoBlock}>
            <div style={infoLabel}>main straight</div>
            <div style={infoValue}>1047 m</div>
          </div>

          <div style={infoBlock}>
            <div style={infoLabel}>lap record</div>
            <div style={{ ...infoValue, color: "var(--accent)" }}>1:14.637</div>
            <div style={infoSub}>M. Schumacher · Ferrari · 2006</div>
          </div>

          <div style={infoBlock}>
            <div style={infoLabel}>on track</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: carColor, display: "inline-block" }} />
                <span style={infoSub}>car 01 · selected livery</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#a855f7", display: "inline-block" }} />
                <span style={infoSub}>car 02 · purple</span>
              </div>
            </div>
          </div>

          <div style={{ ...infoBlock, borderBottom: "none", marginTop: "auto" }}>
            <img src="/f1-avatar.png" style={{
              width: "48px",
              height: "44px",
              objectFit: "cover",
              filter: "grayscale(30%)",
              border: "1px solid var(--border)",
            }} />
          </div>
        </div>

        <div style={{
          flex: "1 1 400px",
          border: "1px solid var(--border)",
          background: isLight ? "#6b7a6b" : "#020617",
          minWidth: 0,
        }}>
          <canvas
            ref={canvasRef}
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: `${VW}/${VH_VW * VW}`,
              display: "block",
            }}
          />
        </div>
      </div>

      <div style={{ ...bottomBar, width: "100%" }}>
        <span style={bottomText}>
          <span style={{ color: "var(--accent)" }}>■</span> simulation running
        </span>
        <span style={bottomText}>curvature-based speed · canvas api · requestAnimationFrame</span>
        <span style={bottomText}>S/F line at 540m</span>
      </div>
    </section>
  );
}

const termLine: React.CSSProperties = { fontSize: "12px", letterSpacing: "0.04em", marginBottom: "0.75rem", display: "flex", gap: "6px" };
const circuitTitle: React.CSSProperties = { fontFamily: "var(--font-montserrat), sans-serif", fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 900, color: "var(--text)", margin: 0, letterSpacing: "-0.01em" };
const circuitMeta: React.CSSProperties = { fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.08em", textTransform: "uppercase" };
const infoPanel: React.CSSProperties = { display: "flex", flexDirection: "column", minWidth: "150px", width: "100%", maxWidth: "165px", border: "1px solid var(--border)", background: "var(--bg-card)" };
const infoBlock: React.CSSProperties = { padding: "0.65rem 1rem", borderBottom: "1px solid var(--border-soft)" };
const infoLabel: React.CSSProperties = { fontSize: "10px", color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" };
const infoValue: React.CSSProperties = { fontSize: "15px", fontWeight: 500, color: "var(--text)", fontFamily: "var(--font-montserrat), monospace" };
const infoSub: React.CSSProperties = { fontSize: "10px", color: "var(--text-dim)", letterSpacing: "0.04em", marginTop: "2px" };
const bottomBar: React.CSSProperties = { display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", padding: "0.75rem 0", borderTop: "1px solid var(--border)", marginTop: "1px" };
const bottomText: React.CSSProperties = { fontSize: "10px", color: "var(--text-dim)", letterSpacing: "0.08em" };