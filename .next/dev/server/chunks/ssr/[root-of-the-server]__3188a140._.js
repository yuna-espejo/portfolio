module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/components/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ThemeToggle() {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dark");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const saved = localStorage.getItem("theme") || "dark";
        setTheme(saved);
        document.documentElement.classList.toggle("light", saved === "light");
    }, []);
    const toggle = ()=>{
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("light", next === "light");
    };
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggle,
        style: btn,
        onMouseEnter: (e)=>{
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.borderColor = "var(--accent)";
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.color = "var(--text-dim)";
            e.currentTarget.style.borderColor = "var(--border)";
        },
        children: theme === "dark" ? "[ dark ]" : "[ light ]"
    }, void 0, false, {
        fileName: "[project]/app/components/ThemeToggle.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
const btn = {
    background: "transparent",
    border: "1px solid var(--accent)",
    color: "var(--accent)",
    fontSize: "11px",
    letterSpacing: "0.08em",
    fontFamily: "var(--font-jetbrains), monospace",
    cursor: "pointer",
    textTransform: "uppercase",
    padding: "4px 10px",
    transition: "all 0.2s"
};
}),
"[project]/messages/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"nav":{"projects":"projects","about":"about","contact":"contact"},"hero":{"available":"available for opportunities","desc1":"Junior Consultant @ Timestamp Group.","desc2":"Finishing ASIX · Starting CS @ UOC in September.","desc3":"Building data tools and motorsport visualizations.","projects":"./projects","cv":"cat cv.pdf","scroll":"scroll to explore ——","coords":"41.3851° N, 2.1734° E — Barcelona"},"stats":{"months":"months experience","projects":"projects completed","certifications":"certifications","countries":"countries worked"},"tech":{"title":"Tech Stack","cmd":"ls ./stack"},"journey":{"title":"Journey","cmd":"cat journey.log","items":[{"year":"2023","title":"ASIX","desc":"Higher Degree in Cross-Platform Application Development"},{"year":"2024 mar–apr","title":"ERASMUS+ Intern · ClickTech","desc":"Portugal — frontend development internship"},{"year":"2025 mar","title":"SAP Integration Trainee","desc":"Timestamp Group — data integrations and SAP BTP"},{"year":"2025 nov","title":"Junior Technology Consultant","desc":"Timestamp Group — backend systems and automation"},{"year":"2025 sept →","title":"CS Degree · UOC","desc":"Computer Science Engineering — starting September 2025","active":true}]},"about":{"cmd":"cat about.md","subtitle":"Junior Consultant · Future Software Engineer","bio1":"Working on data integrations, automation and backend systems at","bio2":"Finishing ASIX · Starting CS at","bio3":"this September.","cv":"cat cv.pdf","experience":{"title":"Experience","cmd":"cat experience.log"},"certifications":{"title":"Certifications","cmd":"ls ./certifications"},"links":{"title":"Find me online","cmd":"open ./links"}},"projects":{"title":"Projects","cmd":"ls ./projects","desc":"Data tools, telemetry systems and performance engineering.","searchPlaceholder":"search projects...","results":"results found","result":"result found","open":"./open ——","filterAll":"All","featuredTitle":"Featured Projects","featuredCmd":"ls ./projects --featured"},"projectsData":{"circuit-simulation":{"title":"Interactive Circuit Simulation","description":"Real-time circuit simulation with curvature-based speed control","pageTitle":"Real-Time Circuit Simulation","pageDesc":"Path interpolation + Canvas API. A car that follows the track based on real curvature data.","readmeCmd":"cat circuit-simulation/README.md","sections":[{"title":"Context","body":"Started as a way to represent an F1 circuit visually — not a static image, but something with real movement and physics."},{"title":"Problem","body":"Make the car follow the track smoothly, with speed that varies based on actual corner geometry — not just a fixed rate."},{"title":"Solution","body":"A system of centerline points with distance-based interpolation. Speed is computed from local curvature: tight corners slow the car, straights speed it up."},{"title":"Real-world reference","body":"Lap time is calibrated to the actual circuit record — 1:14.637, Michael Schumacher, Ferrari, 2006.","accent":true},{"title":"What I learned","body":"Canvas animation loops, geometry for trajectory systems, and real-time rendering performance in the browser."}],"technologiesTitle":"Technologies"},"fastf1-analysis":{"title":"F1 Race Analysis","description":"Real telemetry data analysis using FastF1 — lap times, tyre strategy and pit stop detection from official F1 API data.","readmeCmd":"cat fastf1-analysis/README.md","pageTitle":"F1 Race Analysis","pageDesc":"Real telemetry data analysis using FastF1 — lap times, pit stop detection and tyre strategy from official F1 API data.","sections":[{"title":"Context","body":"A self-directed learning project towards F1 software engineering. Using real race data to understand how teams analyze strategy, tyre degradation and driver performance."},{"title":"What it does","body":"Compares two drivers lap-by-lap with automatic pit stop detection, tyre compound labels and interactive tooltips. Analysis of Piastri vs Antonelli at the 2026 Miami GP revealed Antonelli's undercut attempt on lap 26 vs Piastri's lap 28 stop.","accent":false},{"title":"Real-world reference","body":"Data sourced directly from the official F1 timing API via FastF1 — the same data feed used by teams during race weekends.","accent":true},{"title":"What I learned","body":"How to work with real telemetry data, detect pit stops programmatically from lap time deltas, and build clear visualizations that tell a story from raw numbers."}],"technologiesTitle":"Technologies","roadmapTitle":"Roadmap","roadmapCompleted":["Lap time evolution with tyre compound","Pit stop detection","Interactive tooltips"],"roadmapPending":["Speed trace telemetry","Tyre degradation model","Undercut detector","Multi-driver comparison"],"githubBtn":"view on github →"}},"contact":{"title":"Contact","cmd":"curl -X POST /contact","name":"name","namePlaceholder":"your name","email":"email","emailPlaceholder":"your@email.com","message":"message","messagePlaceholder":"your message...","send":"send message","findMe":"find me online"}});}),
"[project]/messages/es.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"nav":{"projects":"proyectos","about":"sobre mí","contact":"contacto"},"hero":{"available":"disponible para oportunidades","desc1":"Junior Consultant @ Timestamp Group.","desc2":"Terminando ASIX · Empezando Informática @ UOC en septiembre.","desc3":"Construyendo herramientas de datos y visualizaciones motorsport.","projects":"./proyectos","cv":"cat cv.pdf","scroll":"desplaza para explorar ——","coords":"41.3851° N, 2.1734° E — Barcelona"},"stats":{"months":"meses de experiencia","projects":"proyectos completados","certifications":"certificaciones","countries":"países trabajados"},"tech":{"title":"Stack Tecnológico","cmd":"ls ./stack"},"journey":{"title":"Trayectoria","cmd":"cat trayectoria.log","items":[{"year":"2023","title":"ASIX","desc":"Ciclo Superior de Desarrollo de Aplicaciones Multiplataforma"},{"year":"2024 mar–abr","title":"Prácticas ERASMUS+ · ClickTech","desc":"Portugal — prácticas de desarrollo frontend"},{"year":"2025 mar","title":"SAP Integration Trainee","desc":"Timestamp Group — integraciones de datos y SAP BTP"},{"year":"2025 nov","title":"Consultora Tecnológica Junior","desc":"Timestamp Group — sistemas backend y automatización"},{"year":"2025 sept →","title":"Ingeniería Informática · UOC","desc":"Ingeniería Informática — inicio septiembre 2025","active":true}]},"about":{"cmd":"cat about.md","subtitle":"Consultora Junior · Futura Ingeniera de Software","bio1":"Trabajando en integraciones de datos, automatización y sistemas backend en","bio2":"Terminando ASIX · Empezando Informática en","bio3":"este septiembre.","cv":"cat cv.pdf","experience":{"title":"Experiencia","cmd":"cat experiencia.log"},"certifications":{"title":"Certificaciones","cmd":"ls ./certificaciones"},"links":{"title":"Encuéntrame online","cmd":"open ./links"}},"projects":{"title":"Proyectos","cmd":"ls ./proyectos","desc":"Herramientas de datos, sistemas de telemetría e ingeniería de rendimiento.","searchPlaceholder":"buscar proyectos...","results":"resultados encontrados","result":"resultado encontrado","open":"./abrir ——","filterAll":"Todos","featuredTitle":"Proyectos Destacados","featuredCmd":"ls ./proyectos --destacados"},"projectsData":{"circuit-simulation":{"title":"Simulación de Circuito Interactivo","description":"Simulación de circuito en tiempo real con control de velocidad basado en curvatura","pageTitle":"Simulación de Circuito en Tiempo Real","pageDesc":"Interpolación de trayectoria + Canvas API. Un coche que sigue el circuito basándose en datos reales de curvatura.","readmeCmd":"cat circuit-simulation/README.md","sections":[{"title":"Contexto","body":"Empezó como una forma de representar un circuito de F1 visualmente — no una imagen estática, sino algo con movimiento y física real."},{"title":"Problema","body":"Hacer que el coche siga el circuito suavemente, con velocidad que varía según la geometría real de cada curva — no a un ritmo fijo."},{"title":"Solución","body":"Un sistema de puntos de línea central con interpolación por distancia. La velocidad se calcula a partir de la curvatura local: las curvas cerradas frenan el coche, las rectas lo aceleran."},{"title":"Referencia real","body":"El tiempo de vuelta está calibrado con el récord real del circuito — 1:14.637, Michael Schumacher, Ferrari, 2006.","accent":true},{"title":"Lo que aprendí","body":"Bucles de animación en Canvas, geometría para sistemas de trayectoria y rendimiento de renderizado en tiempo real en el navegador."}],"technologiesTitle":"Tecnologías"},"fastf1-analysis":{"title":"Análisis de Carrera F1","description":"Análisis de datos de telemetría real con FastF1 — tiempos de vuelta, estrategia de neumáticos y detección de paradas en boxes desde la API oficial de F1.","readmeCmd":"cat fastf1-analysis/README.md","pageTitle":"Análisis de Carrera F1","pageDesc":"Análisis de datos de telemetría real con FastF1 — tiempos de vuelta, detección de paradas en boxes y estrategia de neumáticos desde la API oficial de F1.","sections":[{"title":"Contexto","body":"Un proyecto de aprendizaje autodidacta orientado a la ingeniería de software en F1. Usando datos reales de carrera para entender cómo los equipos analizan estrategia, degradación de neumáticos y rendimiento de los pilotos."},{"title":"Qué hace","body":"Compara dos pilotos vuelta a vuelta con detección automática de paradas en boxes, etiquetas de compuesto de neumático y tooltips interactivos. El análisis de Piastri vs Antonelli en el GP de Miami 2026 reveló el intento de undercut de Antonelli en la vuelta 26 frente a la parada de Piastri en la vuelta 28.","accent":false},{"title":"Referencia real","body":"Datos extraídos directamente de la API de timing oficial de F1 a través de FastF1 — el mismo feed de datos que usan los equipos durante los fines de semana de carrera.","accent":true},{"title":"Lo que aprendí","body":"Cómo trabajar con datos de telemetría reales, detectar paradas en boxes programáticamente a partir de deltas de tiempo de vuelta, y construir visualizaciones claras que cuenten una historia a partir de números brutos."}],"technologiesTitle":"Tecnologías","roadmapTitle":"Hoja de ruta","roadmapCompleted":["Evolución de tiempo de vuelta con compuesto","Detección de paradas en boxes","Tooltips interactivos"],"roadmapPending":["Traza de velocidad por telemetría","Modelo de degradación de neumáticos","Detector de undercut","Comparación multi-piloto"],"githubBtn":"ver en github →"}},"contact":{"title":"Contacto","cmd":"curl -X POST /contacto","name":"nombre","namePlaceholder":"tu nombre","email":"email","emailPlaceholder":"tu@email.com","message":"mensaje","messagePlaceholder":"tu mensaje...","send":"enviar mensaje","findMe":"encuéntrame online"}});}),
"[project]/messages/ca.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"nav":{"projects":"projectes","about":"sobre mi","contact":"contacte"},"hero":{"available":"disponible per a oportunitats","desc1":"Junior Consultant @ Timestamp Group.","desc2":"Acabant ASIX · Començant Informàtica @ UOC al setembre.","desc3":"Construint eines de dades i visualitzacions motorsport.","projects":"./projectes","cv":"cat cv.pdf","scroll":"desplaça per explorar ——","coords":"41.3851° N, 2.1734° E — Barcelona"},"stats":{"months":"mesos d'experiència","projects":"projectes completats","certifications":"certificacions","countries":"països treballats"},"tech":{"title":"Stack Tecnològic","cmd":"ls ./stack"},"journey":{"title":"Trajectòria","cmd":"cat trajectoria.log","items":[{"year":"2023","title":"ASIX","desc":"Cicle Superior de Desenvolupament d'Aplicacions Multiplataforma"},{"year":"2024 mar–abr","title":"Pràctiques ERASMUS+ · ClickTech","desc":"Portugal — pràctiques de desenvolupament frontend"},{"year":"2025 mar","title":"SAP Integration Trainee","desc":"Timestamp Group — integracions de dades i SAP BTP"},{"year":"2025 nov","title":"Consultora Tecnològica Junior","desc":"Timestamp Group — sistemes backend i automatització"},{"year":"2025 set →","title":"Enginyeria Informàtica · UOC","desc":"Enginyeria Informàtica — inici setembre 2025","active":true}]},"about":{"cmd":"cat about.md","subtitle":"Consultora Junior · Futura Enginyera de Software","bio1":"Treballant en integracions de dades, automatització i sistemes backend a","bio2":"Acabant ASIX · Començant Informàtica a","bio3":"aquest setembre.","cv":"cat cv.pdf","experience":{"title":"Experiència","cmd":"cat experiencia.log"},"certifications":{"title":"Certificacions","cmd":"ls ./certificacions"},"links":{"title":"Troba'm online","cmd":"open ./links"}},"projects":{"title":"Projectes","cmd":"ls ./projectes","desc":"Eines de dades, sistemes de telemetria i enginyeria de rendiment.","searchPlaceholder":"cerca projectes...","results":"resultats trobats","result":"resultat trobat","open":"./obrir ——","filterAll":"Tots","featuredTitle":"Projectes Destacats","featuredCmd":"ls ./projectes --destacats"},"projectsData":{"circuit-simulation":{"title":"Simulació de Circuit Interactiu","description":"Simulació de circuit en temps real amb control de velocitat basat en curvatura","pageTitle":"Simulació de Circuit en Temps Real","pageDesc":"Interpolació de trajectòria + Canvas API. Un cotxe que segueix el circuit basant-se en dades reals de curvatura.","readmeCmd":"cat circuit-simulation/README.md","sections":[{"title":"Context","body":"Va començar com una manera de representar un circuit de F1 visualment — no una imatge estàtica, sinó alguna cosa amb moviment i física real."},{"title":"Problema","body":"Fer que el cotxe segueixi el circuit suaument, amb velocitat que varia segons la geometria real de cada corba — no a un ritme fix."},{"title":"Solució","body":"Un sistema de punts de línia central amb interpolació per distància. La velocitat es calcula a partir de la curvatura local: les corbes tancades frenen el cotxe, les rectes l'acceleren."},{"title":"Referència real","body":"El temps de volta està calibrat amb el rècord real del circuit — 1:14.637, Michael Schumacher, Ferrari, 2006.","accent":true},{"title":"El que vaig aprendre","body":"Bucles d'animació en Canvas, geometria per a sistemes de trajectòria i rendiment de renderitzat en temps real al navegador."}],"technologiesTitle":"Tecnologies"},"fastf1-analysis":{"title":"Anàlisi de Cursa F1","description":"Anàlisi de dades de telemetria real amb FastF1 — temps de volta, estratègia de pneumàtics i detecció de parades als boxes des de l'API oficial de F1.","readmeCmd":"cat fastf1-analysis/README.md","pageTitle":"Anàlisi de Cursa F1","pageDesc":"Anàlisi de dades de telemetria real amb FastF1 — temps de volta, detecció de parades als boxes i estratègia de pneumàtics des de l'API oficial de F1.","sections":[{"title":"Context","body":"Un projecte d'aprenentatge autodirigit orientat a l'enginyeria de software en F1. Usant dades reals de cursa per entendre com els equips analitzen estratègia, degradació de pneumàtics i rendiment dels pilots."},{"title":"Què fa","body":"Compara dos pilots volta a volta amb detecció automàtica de parades als boxes, etiquetes de compost de pneumàtic i tooltips interactius. L'anàlisi de Piastri vs Antonelli al GP de Miami 2026 va revelar l'intent d'undercut d'Antonelli a la volta 26 davant la parada de Piastri a la volta 28.","accent":false},{"title":"Referència real","body":"Dades extretes directament de l'API de timing oficial de F1 a través de FastF1 — el mateix feed de dades que fan servir els equips durant els caps de setmana de cursa.","accent":true},{"title":"El que vaig aprendre","body":"Com treballar amb dades de telemetria reals, detectar parades als boxes programàticament a partir de deltes de temps de volta, i construir visualitzacions clares que expliquin una història a partir de números en brut."}],"technologiesTitle":"Tecnologies","roadmapTitle":"Full de ruta","roadmapCompleted":["Evolució de temps de volta amb compost","Detecció de parades als boxes","Tooltips interactius"],"roadmapPending":["Traça de velocitat per telemetria","Model de degradació de pneumàtics","Detector d'undercut","Comparació multi-pilot"],"githubBtn":"veure a github →"}},"contact":{"title":"Contacte","cmd":"curl -X POST /contacte","name":"nom","namePlaceholder":"el teu nom","email":"email","emailPlaceholder":"tu@email.com","message":"missatge","messagePlaceholder":"el teu missatge...","send":"enviar missatge","findMe":"troba'm online"}});}),
"[project]/context/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLang",
    ()=>useLang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/messages/en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$es$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/messages/es.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$ca$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/messages/ca.json (json)");
"use client";
;
;
;
;
;
const messages = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$en$2e$json__$28$json$29$__["default"],
    es: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$es$2e$json__$28$json$29$__["default"],
    ca: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$ca$2e$json__$28$json$29$__["default"]
};
const LangContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    lang: "en",
    setLang: ()=>{},
    t: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$en$2e$json__$28$json$29$__["default"]
});
function LanguageProvider({ children }) {
    const [lang, setLangState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem("lang");
        if (saved && [
            "en",
            "es",
            "ca"
        ].includes(saved)) {
            setLangState(saved);
        }
    }, []);
    const setLang = (l)=>{
        setLangState(l);
        localStorage.setItem("lang", l);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LangContext.Provider, {
        value: {
            lang,
            setLang,
            t: messages[lang]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/LanguageContext.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
function useLang() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LangContext);
}
}),
"[project]/app/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const LANGS = [
    "en",
    "es",
    "ca"
];
function Navbar() {
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { lang, setLang, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const check = ()=>setIsMobile(window.innerWidth < 641);
        check();
        window.addEventListener("resize", check);
        return ()=>window.removeEventListener("resize", check);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    position: "sticky",
                    top: 0,
                    zIndex: 50,
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "18px 1.5rem",
                    alignItems: "center",
                    background: "var(--bg-soft)",
                    backdropFilter: "blur(12px)",
                    borderBottom: "1px solid var(--border)",
                    fontFamily: "var(--font-jetbrains), monospace"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            fontSize: "13px",
                            color: "var(--accent)",
                            textDecoration: "none",
                            letterSpacing: "0.04em"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "var(--text-dim)"
                                },
                                children: "~/"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            "yunaespejo"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-desktop",
                        style: {
                            display: "flex",
                            gap: "2rem",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/projects",
                                style: navLink,
                                children: t.nav.projects
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about",
                                style: navLink,
                                children: t.nav.about
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                style: navLink,
                                children: t.nav.contact
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "2px"
                                },
                                children: LANGS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLang(l),
                                        style: {
                                            background: lang === l ? "var(--accent)" : "transparent",
                                            color: lang === l ? "var(--accent-dark)" : "var(--text-muted)",
                                            border: lang === l ? "1px solid var(--accent)" : "1px solid var(--border)",
                                            fontFamily: "var(--font-jetbrains), monospace",
                                            fontSize: "10px",
                                            letterSpacing: "0.06em",
                                            padding: "4px 7px",
                                            cursor: "pointer",
                                            transition: "all 0.15s"
                                        },
                                        children: l
                                    }, l, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "10px",
                                    color: "var(--text-dim)",
                                    letterSpacing: "0.1em",
                                    borderLeft: "1px solid var(--border)",
                                    paddingLeft: "1.5rem"
                                },
                                children: "v2025.1"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMenuOpen(!menuOpen),
                        className: "nav-mobile-btn",
                        style: {
                            display: "none",
                            background: "transparent",
                            border: "1px solid var(--border)",
                            color: "var(--text-muted)",
                            cursor: "pointer",
                            fontFamily: "var(--font-jetbrains), monospace",
                            fontSize: "11px",
                            letterSpacing: "0.08em",
                            padding: "6px 10px"
                        },
                        children: menuOpen ? "[ close ]" : "[ menu ]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            menuOpen && isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: "57px",
                    left: 0,
                    right: 0,
                    zIndex: 49,
                    background: "var(--bg-soft)",
                    backdropFilter: "blur(12px)",
                    borderBottom: "1px solid var(--border)",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                    fontFamily: "var(--font-jetbrains), monospace"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/projects",
                        style: mobileLink,
                        onClick: ()=>setMenuOpen(false),
                        children: [
                            "./",
                            t.nav.projects
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/about",
                        style: mobileLink,
                        onClick: ()=>setMenuOpen(false),
                        children: [
                            "./",
                            t.nav.about
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        style: mobileLink,
                        onClick: ()=>setMenuOpen(false),
                        children: [
                            "./",
                            t.nav.contact
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "2px",
                            paddingTop: "0.25rem"
                        },
                        children: LANGS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLang(l),
                                style: {
                                    background: lang === l ? "var(--accent)" : "transparent",
                                    color: lang === l ? "var(--accent-dark)" : "var(--text-muted)",
                                    border: lang === l ? "1px solid var(--accent)" : "1px solid var(--border)",
                                    fontFamily: "var(--font-jetbrains), monospace",
                                    fontSize: "11px",
                                    letterSpacing: "0.06em",
                                    padding: "6px 10px",
                                    cursor: "pointer"
                                },
                                children: l
                            }, l, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            paddingTop: "0.25rem",
                            borderTop: "1px solid var(--border)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
const navLink = {
    fontSize: "12px",
    color: "var(--text-muted)",
    textDecoration: "none",
    letterSpacing: "0.08em",
    textTransform: "uppercase"
};
const mobileLink = {
    fontSize: "14px",
    color: "var(--text-muted)",
    textDecoration: "none",
    letterSpacing: "0.08em"
};
}),
"[project]/app/components/ContactButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
;
function ContactButton() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            alignItems: "flex-end",
            zIndex: 1000,
            fontFamily: "var(--font-jetbrains), monospace"
        },
        children: [
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    {
                        href: "mailto:y.espejo.santana@gmail.com",
                        label: "email",
                        prefix: "01"
                    },
                    {
                        href: "https://wa.me/34722332309",
                        label: "whatsapp",
                        prefix: "02"
                    },
                    {
                        href: "https://www.linkedin.com/in/yuna-espejo-santana/",
                        label: "linkedin",
                        prefix: "03"
                    }
                ].map(({ href, label, prefix })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: href,
                        target: "_blank",
                        rel: "noreferrer",
                        style: contactBtn,
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.borderColor = "var(--accent)";
                            e.currentTarget.style.color = "var(--accent)";
                            e.currentTarget.style.background = "var(--bg-card)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.color = "var(--text-muted)";
                            e.currentTarget.style.background = "var(--bg-soft)";
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: contactPrefix,
                                children: prefix
                            }, void 0, false, {
                                fileName: "[project]/app/components/ContactButton.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: contactDivider
                            }, void 0, false, {
                                fileName: "[project]/app/components/ContactButton.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "12px",
                                    letterSpacing: "0.08em"
                                },
                                children: [
                                    "./",
                                    label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ContactButton.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginLeft: "auto",
                                    fontSize: "11px",
                                    color: "var(--text-dim)"
                                },
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ContactButton.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/app/components/ContactButton.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this))
            }, void 0, false),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                style: {
                    width: "56px",
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    outline: "none",
                    background: open ? "var(--bg-soft)" : "var(--accent)",
                    border: open ? "1px solid var(--accent)" : "none"
                },
                onMouseEnter: (e)=>e.currentTarget.style.transform = "scale(1.05)",
                onMouseLeave: (e)=>e.currentTarget.style.transform = "scale(1)",
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 20,
                    color: "var(--accent)"
                }, void 0, false, {
                    fileName: "[project]/app/components/ContactButton.tsx",
                    lineNumber: 70,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                    size: 20,
                    color: "var(--accent-dark)"
                }, void 0, false, {
                    fileName: "[project]/app/components/ContactButton.tsx",
                    lineNumber: 71,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ContactButton.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ContactButton.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
const contactBtn = {
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
    transition: "all 0.2s"
};
const contactPrefix = {
    fontSize: "10px",
    color: "var(--accent)",
    letterSpacing: "0.1em",
    flexShrink: 0
};
const contactDivider = {
    width: "1px",
    height: "12px",
    background: "var(--border)",
    flexShrink: 0
};
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3188a140._.js.map