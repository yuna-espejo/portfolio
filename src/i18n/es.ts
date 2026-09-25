export const es = {
  meta: {
    siteName: 'Yuna Espejo',
    homeTitle: 'Yuna Espejo — Software Developer',
    homeDescription:
      'Junior Consultant en Digital Integrations. Conecto sistemas para que los datos lleguen completos, correctos y a tiempo.',
  },
  nav: {
    experience: 'Experiencia',
    about: 'Sobre mí',
    cv: 'CV',
    contact: 'Contacto',
  },
  home: {
    role: 'Junior Consultant · Digital Integrations — Estudiante de Ingeniería Informática (UOC)',
    headline:
      'Conecto sistemas para que los datos lleguen de un sitio a otro completos, correctos y a tiempo. Lo que más me engancha es ver cómo se transforman por el camino.',
    ctaLinkedIn: 'LinkedIn',
    ctaGitHub: 'GitHub',
    ctaEmail: 'Escríbeme',
  },
  footer: {
    madeWith: 'Hecho con Astro',
    rights: 'Yuna Espejo',
  },
  themeToggle: {
    light: 'Cambiar a modo oscuro',
    dark: 'Cambiar a modo claro',
  },
  langSwitcher: {
    label: 'Idioma',
  },
} as const;

export type Translations = typeof es;
