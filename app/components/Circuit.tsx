"use client";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Circuit() {
  const finishGlowRef = useRef(0);
  const [carColor, setCarColor] = useState("#ff1801");
  const colors = [
    "#ff1801",
    "#0090d0",
    "#00d2be",
    "#a73c92",
    "#ff8700",
    "#ffffff",
  ];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const tRef = useRef(0); // progress 0..1 along path
  const trailRef = useRef<{ x: number; y: number; age: number }[]>([]);
  const lineGlowRef = useRef<{ x: number; y: number; age: number }[]>([]);
  const carColorRef = useRef(carColor);

  const tRef2 = useRef(200); // segunda posición en el circuito
  const trailRef2 = useRef<{ x: number; y: number; age: number }[]>([]);

  const lastLapRef = useRef(false);
  const lastLapRef2 = useRef(false);
  useEffect(() => {
    carColorRef.current = carColor;
  }, [carColor]);

  const exterior =
    "M 20,190 L 21,205 L 31,220 L 97,257 L 91,300 L 97,314 L 110,323 L 815,337 L 843,327 L 860,298 L 851,246 L 834,230 L 806,220 L 790,172 L 778,158 L 685,127 L 668,128 L 653,137 L 649,147 L 653,167 L 671,181 L 723,201 L 749,240 L 751,255 L 461,120 L 434,121 L 408,134 L 332,212 L 321,247 L 306,258 L 208,249 L 134,193 L 139,189 L 143,196 L 150,194 L 145,187 L 150,184 L 267,186 L 293,178 L 318,161 L 329,141 L 325,120 L 308,108 L 136,103 L 115,107 L 53,139 L 31,163 Z";
  const interior =
    "M 43,184 L 52,164 L 71,144 L 119,120 L 297,121 L 308,129 L 309,142 L 283,164 L 255,170 L 139,169 L 117,184 L 112,202 L 147,235 L 195,267 L 237,276 L 309,277 L 336,261 L 350,220 L 422,144 L 438,136 L 457,135 L 740,273 L 767,272 L 775,260 L 774,248 L 740,195 L 670,160 L 670,147 L 683,141 L 765,166 L 792,231 L 830,247 L 837,289 L 831,302 L 811,317 L 125,301 L 116,296 L 120,247 L 107,233 L 50,205 Z";

  // Centerline points (anticlockwise order — reversed)
  const clPts: [number, number][] = [
    [32, 172],
    [35, 209],
    [96, 241],
    [110, 256],
    [106, 304],
    [114, 310],
    [822, 325],
    [842, 311],
    [848, 298],
    [841, 237],
    [803, 219],
    [780, 159],
    [693, 129],
    [660, 135],
    [658, 166],
    [668, 176],
    [729, 202],
    [762, 253],
    [754, 260],
    [468, 122],
    [432, 122],
    [411, 132],
    [340, 208],
    [326, 249],
    [298, 264],
    [238, 262],
    [201, 253],
    [127, 195],
    [150, 178],
    [266, 179],
    [293, 173],
    [309, 164],
    [320, 147],
    [320, 121],
    [308, 109],
    [109, 108],
    [61, 132],
    [42, 152],
  ];

  // Reverse for anticlockwise
  const pts: [number, number][] = [...clPts].reverse();

  // Precompute cumulative distances for speed-based parametrization
  const segLens: number[] = [];
  let totalLen = 0;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    const d = Math.hypot(b[0] - a[0], b[1] - a[1]);
    segLens.push(d);
    totalLen += d;
  }
  const cumLen: number[] = [];
  let acc = 0;
  for (const l of segLens) {
    cumLen.push(acc);
    acc += l;
  }

  // Get XY at distance d along path
  function posAtDist(d: number): [number, number] {
    d = ((d % totalLen) + totalLen) % totalLen;
    let i = 0;
    while (i < cumLen.length - 1 && cumLen[i + 1] <= d) i++;
    const rem = d - cumLen[i];
    const frac = rem / segLens[i];
    const a = pts[i],
      b = pts[(i + 1) % pts.length];
    return [a[0] + (b[0] - a[0]) * frac, a[1] + (b[1] - a[1]) * frac];
  }

  // Get tangent angle at distance d
  function angleAtDist(d: number): number {
    const [x1, y1] = posAtDist(d - 2);
    const [x2, y2] = posAtDist(d + 2);
    return Math.atan2(y2 - y1, x2 - x1);
  }

  // Local curvature at distance d → speed factor
  // Compare angles over a window: tight curve = slow, straight = fast
  function speedAt(d: number): number {
    const a1 = angleAtDist(d - 15);
    const a2 = angleAtDist(d + 15);
    let diff = Math.abs(a2 - a1);
    if (diff > Math.PI) diff = 2 * Math.PI - diff;
    // diff=0 → straight (fast), diff=PI → hairpin (slow)
    const curvature = Math.min(diff / Math.PI, 1);
    return 1.6 - curvature * 1.1; // range ~0.5 (hairpin) to 1.6 (straight)
  }

  // SVG viewBox for coordinate mapping onto canvas
  const VX = 15,
    VY = 95,
    VW = 855,
    VH = 265;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width,
      H = canvas.height;

    // Map SVG coords to canvas
    const sx = W / VW,
      sy = H / VH;
    const tx = (x: number) => (x - VX) * sx;
    const ty = (y: number) => (y - VY) * sy;

    // Clear
    ctx.clearRect(0, 0, W, H);

    // Draw SVG track shapes via Path2D
    const drawSVGPath = (d: string, fill?: string, stroke?: string, lw = 1) => {
      const p = new Path2D(d);
      ctx.save();
      ctx.setTransform(sx, 0, 0, sy, -VX * sx, -VY * sy);
      if (fill) {
        ctx.fillStyle = fill;
        ctx.fill(p);
      }
      if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.lineWidth = lw / sx;
        ctx.stroke(p);
      }
      ctx.restore();
    };

    // Shadow
    ctx.save();
    ctx.shadowColor = "#000";
    ctx.shadowBlur = 8;
    drawSVGPath(exterior, "#000");
    ctx.restore();

    // Curb
    drawSVGPath(exterior, "#c9a97a");
    // Asphalt
    ctx.save();
    ctx.shadowColor = "#3b82f6";
    ctx.shadowBlur = 12;
    drawSVGPath(exterior, "#1c1c1e");
    ctx.restore();
    // Interior hole
    drawSVGPath(interior, "#050b1a");
    // Edge lines
    drawSVGPath(exterior, undefined, "rgba(255,255,255,0.32)", 1.5);
    drawSVGPath(interior, undefined, "rgba(255,255,255,0.32)", 1.5);

    // Center dashes
    ctx.save();
    ctx.setLineDash([tx(8) - tx(0), tx(16) - tx(0)]);
    drawSVGPath(
      "M 32,172 L 35,209 L 96,241 L 110,256 L 106,304 L 114,310 L 822,325 L 842,311 L 848,298 L 841,237 L 803,219 L 780,159 L 693,129 L 660,135 L 658,166 L 668,176 L 729,202 L 762,253 L 754,260 L 468,122 L 432,122 L 411,132 L 340,208 L 326,249 L 298,264 L 238,262 L 201,253 L 127,195 L 150,178 L 266,179 L 293,173 L 309,164 L 320,147 L 320,121 L 308,109 L 109,108 L 61,132 L 42,152 Z",
      undefined,
      "rgba(255,255,255,0.1)",
      1.2,
    );
    ctx.restore();

    // Start/Finish line
    const sfX = tx(540),
      sfY1 = ty(308),
      sfY2 = ty(338);
    ctx.fillStyle = "#fff";
    ctx.fillRect(sfX, sfY1, tx(3) - tx(0), sfY2 - sfY1);
    ctx.fillStyle = "#e11d48";
    ctx.fillRect(sfX + tx(9) - tx(0), sfY1, tx(3) - tx(0), sfY2 - sfY1);

    if (finishGlowRef.current > 0) {
      const progress = finishGlowRef.current / 20;

      ctx.shadowColor = "#ffffff";
      ctx.shadowBlur = 20 * progress;

      ctx.fillStyle = `rgba(255,255,255,${0.8 * progress})`;
      ctx.fillRect(sfX, sfY1, tx(3) - tx(0), sfY2 - sfY1);

      ctx.shadowBlur = 0;

      finishGlowRef.current--;
    }

    // Advance car position using variable speed
    const speed = speedAt(tRef.current);
    const BASE = totalLen / (74 * 60); // full lap in 10s at 60fps
    tRef.current = (tRef.current + BASE * speed + totalLen) % totalLen;
    const speed2 = speedAt(tRef2.current) * 0.8;
    tRef2.current = (tRef2.current + BASE * speed2 + totalLen) % totalLen;

    const [cx, cy] = posAtDist(tRef.current);
    const [cx2, cy2] = posAtDist(tRef2.current);

    const angle = angleAtDist(tRef.current);

    // Add to trail
    trailRef.current.push({ x: cx, y: cy, age: 0 });
    trailRef2.current.push({ x: cx2, y: cy2, age: 0 });

    // detectar paso por meta
    const finishX = 540;
    const finishY = 320;

    const nearFinish =
      Math.abs(cx - finishX) < 10 && Math.abs(cy - finishY) < 10;

    if (nearFinish && !lastLapRef.current) {
      finishGlowRef.current = 40;
    }

    lastLapRef.current = nearFinish;

    const nearFinish2 =
      Math.abs(cx2 - finishX) < 10 && Math.abs(cy2 - finishY) < 10;

    if (nearFinish2 && !lastLapRef2.current) {
      finishGlowRef.current = 20;
    }

    lastLapRef2.current = nearFinish2;

    for (let i = trailRef.current.length - 1; i >= 0; i--) {
      const p = trailRef.current[i];
      p.age++;

      if (p.age > 50) {
        trailRef.current.splice(i, 1);
      }
    }

    for (let i = trailRef2.current.length - 1; i >= 0; i--) {
      const p = trailRef2.current[i];
      p.age++;

      if (p.age > 50) {
        trailRef2.current.splice(i, 1);
      }
    }

    for (let i = lineGlowRef.current.length - 1; i >= 0; i--) {
      const p = lineGlowRef.current[i];
      p.age++;

      if (p.age > 40) {
        lineGlowRef.current.splice(i, 1);
      }
    }

    const color = carColorRef.current;
    const secondCarColor = "#a855f7";

    // Draw trail: dots fading out
    const trail = trailRef.current;
    for (let i = 0; i < trail.length - 1; i++) {
      const p = trail[i];
      const progress = i / trail.length; // 0=oldest, 1=newest
      const alpha = progress * progress * 0.7; // quadratic fade
      const radius = (tx(5) - tx(0)) * (0.5 + progress * 0.4);

      ctx.beginPath();
      ctx.arc(tx(p.x), ty(p.y), radius, 0, Math.PI * 2);

      // Parse hex color and apply alpha
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(2)})`;
      ctx.fill();
    }

    const trail2 = trailRef2.current;
    for (let i = 0; i < trail2.length - 1; i++) {
      const p = trail2[i];
      const progress = i / trail2.length;
      const alpha = progress * progress * 0.7;
      const radius = (tx(5) - tx(0)) * (0.5 + progress * 0.4);

      ctx.beginPath();
      ctx.arc(tx(p.x), ty(p.y), radius, 0, Math.PI * 2);

      const r = parseInt(secondCarColor.slice(1, 3), 16);
      const g = parseInt(secondCarColor.slice(3, 5), 16);
      const b = parseInt(secondCarColor.slice(5, 7), 16);

      ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(2)})`;
      ctx.fill();
    }

    const glowPoints = lineGlowRef.current;

    for (let i = 0; i < glowPoints.length; i++) {
      const p = glowPoints[i];
      const progress = 1 - p.age / 40;

      const x = tx(p.x);
      const y = ty(p.y);

      const r1 = (tx(14) - tx(0)) * progress;
      const r2 = (tx(8) - tx(0)) * progress;
      const r3 = (tx(3) - tx(0)) * progress;

      ctx.beginPath();
      ctx.arc(x, y, r1, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${0.08 * progress})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, r2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${0.18 * progress})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, r3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${0.8 * progress})`;
      ctx.fill();
    }

    // Car body — subtle glow
    ctx.save();
    ctx.beginPath();
    ctx.arc(tx(cx), ty(cy), tx(10) - tx(0), 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.arc(tx(cx2), ty(cy2), tx(10) - tx(0), 0, Math.PI * 2);
    ctx.fillStyle = secondCarColor;
    ctx.fill();

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Set canvas size to match displayed size
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

  // Aspect ratio of viewBox
  const aspect = VH / VW; // 265/855

  return (
    <section
      style={{
        padding: "40px 50px 0px 50px",
        color: "white",
        fontFamily: "'Barlow Condensed', sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;700;900&display=swap');`}</style>

      {/* HEADER */}
      <div style={{ marginBottom: "40px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "8px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "3px",
              background: "linear-gradient(90deg,#e11d48,#ff6b35)",
            }}
          />
          <span
            style={{
              fontSize: "38px",
              fontWeight: "700",
              letterSpacing: "3px",
              color: "#e11d48",
              textTransform: "uppercase",
            }}
          >
            Interactive Circuit Visualization
          </span>
        </div>

        <h2
          style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: "900",
            letterSpacing: "2px",
            textTransform: "uppercase",
            background: "linear-gradient(135deg,#ffffff,#9ca3af)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
        >
          Circuit de Barcelona-Catalunya
        </h2>

        <p
          style={{
            opacity: 0.45,
            fontSize: "12px",
            fontWeight: "600",
            marginTop: "6px",
            letterSpacing: "1px",
          }}
        >
          Montmeló · 4.657 KM · 16 CURVAS
        </p>
      </div>

      {/* PANEL */}
      <div
        style={{
          display: "flex",
          gap: "80px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT INFO PANEL */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            flex: "0 0 220px"
          }}
        >
          {/* LIVERY */}
          <div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "2px",
                opacity: 0.4,
                marginBottom: "8px",
              }}
            >
              LIVERY
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setCarColor(c)}
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: c,
                    border:
                      carColor === c
                        ? "2px solid white"
                        : "2px solid transparent",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>

          {/* STRAIGHT */}
          <div>
            <div style={{ fontSize: "20px", fontWeight: "900" }}>1047 m</div>
            <div style={{ fontSize: "9px", opacity: 0.4 }}>RECTA PRINCIPAL</div>
          </div>

          {/* FASTEST LAP */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/f1-avatar.png"
              style={{
                width: "55px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid #dc0000",
                boxShadow: "0 0 10px rgba(220,0,0,0.6)",
              }}
            />

            <div>
              <div style={{ fontSize: "20px", fontWeight: "900" }}>
                1:14.637
              </div>

              <div
                style={{
                  fontSize: "9px",
                  opacity: 0.45,
                  letterSpacing: "1px",
                }}
              >
                Michael Schumacher · Ferrari · 2006
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CIRCUIT */}
        <div style={{ flex: 1, maxWidth: "900px" }}>
          <canvas
            ref={canvasRef}
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: `${VW}/${VH}`,
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}
