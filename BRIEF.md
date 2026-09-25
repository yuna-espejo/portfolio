# Brief del portfolio — Yuna Espejo (yunaespejo.com)

> Este documento es la fuente de verdad para diseñar y construir la nueva web.
> Léelo entero antes de proponer nada. Donde algo esté marcado como **[PENDIENTE]** o sea ambiguo, pregunta antes de asumir.
> Las decisiones marcadas como *(propuesta)* son recomendaciones razonadas: se pueden discutir, pero son el punto de partida.

---

## 1. Objetivo y público

**Objetivo principal:** que reclutadores técnicos vean lo que sé hacer y quieran hablar conmigo.
**Objetivos secundarios:** hacer contactos en el sector, construir marca personal y, más adelante, documentar lo que aprendo.

**Lector clave:** un reclutador o ingeniero senior de big tech (Microsoft, FAANG) o de un equipo de F1. Ve demasiados portfolios al día, ha llegado desde mi CV y tiene más candidatos por revisar. Tiene dos minutos. En ese tiempo tiene que entender quién soy, qué hago y por qué merece la pena seguir leyendo.

**Horizonte:** la web se diseña pensando en los próximos 1-2 años.

**Puestos a los que apunto:** Software Engineer, Cloud / Integration Engineer. Todavía no está cerrado, así que la web no debe encasillarme en un único título de puesto.

**Qué quiero que haga el visitante al terminar:** leer un proyecto o caso a fondo, escribirme un email, conectar en LinkedIn o ver mi GitHub.

**Restricción importante:** la web la puede ver gente de mi empresa actual. Nada de "busco trabajo" ni "disponible para oportunidades". Usar algo neutro como "Abierta a conversar sobre integraciones, backend y datos".

**Cómo sabré que funciona:** cuando me escriban personas que han visto mi trabajo y sienten curiosidad por cómo lo hice, cómo se me ocurrió o porque quieren esa mentalidad en su equipo.

---

## 2. Posicionamiento

**Enfoque:** backend e integraciones como base, la F1 como hilo personal que me hace memorable, y el aprendizaje como extra.

**Etiqueta de rol (junto al nombre):**
- ES: Junior Consultant · Digital Integrations — Estudiante de Ingeniería Informática (UOC)
- EN: Junior Consultant · Digital Integrations — Software Engineering student (UOC)

Las dos cosas son igual de importantes: una no quita la otra.

**Frase principal *(propuesta, primera persona, tono cercano pero profesional)*:**
- ES: "Conecto sistemas para que los datos lleguen de un sitio a otro completos, correctos y a tiempo. Lo que más me engancha es ver cómo se transforman por el camino."
- EN: "I connect systems so data gets from one place to another complete, correct and on time. What hooks me is watching it transform along the way."

**Cómo quiero que me describan:** curiosa, constante, trabajadora, interesante.
**Cómo NO quiero que me describan:** caótica, desordenada, poco profesional, infantil. Esto aplica tanto al contenido como al diseño.

**Lo que me diferencia (para la sección "Sobre mí"):**
- Soy constante: cuando me centro en un proyecto no paro hasta tenerlo bien hecho, probado y documentado para la siguiente persona o cliente.
- Me gusta documentar y dejar las cosas organizadas.
- Aprendo rápido: empecé las prácticas en Timestamp sin conocer SAP Cloud Integration, Groovy ni SuccessFactors, y me ofrecieron un contrato como Junior Consultant porque había asimilado los conceptos rápido. **[PENDIENTE]** confirmar fechas: el CV dice prácticas de marzo a octubre de 2025 y contrato desde noviembre de 2025; usar las del CV salvo corrección.
- No me cuesta preguntar ni proponer mis propias teorías, y quienes han trabajado conmigo dicen que genero buen ambiente sin perder el foco.

**Por qué backend y fiabilidad:** siempre me ha interesado cómo funcionan las cosas por dentro, no solo saber que funcionan. Y la fiabilidad es clave cuando trabajas con grandes volúmenes de datos, algunos tan sensibles como datos personales de empleados.

**Por qué la F1 (lado técnico):** me fascina cómo analizan la telemetría y los tiempos para decidir una estrategia de neumáticos o una parada. Me interesa especialmente el software que hace posible ver y usar esa telemetría.

**Peso de la F1 en la web:** medio (3/5). Presente como hilo y detalle visual, no como tema central.

**Presentación en 30 segundos (referencia de tono de voz):**
> Hola, me llamo Yuna Espejo. Trabajo como Junior Consultant en el equipo de Digital Integrations de Timestamp Group y estudio Ingeniería Informática en la UOC, con intención de especializarme en Ingeniería del Software. Me encantaría conocer a gente con las mismas ganas de crear sus propias soluciones.

---

## 3. Experiencia

**Mi trabajo, explicado para alguien de otro sector:**
Desarrollo integraciones para procesos de recursos humanos con SAP Cloud Integration (SCI): obtengo datos de SuccessFactors y otras fuentes, los transformo y valido con Groovy scripts, mappings y DataStores, y los entrego al sistema destino por SFTP, Microsoft Graph o APIs. Participo en todo el ciclo del proyecto: análisis, desarrollo, pruebas, despliegue y documentación.

**Nombres de clientes:** **[PENDIENTE]** confirmar con la empresa si se pueden mencionar. Hasta entonces, **todos los casos se publican anonimizados por sector.** No usar nombres de clientes, IDs de iFlows, credenciales, IPs ni ningún dato interno.

### Casos destacados (formato: contexto → problema → qué hice → resultado)

**Caso 1 — Sincronización de empleados para una farmacéutica internacional** *(el que más orgullo me da)*
- Contexto: integración que sincroniza los datos de empleados desde SuccessFactors hacia un sistema interno del cliente.
- Problema: la carga completa diaria consumía demasiadas llamadas y no escalaba bien.
- Qué hice: depuré la integración a fondo y diseñé una arquitectura en tres modos, carga completa (bulk), incremental (delta) y snapshot, para enviar solo lo que ha cambiado.
- Resultado: en producción, con muchas menos llamadas diarias y documentación técnica mantenida hasta la versión 1.6.
- Impacto medible: **[PENDIENTE]** número de llamadas diarias antes y después del delta, o porcentaje de reducción. Sacarlo de la monitorización.

**Caso 2 — Investigación de desincronizaciones en una plataforma de formación de una teleco**
- Contexto: sincronización de cursos entre una plataforma de aprendizaje y SuccessFactors.
- Problema: cursos que no aparecían o no se actualizaban correctamente.
- Qué hice: investigué el flujo completo (incluidas transformaciones XSLT) e identifiqué varias causas raíz: una ventana incremental de 7 días que dejaba registros fuera, un error en el filtro de cursos completados y un desajuste de esquema en el flujo de desasignación. Amplié la integración para reutilizar identificadores existentes en lugar de crear duplicados.
- Resultado: problema de esquema resuelto, casos afectados corregidos y un problema de calidad de datos sacado a la luz: unos 2.650 de 2.667 elementos del catálogo tenían títulos duplicados.

**Caso 3 — Diseño de una integración de 7 flujos entre SAP y un CRM**
- Contexto: conectar el ERP de un cliente del sector óptico con su CRM.
- Qué hice: analicé las dependencias y diseñé el orden de la integración en 7 flujos encadenados (autenticación → clientes → direcciones de envío → familias de producto → productos → pedidos → facturas), teniendo en cuenta las limitaciones de la API de destino (upserts por identificador externo de máximo 30 caracteres, lotes de 200 registros).
- Resultado: una planificación de unos 60 días de integración con dependencias claras desde el principio.

**Caso 4 — Automatización con GitHub Actions** *(propuesta: incluirlo, es la mejor señal de ingeniería/DevOps que tengo)*
- Contexto: durante mis prácticas, el equipo necesitaba controlar la calidad de las integraciones y mover desarrollos entre entornos de forma fiable.
- Qué hice: desarrollé dos workflows de GitHub Actions: uno que comprueba automáticamente las buenas prácticas de las integraciones y otro que automatiza la migración entre entornos.
- Resultado: **[PENDIENTE]** qué cambió (tiempo ahorrado por migración, errores detectados antes de producción, si el equipo los sigue usando).

**Otros trabajos (mención breve, opcional):**
- Migración completa de una plataforma de integraciones de SAP Neo a Cloud Foundry: credenciales, configuración del entorno, importación, verificación funcional y reconfiguración SFTP.
- Integraciones del ciclo de vida del empleado para una aseguradora (altas, bajas, cambios de datos y ausencias).
- Generación automatizada de ficheros CSV (estándar y cifrados) con datos de empleados, ejecutada a diario con crontab y versionada en Bitbucket.
- Sincronización de empleados y convenios entre SuccessFactors y una plataforma de gestión de turnos, ejecutada cada 5 minutos.
- Servicio en Node.js / SAP CAP que extrae documentos de SuccessFactors, los comprime, los cifra con PGP y los entrega por SFTP.
- Automatización de notificaciones de reconocimiento por antigüedad (5, 10, 15, 20+ años) para empleados y dirección.

**Datos cuantificables disponibles hoy:** 7 flujos diseñados en una sola integración; unos 2.667 registros analizados en una investigación de calidad de datos; sincronizaciones cada 5 minutos; 2 pipelines de CI/CD en producción del equipo; proyectos para clientes de 4 sectores (telecomunicaciones, seguros, farmacéutico y gestión de personal) en varios países. Lo que falta cuantificar está marcado como [PENDIENTE].

### Trayectoria (para `/experience` y `/cv`)
- **Junior Consultant**, Timestamp Spain (Timestamp Group, consultora tecnológica internacional con más de 1.000 profesionales) · noviembre 2025 – actualidad · media jornada · Barcelona / remoto.
- **SAP Integration Trainee**, Timestamp Spain · marzo – octubre 2025 · prácticas.
- **IT Technician Intern**, ClickTech (Erasmus+) · marzo – abril 2024 · Amarante, Portugal. *(propuesta: solo en `/cv`)*
- **Marketing & Social Media Intern**, Grupo Actialia · octubre 2023 – enero 2024. *(propuesta: solo en `/cv`)*

### Stack real (mostrar lo que uso de verdad)
- Integración: SAP Integration Suite / Cloud Integration, SAP BTP, SuccessFactors, SAP Plateau (LMS).
- Lenguajes: Groovy, SQL, Python, JavaScript. Node.js solo en proyectos puntuales: no presentarlo como punto fuerte.
- Formatos y protocolos: REST, XML, XSLT, JSON, CSV, SFTP, Microsoft Graph.
- DevOps y herramientas: GitHub Actions, Git, Bitbucket, Docker, Postman, Linux (crontab).
- Datos: PostgreSQL, MySQL, Power BI, Excel avanzado.
- No listar en la web tecnologías que no uso con soltura (por ejemplo C#, HTML/CSS como skill principal).

### Formación
- Grado en Ingeniería Informática, UOC, itinerario de Ingeniería del Software (en curso, desde septiembre de 2026).
- CFGS Administración de Sistemas Informáticos en Red (ASIX), IES Sa Palomera, completado. Linux/Windows Server, Docker, scripting, redes, bases de datos y seguridad.
- CFGM Sistemas Microinformáticos y Redes (SMX), IES Sa Palomera, 2021-2024.
- *(propuesta)* No mostrar notas en la web.

### Certificaciones y logros
Para la web *(propuesta: por relevancia para el perfil técnico)*:
- Discovering SAP Business Technology Platform — Record of Achievement (SAP, 2025).
- 3.er puesto — Campeonato Nacional de Excel (PUE Academy, junio 2025). Es memorable y demuestra competitividad: merece un hueco.
- Microsoft Office Specialist — Excel Associate y Word Expert.
- En preparación: certificación CCA-F (objetivo: antes de noviembre de 2026), mostrada como "en curso" solo en `/cv`.

Solo en `/cv`: Inteligencia Artificial para la Ciudadanía y Ciberseguridad Básica (Generalitat de Catalunya, 2025), módulos de Microsoft Learn, certificado de inglés.

### Idiomas
Español (nativo), inglés (en mejora), portugués (básico). *(propuesta: mostrar niveles concretos solo en `/cv`)*

### Contacto
- Email: y.espejo.santana@gmail.com
- LinkedIn: linkedin.com/in/yuna-espejo-santana

### Comunidad
- Miembro de Rewrite the Code (comunidad de mujeres en tecnología).
- Creadora de contenido tech en @yesa.exe.

### CV
- Página de CV en la web (HTML, trilingüe) y PDF descargable.
- La página `/cv` y el PDF deben decir lo mismo que la web. El PDF actual está desactualizado: pone ASIX "en curso" y no incluye la UOC. **[PENDIENTE]** actualizar el PDF (ASIX completado, añadir la UOC) antes del lanzamiento.
- Nombres de clientes: el CV ya los menciona. Aun así, la web es más pública y la verá gente de la empresa, así que se mantiene anonimizada hasta confirmarlo.

---

## 4. Proyectos

**Situación actual:** empiezo de cero. Todo lo que hay ahora en la web se elimina porque no me representa. **En el lanzamiento no habrá proyectos personales publicados.**

**Cómo resolverlo en el lanzamiento *(propuesta)*:**
- La home no muestra una sección de proyectos vacía ni con "próximamente". En su lugar, los casos de experiencia (sección 3) hacen de prueba principal.
- La página `/projects` y su componente de tarjeta se dejan construidos y listos, pero ocultos en la navegación hasta que exista el primer proyecto terminado.
- Solo se publican proyectos terminados.

**Formato de proyecto:** tarjeta breve con enlaces; los proyectos principales tienen además página propia tipo caso de estudio (problema, qué hice, decisiones técnicas, resultado, enlaces).

**Próximos proyectos previstos:** mi propia API, proyectos de la UOC y NetClone.

**GitHub:** necesita limpieza antes de enlazarlo. **[PENDIENTE]** tarea previa al lanzamiento.

**Simulación del circuito:** se mantiene solo como detalle decorativo. Como la web se rehace desde cero, *(propuesta)* se recrea como una ilustración ligera en SVG (el trazado del circuito dibujado con una línea fina) en lugar de reutilizar el código de la simulación.

---

## 5. Lado personal

**Peso:** bajo (2/5). Una sección compacta, no protagonista.

**Qué mostrar:** la F1 como afición, mi contenido en @yesa.exe y lecturas / estoicismo.
**Material posible:** algunas fotografías (por ejemplo, de Soria). **[PENDIENTE]** elegir 2-4 fotos. Los dibujos quedan fuera por ahora.
**Qué NO mostrar:** mis textos de escritura creativa.

**Foto:** una foto real mía. **[PENDIENTE]** facilitar la foto. Sin marcos decorativos, sin rotaciones, sin efecto "polaroid": se ve infantil.

**Tono:** cercano pero profesional, en primera persona, con humor muy sutil (como mucho algún guiño puntual).

---

## 6. Identidad visual

**Sensación buscada:** agradable a la vista, calmada, ni estridente ni aburrida. Profesional y cuidada, nunca infantil.

**Paleta** (base vintage de Adobe Color, con ajustes para contraste y accesibilidad):

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `bg` | `#F4F2E3` | `#1D1D16` | Fondo |
| `surface` | `#FBFAF2` | `#27271E` | Tarjetas y bloques |
| `ink` | `#33331F` | `#ECEAD6` | Texto principal |
| `muted` | `#5E5D45` | `#BAB7A0` | Texto secundario |
| `line` | `#D8D3B9` | `#3E3E2C` | Bordes y separadores |
| `olive` | `#45452A` | `#E0DEAA` | Bloques fuertes, botón principal |
| `sky` | `#AED0DE` | `#4F6D7A` | Fondos suaves, destacados |
| `link` | `#3F5F8A` | `#AED0DE` | Enlaces (azul periwinkle oscurecido para contraste) |
| `accent` | `#A8492A` | `#E07A52` | *(propuesta)* Rojo teja: detalles puntuales, guiño a la F1 |

Reglas: el acento se usa con cuentagotas (indicadores, un botón clave, el detalle del circuito). Todo texto cumple contraste AA (4,5:1). El taupe `#ACA793` solo para elementos no textuales.

**Modo:** según el sistema del visitante, con conmutador manual que recuerde la elección.

**Tipografía *(propuesta)*:**
- Títulos: **Newsreader** (serif editorial sobria, pesos 400-600, sin cursivas decorativas).
- Cuerpo e interfaz: **Geist** (sans neutra y muy legible).
- Detalles técnicos puntuales: **Geist Mono**.

**Guiños de terminal:** muy puntuales (por ejemplo, un pequeño detalle en el pie o en la página 404). Nada de prompts, cursores parpadeantes ni títulos como comandos.

**Concepto postal / analógico:** moderado (3/5). Se traduce en calidez de color y papel, espaciado generoso y algún detalle fino (como una línea de circuito o sellos discretos como etiquetas de metadatos). Sin marcos rotados, sin collages.

**Animación:** moderada (3/5). Un único momento de entrada cuidado en la home y transiciones que respondan a acciones del usuario. Respetar `prefers-reduced-motion`.

**Ilustraciones propias:** solo algunas y de forma discreta, si encajan; nunca como elemento principal.

**A evitar:** cualquier cosa que parezca infantil, recargada o de plantilla genérica de desarrollador (fondo negro con verde neón, rejillas, estética hacker).

---

## 7. Estructura

**Tipo:** web de varias páginas, preparada para añadir un blog o notas más adelante sin rehacer la navegación.

**Páginas *(propuesta)*:**
- `/` Home
- `/experience` Experiencia (casos detallados)
- `/projects` y `/projects/[slug]` (ocultas hasta que haya proyectos)
- `/about` Sobre mí (incluye "Fuera del código")
- `/cv` CV en la web + descarga del PDF
- `/contact` Contacto

**Orden de la home *(propuesta)*:**
1. Presentación: foto real, nombre, etiqueta de rol, frase principal y enlaces a LinkedIn, GitHub y email.
2. Experiencia destacada: los 3 casos en formato breve, enlazando a `/experience`.
3. Stack real.
4. Formación y certificaciones.
5. Fuera del código (compacto): F1, @yesa.exe, lecturas.
6. Contacto.

**Contacto:** email visible y formulario (nombre, email, mensaje), con protección anti-spam.

**Sin sección "ahora mismo".** Blog: quizá más adelante.

**Idiomas:** inglés, español y catalán. Idioma por defecto según el navegador, con selector manual.

---

## 8. Técnico

**Punto de partida:** repositorio en GitHub, desplegado en Vercel, con dominio propio (yunaespejo.com). Se rehace desde cero: no se reutiliza nada de la web actual.

**Framework:** a decidir por Claude Code. *(propuesta)* Astro, por ser una web de contenido multipágina donde priman rendimiento, SEO e i18n; con una función serverless en Vercel para el formulario de contacto. Si se propone otra opción, justificarla.

**Contenido:** se edita directamente en el código, pero centralizado (textos y traducciones en archivos de datos/diccionarios por idioma, no dispersos por los componentes).

**Traducciones:** Claude las genera y yo las reviso.

**Analítica:** completa, cumpliendo el RGPD (banner de consentimiento; sin cookies de analítica hasta que se acepten).

**Prioridades técnicas:** rendimiento, SEO (metadatos, Open Graph por idioma, sitemap, hreflang), tests y facilidad de mantenimiento. Accesibilidad AA como mínimo en cualquier caso.

**Tests *(propuesta)*:** tests end-to-end básicos de navegación e idiomas, comprobación de enlaces rotos, auditoría automática de accesibilidad y test del formulario.

**Repositorio:** público.

**Objetivo de aprendizaje ahora mismo:** ninguno en particular; prioridad a dejarla lista y mejorarla poco a poco.

---

## 9. Plan y mantenimiento

**Plazo:** lo antes posible.
**Dedicación:** menos de 2 horas a la semana.
**Lanzamiento:** todo de golpe.
**Actualización:** cuando haya algo nuevo.
**@yesa.exe:** enlazado desde "Fuera del código" y en el pie.

**Checklist previa al lanzamiento:**
- [ ] Confirmar si se pueden nombrar clientes (hasta entonces, anonimizados).
- [ ] Conseguir la cifra de reducción de llamadas del caso 1.
- [ ] Concretar el resultado de los workflows de GitHub Actions (caso 4).
- [ ] Confirmar fechas de prácticas y contrato.
- [ ] Foto real para la presentación.
- [ ] 2-4 fotos para "Fuera del código".
- [ ] PDF del CV actualizado (ASIX completado, UOC añadida).
- [ ] Limpieza de GitHub.
- [ ] Revisión de las traducciones.
