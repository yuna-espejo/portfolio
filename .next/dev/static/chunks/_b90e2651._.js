(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Circuit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Circuit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Circuit() {
    _s();
    const finishGlowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [carColor, setCarColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#ff1801");
    const colors = [
        "#ff1801",
        "#0090d0",
        "#00d2be",
        "#a73c92",
        "#ff8700",
        "#ffffff"
    ];
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const tRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0); // progress 0..1 along path
    const trailRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lineGlowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const carColorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(carColor);
    const tRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(200); // segunda posición en el circuito
    const trailRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lastLapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastLapRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Circuit.useEffect": ()=>{
            carColorRef.current = carColor;
        }
    }["Circuit.useEffect"], [
        carColor
    ]);
    const exterior = "M 20,190 L 21,205 L 31,220 L 97,257 L 91,300 L 97,314 L 110,323 L 815,337 L 843,327 L 860,298 L 851,246 L 834,230 L 806,220 L 790,172 L 778,158 L 685,127 L 668,128 L 653,137 L 649,147 L 653,167 L 671,181 L 723,201 L 749,240 L 751,255 L 461,120 L 434,121 L 408,134 L 332,212 L 321,247 L 306,258 L 208,249 L 134,193 L 139,189 L 143,196 L 150,194 L 145,187 L 150,184 L 267,186 L 293,178 L 318,161 L 329,141 L 325,120 L 308,108 L 136,103 L 115,107 L 53,139 L 31,163 Z";
    const interior = "M 43,184 L 52,164 L 71,144 L 119,120 L 297,121 L 308,129 L 309,142 L 283,164 L 255,170 L 139,169 L 117,184 L 112,202 L 147,235 L 195,267 L 237,276 L 309,277 L 336,261 L 350,220 L 422,144 L 438,136 L 457,135 L 740,273 L 767,272 L 775,260 L 774,248 L 740,195 L 670,160 L 670,147 L 683,141 L 765,166 L 792,231 L 830,247 L 837,289 L 831,302 L 811,317 L 125,301 L 116,296 L 120,247 L 107,233 L 50,205 Z";
    // Centerline points (anticlockwise order — reversed)
    const clPts = [
        [
            32,
            172
        ],
        [
            35,
            209
        ],
        [
            96,
            241
        ],
        [
            110,
            256
        ],
        [
            106,
            304
        ],
        [
            114,
            310
        ],
        [
            822,
            325
        ],
        [
            842,
            311
        ],
        [
            848,
            298
        ],
        [
            841,
            237
        ],
        [
            803,
            219
        ],
        [
            780,
            159
        ],
        [
            693,
            129
        ],
        [
            660,
            135
        ],
        [
            658,
            166
        ],
        [
            668,
            176
        ],
        [
            729,
            202
        ],
        [
            762,
            253
        ],
        [
            754,
            260
        ],
        [
            468,
            122
        ],
        [
            432,
            122
        ],
        [
            411,
            132
        ],
        [
            340,
            208
        ],
        [
            326,
            249
        ],
        [
            298,
            264
        ],
        [
            238,
            262
        ],
        [
            201,
            253
        ],
        [
            127,
            195
        ],
        [
            150,
            178
        ],
        [
            266,
            179
        ],
        [
            293,
            173
        ],
        [
            309,
            164
        ],
        [
            320,
            147
        ],
        [
            320,
            121
        ],
        [
            308,
            109
        ],
        [
            109,
            108
        ],
        [
            61,
            132
        ],
        [
            42,
            152
        ]
    ];
    // Reverse for anticlockwise
    const pts = [
        ...clPts
    ].reverse();
    // Precompute cumulative distances for speed-based parametrization
    const segLens = [];
    let totalLen = 0;
    for(let i = 0; i < pts.length; i++){
        const a = pts[i];
        const b = pts[(i + 1) % pts.length];
        const d = Math.hypot(b[0] - a[0], b[1] - a[1]);
        segLens.push(d);
        totalLen += d;
    }
    const cumLen = [];
    let acc = 0;
    for (const l of segLens){
        cumLen.push(acc);
        acc += l;
    }
    // Get XY at distance d along path
    function posAtDist(d) {
        d = (d % totalLen + totalLen) % totalLen;
        let i = 0;
        while(i < cumLen.length - 1 && cumLen[i + 1] <= d)i++;
        const rem = d - cumLen[i];
        const frac = rem / segLens[i];
        const a = pts[i], b = pts[(i + 1) % pts.length];
        return [
            a[0] + (b[0] - a[0]) * frac,
            a[1] + (b[1] - a[1]) * frac
        ];
    }
    // Get tangent angle at distance d
    function angleAtDist(d) {
        const [x1, y1] = posAtDist(d - 2);
        const [x2, y2] = posAtDist(d + 2);
        return Math.atan2(y2 - y1, x2 - x1);
    }
    // Local curvature at distance d → speed factor
    // Compare angles over a window: tight curve = slow, straight = fast
    function speedAt(d) {
        const a1 = angleAtDist(d - 15);
        const a2 = angleAtDist(d + 15);
        let diff = Math.abs(a2 - a1);
        if (diff > Math.PI) diff = 2 * Math.PI - diff;
        // diff=0 → straight (fast), diff=PI → hairpin (slow)
        const curvature = Math.min(diff / Math.PI, 1);
        return 1.6 - curvature * 1.1; // range ~0.5 (hairpin) to 1.6 (straight)
    }
    // SVG viewBox for coordinate mapping onto canvas
    const VX = 15, VY = 95, VW = 855, VH = 265;
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Circuit.useCallback[draw]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const W = canvas.width, H = canvas.height;
            // Map SVG coords to canvas
            const sx = W / VW, sy = H / VH;
            const tx = {
                "Circuit.useCallback[draw].tx": (x)=>(x - VX) * sx
            }["Circuit.useCallback[draw].tx"];
            const ty = {
                "Circuit.useCallback[draw].ty": (y)=>(y - VY) * sy
            }["Circuit.useCallback[draw].ty"];
            // Clear
            ctx.clearRect(0, 0, W, H);
            // Draw SVG track shapes via Path2D
            const drawSVGPath = {
                "Circuit.useCallback[draw].drawSVGPath": (d, fill, stroke, lw = 1)=>{
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
                }
            }["Circuit.useCallback[draw].drawSVGPath"];
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
            ctx.setLineDash([
                tx(8) - tx(0),
                tx(16) - tx(0)
            ]);
            drawSVGPath("M 32,172 L 35,209 L 96,241 L 110,256 L 106,304 L 114,310 L 822,325 L 842,311 L 848,298 L 841,237 L 803,219 L 780,159 L 693,129 L 660,135 L 658,166 L 668,176 L 729,202 L 762,253 L 754,260 L 468,122 L 432,122 L 411,132 L 340,208 L 326,249 L 298,264 L 238,262 L 201,253 L 127,195 L 150,178 L 266,179 L 293,173 L 309,164 L 320,147 L 320,121 L 308,109 L 109,108 L 61,132 L 42,152 Z", undefined, "rgba(255,255,255,0.1)", 1.2);
            ctx.restore();
            // Start/Finish line
            const sfX = tx(540), sfY1 = ty(308), sfY2 = ty(338);
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
            trailRef.current.push({
                x: cx,
                y: cy,
                age: 0
            });
            trailRef2.current.push({
                x: cx2,
                y: cy2,
                age: 0
            });
            // detectar paso por meta
            const finishX = 540;
            const finishY = 320;
            const nearFinish = Math.abs(cx - finishX) < 10 && Math.abs(cy - finishY) < 10;
            if (nearFinish && !lastLapRef.current) {
                finishGlowRef.current = 40;
            }
            lastLapRef.current = nearFinish;
            const nearFinish2 = Math.abs(cx2 - finishX) < 10 && Math.abs(cy2 - finishY) < 10;
            if (nearFinish2 && !lastLapRef2.current) {
                finishGlowRef.current = 20;
            }
            lastLapRef2.current = nearFinish2;
            for(let i = trailRef.current.length - 1; i >= 0; i--){
                const p = trailRef.current[i];
                p.age++;
                if (p.age > 50) {
                    trailRef.current.splice(i, 1);
                }
            }
            for(let i = trailRef2.current.length - 1; i >= 0; i--){
                const p = trailRef2.current[i];
                p.age++;
                if (p.age > 50) {
                    trailRef2.current.splice(i, 1);
                }
            }
            for(let i = lineGlowRef.current.length - 1; i >= 0; i--){
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
            for(let i = 0; i < trail.length - 1; i++){
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
            for(let i = 0; i < trail2.length - 1; i++){
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
            for(let i = 0; i < glowPoints.length; i++){
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
        }
    }["Circuit.useCallback[draw]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Circuit.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            // Set canvas size to match displayed size
            const resize = {
                "Circuit.useEffect.resize": ()=>{
                    const rect = canvas.getBoundingClientRect();
                    canvas.width = rect.width * window.devicePixelRatio;
                    canvas.height = rect.height * window.devicePixelRatio;
                }
            }["Circuit.useEffect.resize"];
            resize();
            window.addEventListener("resize", resize);
            animRef.current = requestAnimationFrame(draw);
            return ({
                "Circuit.useEffect": ()=>{
                    cancelAnimationFrame(animRef.current);
                    window.removeEventListener("resize", resize);
                }
            })["Circuit.useEffect"];
        }
    }["Circuit.useEffect"], [
        draw
    ]);
    // Aspect ratio of viewBox
    const aspect = VH / VW; // 265/855
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            padding: "40px 50px 0px 50px",
            color: "white",
            fontFamily: "'Barlow Condensed', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;700;900&display=swap');`
            }, void 0, false, {
                fileName: "[project]/app/components/Circuit.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "40px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "10px",
                            marginBottom: "8px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "32px",
                                    height: "3px",
                                    background: "linear-gradient(90deg,#e11d48,#ff6b35)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/Circuit.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "38px",
                                    fontWeight: "700",
                                    letterSpacing: "3px",
                                    color: "#e11d48",
                                    textTransform: "uppercase"
                                },
                                children: "Interactive Circuit Visualization"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Circuit.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Circuit.tsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            margin: 0,
                            fontSize: "28px",
                            fontWeight: "900",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            background: "linear-gradient(135deg,#ffffff,#9ca3af)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                            display: "inline-block"
                        },
                        children: "Circuit de Barcelona-Catalunya"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Circuit.tsx",
                        lineNumber: 436,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            opacity: 0.45,
                            fontSize: "12px",
                            fontWeight: "600",
                            marginTop: "6px",
                            letterSpacing: "1px"
                        },
                        children: "Montmeló · 4.657 KM · 16 CURVAS"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Circuit.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Circuit.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "80px",
                    alignItems: "flex-start"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "24px",
                            flex: "0 0 220px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "10px",
                                            letterSpacing: "2px",
                                            opacity: 0.4,
                                            marginBottom: "8px"
                                        },
                                        children: "LIVERY"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Circuit.tsx",
                                        lineNumber: 485,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "10px"
                                        },
                                        children: colors.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCarColor(c),
                                                style: {
                                                    width: "20px",
                                                    height: "20px",
                                                    borderRadius: "50%",
                                                    backgroundColor: c,
                                                    border: carColor === c ? "2px solid white" : "2px solid transparent",
                                                    cursor: "pointer"
                                                }
                                            }, c, false, {
                                                fileName: "[project]/app/components/Circuit.tsx",
                                                lineNumber: 498,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Circuit.tsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Circuit.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "20px",
                                            fontWeight: "900"
                                        },
                                        children: "1047 m"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Circuit.tsx",
                                        lineNumber: 519,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "9px",
                                            opacity: 0.4
                                        },
                                        children: "RECTA PRINCIPAL"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Circuit.tsx",
                                        lineNumber: 520,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Circuit.tsx",
                                lineNumber: 518,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/f1-avatar.png",
                                        style: {
                                            width: "55px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            border: "2px solid #dc0000",
                                            boxShadow: "0 0 10px rgba(220,0,0,0.6)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Circuit.tsx",
                                        lineNumber: 525,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "20px",
                                                    fontWeight: "900"
                                                },
                                                children: "1:14.637"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Circuit.tsx",
                                                lineNumber: 537,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "9px",
                                                    opacity: 0.45,
                                                    letterSpacing: "1px"
                                                },
                                                children: "Michael Schumacher · Ferrari · 2006"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Circuit.tsx",
                                                lineNumber: 541,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Circuit.tsx",
                                        lineNumber: 536,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Circuit.tsx",
                                lineNumber: 524,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Circuit.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            maxWidth: "900px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            style: {
                                width: "100%",
                                height: "auto",
                                aspectRatio: `${VW}/${VH}`,
                                display: "block"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/Circuit.tsx",
                            lineNumber: 556,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Circuit.tsx",
                        lineNumber: 555,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Circuit.tsx",
                lineNumber: 467,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Circuit.tsx",
        lineNumber: 396,
        columnNumber: 5
    }, this);
}
_s(Circuit, "TvgPI8NP8mrJovemAi+ZVjwIEro=");
_c = Circuit;
var _c;
__turbopack_context__.k.register(_c, "Circuit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_b90e2651._.js.map