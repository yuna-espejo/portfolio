(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "circuit-simulation",
        title: "Interactive Circuit Simulation",
        description: "Real-time circuit simulation with curvature-based speed control",
        tags: [
            "Canvas",
            "JavaScript",
            "Simulation"
        ],
        image: "/projects/circuit.png",
        featured: true
    },
    {
        slug: "fastf1-analysis",
        title: "F1 Race Analysis",
        description: "Real telemetry data analysis using FastF1 — lap times, tyre strategy and pit stop detection from official F1 API data.",
        tags: [
            "Python",
            "FastF1",
            "pandas",
            "matplotlib"
        ],
        image: "/projects/f1-analysis.png",
        featured: true,
        github: "https://github.com/yuna-espejo/fastf1-analysis"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/projects/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProjectsPage() {
    _s();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tech, setTech] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const allTechs = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].flatMap((p)=>p.tags)));
    const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p)=>{
        const localizedTitle = t.projectsData[p.slug]?.title ?? p.title;
        const localizedDesc = t.projectsData[p.slug]?.description ?? p.description;
        const matchesSearch = (localizedTitle + localizedDesc + p.tags.join(" ")).toLowerCase().includes(search.toLowerCase());
        const matchesTech = tech === "all" || p.tags.includes(tech);
        return matchesSearch && matchesTech;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "3rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: termLine,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "var(--accent)"
                                },
                                children: "yuna@dev"
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "var(--text-dim)"
                                },
                                children: ":~$"
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "var(--text-muted)"
                                },
                                children: [
                                    " ",
                                    t.projects.cmd
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/page.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projects/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: pageTitle,
                        children: t.projects.title
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: pageDesc,
                        children: t.projects.desc
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1.25rem",
                    flexWrap: "wrap",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: searchWrapper,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: searchPrefix,
                            children: "grep"
                        }, void 0, false, {
                            fileName: "[project]/app/projects/page.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: t.projects.searchPlaceholder,
                            value: search,
                            onChange: (e)=>setSearch(e.target.value),
                            style: searchInput
                        }, void 0, false, {
                            fileName: "[project]/app/projects/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "1px",
                    marginBottom: "2.5rem",
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTech("all"),
                        style: {
                            ...filterBtn,
                            background: tech === "all" ? "var(--accent)" : "var(--bg-card)",
                            color: tech === "all" ? "var(--accent-dark)" : "var(--text-muted)",
                            borderColor: tech === "all" ? "var(--accent)" : "var(--border)"
                        },
                        children: t.projects.filterAll
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    allTechs.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setTech(tag),
                            style: {
                                ...filterBtn,
                                background: tech === tag ? "var(--accent)" : "var(--bg-card)",
                                color: tech === tag ? "var(--accent-dark)" : "var(--text-muted)",
                                borderColor: tech === tag ? "var(--accent)" : "var(--border)"
                            },
                            children: tag
                        }, tag, false, {
                            fileName: "[project]/app/projects/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "11px",
                    color: "var(--text-dim)",
                    letterSpacing: "0.06em",
                    marginBottom: "1rem"
                },
                children: [
                    filtered.length,
                    " ",
                    filtered.length !== 1 ? t.projects.results : t.projects.result
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: grid,
                children: filtered.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/projects/${p.slug}`,
                        style: {
                            textDecoration: "none",
                            color: "inherit"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: card,
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.borderColor = "var(--accent)";
                                e.currentTarget.style.transform = "translateY(-3px)";
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.borderColor = "var(--border)";
                                e.currentTarget.style.transform = "translateY(0)";
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: p.image,
                                            style: cardImg
                                        }, void 0, false, {
                                            fileName: "[project]/app/projects/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: imgOverlay
                                        }, void 0, false, {
                                            fileName: "[project]/app/projects/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/projects/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "1rem 1.25rem 1.25rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: cardMeta,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "var(--accent)"
                                                    },
                                                    children: "■"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/projects/page.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                p.tags[0]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/projects/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: cardTitle,
                                            children: t.projectsData[p.slug]?.title ?? p.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/projects/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: cardDesc,
                                            children: t.projectsData[p.slug]?.description ?? p.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/projects/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: "0.75rem",
                                                display: "flex",
                                                gap: "6px",
                                                flexWrap: "wrap"
                                            },
                                            children: p.tags.map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: tagStyle,
                                                    children: tag
                                                }, i, false, {
                                                    fileName: "[project]/app/projects/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 43
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/projects/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: cardFooter,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "var(--accent)",
                                                    fontSize: "11px",
                                                    letterSpacing: "0.08em",
                                                    opacity: 0.7
                                                },
                                                children: t.projects.open
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/projects/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/projects/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/projects/page.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    }, p.slug, false, {
                        fileName: "[project]/app/projects/page.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(ProjectsPage, "aoegjgjUM//hic2tCkf4/4y22gg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = ProjectsPage;
const container = {
    padding: "5rem 1.5rem 3rem",
    color: "var(--text)",
    fontFamily: "var(--font-jetbrains), monospace"
};
const termLine = {
    fontSize: "12px",
    letterSpacing: "0.04em",
    marginBottom: "1rem",
    display: "flex",
    gap: "4px"
};
const pageTitle = {
    fontFamily: "var(--font-montserrat), sans-serif",
    fontSize: "clamp(32px, 5vw, 52px)",
    fontWeight: 900,
    color: "var(--text)",
    margin: "0 0 0.5rem",
    letterSpacing: "-0.02em"
};
const pageDesc = {
    fontSize: "13px",
    color: "var(--text-muted)",
    margin: 0
};
const searchWrapper = {
    display: "flex",
    alignItems: "center",
    border: "1px solid var(--border)",
    background: "var(--bg-card)",
    overflow: "hidden"
};
const searchPrefix = {
    padding: "0.6rem 0.75rem",
    fontSize: "11px",
    color: "var(--accent)",
    borderRight: "1px solid var(--border)",
    letterSpacing: "0.06em"
};
const searchInput = {
    padding: "0.6rem 0.75rem",
    background: "transparent",
    border: "none",
    outline: "none",
    color: "var(--text)",
    fontSize: "12px",
    fontFamily: "var(--font-jetbrains), monospace",
    width: "220px"
};
const filterBtn = {
    padding: "6px 14px",
    border: "1px solid",
    cursor: "pointer",
    fontSize: "11px",
    letterSpacing: "0.06em",
    fontFamily: "var(--font-jetbrains), monospace",
    transition: "all 0.15s"
};
const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 340px))",
    gap: "1.5rem"
};
const card = {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    overflow: "hidden",
    transition: "all 0.2s",
    cursor: "pointer"
};
const cardImg = {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    display: "block"
};
const imgOverlay = {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, transparent 50%, var(--bg) 100%)",
    opacity: 0
};
const cardMeta = {
    fontSize: "10px",
    color: "var(--text-dim)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "0.4rem",
    display: "flex",
    alignItems: "center",
    gap: "6px"
};
const cardTitle = {
    fontSize: "15px",
    fontWeight: 500,
    color: "var(--text)",
    margin: "0 0 0.4rem",
    letterSpacing: "-0.01em"
};
const cardDesc = {
    fontSize: "12px",
    color: "var(--text-muted)",
    lineHeight: 1.7,
    margin: 0
};
const tagStyle = {
    fontSize: "10px",
    padding: "3px 8px",
    border: "1px solid var(--border)",
    color: "var(--text-dim)",
    letterSpacing: "0.06em"
};
const cardFooter = {
    marginTop: "1rem",
    paddingTop: "0.75rem",
    borderTop: "1px solid var(--border-soft)"
};
var _c;
__turbopack_context__.k.register(_c, "ProjectsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_05dfec5d._.js.map