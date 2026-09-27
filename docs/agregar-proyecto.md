# Cómo agregar un proyecto nuevo al portfolio

Cuando tengas un proyecto listo para publicar, sigue estos pasos en orden.

---

## 1. Elige un slug

El slug es el identificador del proyecto en la URL:
`yunaespejo.com/es/projects/nombre-del-proyecto`

Usa kebab-case, todo en minúsculas y sin tildes.
Ejemplo: `etl-pipeline`, `hr-dashboard`, `api-monitor`.

---

## 2. Añade los textos en los tres idiomas

Edita `src/i18n/es.ts`, `src/i18n/en.ts` y `src/i18n/ca.ts`.

Dentro de la sección `projects: { ... }`, añade una entrada nueva justo después de `circuitSim`:

```ts
// src/i18n/es.ts
tuSlug: {
  title: 'Nombre del proyecto',
  description: 'Una frase para el meta SEO y la cabecera de la página.',
  tagline: 'Por qué lo construiste. Una o dos frases en primera persona.',
  whatHeading: 'Qué hace',
  what: 'Descripción funcional del proyecto.',
  howItWorksHeading: 'Cómo funciona',
  howItWorks: 'Explicación técnica en tus propias palabras.',
  techHeading: 'Tecnologías',
  tech: ['Python', 'PostgreSQL', 'GitHub Actions'],
  backLabel: 'Volver a proyectos',
  githubLabel: 'Ver en GitHub',  // opcional
  githubUrl: 'https://github.com/yuna-espejo/tu-repo',  // opcional
},
```

Repite en `en.ts` y `ca.ts` con la traducción correspondiente.
La estructura debe ser idéntica en los tres archivos.

---

## 3. Crea las páginas del proyecto (3 locales)

Copia el archivo `src/pages/es/projects/circuit-simulation.astro` como base y renómbralo con tu slug:

```
src/pages/es/projects/tu-slug.astro
src/pages/en/projects/tu-slug.astro
src/pages/ca/projects/tu-slug.astro
```

Cambia en cada uno:
- La línea `const t = useTranslations('es')` → el idioma correspondiente
- `const p = t.projects.circuitSim` → `t.projects.tuSlug`
- El contenido HTML según las secciones que tenga tu proyecto
- Si el proyecto tiene demo interactiva, importa el componente; si no, elimina ese bloque

---

## 4. Actualiza la página índice de proyectos

Edita `src/pages/es/projects/index.astro`, `en/projects/index.astro` y `ca/projects/index.astro`.

Actualmente muestran un mensaje de "en construcción". Cuando tengas un proyecto real, reemplaza el `<p class="projects-empty">` por una lista de tarjetas:

```astro
<ul class="projects-list" role="list">
  <li class="project-card">
    <a href={`/${lang}/projects/tu-slug`} class="project-card-link">
      <h2 class="project-card-title">{p.tuSlug.title}</h2>
      <p class="project-card-desc">{p.tuSlug.description}</p>
      <ul class="project-card-tags" role="list">
        {p.tuSlug.tech.map(tag => <li>{tag}</li>)}
      </ul>
    </a>
  </li>
</ul>
```

Añade los estilos necesarios en el bloque `<style>` de cada página.

---

## 5. Añade assets si los hay

Si el proyecto tiene capturas de pantalla o imágenes:

```
public/projects/tu-slug/screenshot.png
public/projects/tu-slug/demo.gif
```

Referencialas en la página del proyecto con rutas absolutas:
```html
<img src="/projects/tu-slug/screenshot.png" alt="Descripción" />
```

---

## 6. Verifica y publica

```bash
# Comprueba que compila sin errores
npm run build

# Revisa en local antes de subir
npm run dev
# → http://localhost:4321/es/projects/tu-slug

# Sube al repo (Vercel despliega automáticamente)
git add src/ public/
git commit -m "feat: add project tu-slug"
git push
```

---

## Checklist rápido

- [ ] Slug elegido (kebab-case, sin tildes)
- [ ] Textos añadidos en `es.ts`, `en.ts` y `ca.ts`
- [ ] Páginas creadas en las 3 locales (`es/`, `en/`, `ca/`)
- [ ] Índice de proyectos actualizado en las 3 locales
- [ ] Assets subidos a `public/projects/tu-slug/` (si los hay)
- [ ] `npm run build` sin errores
- [ ] Revisado en local en los 3 idiomas
- [ ] Push al repo
