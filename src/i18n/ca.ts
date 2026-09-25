import type { Translations } from './es';

export const ca: Translations = {
  meta: {
    siteName: 'Yuna Espejo',
    homeTitle: 'Yuna Espejo — Software Developer',
    homeDescription:
      'Junior Consultant en Digital Integrations. Connecto sistemes perquè les dades arribin completes, correctes i a temps.',
  },
  nav: {
    experience: 'Experiència',
    about: 'Sobre mi',
    cv: 'CV',
    contact: 'Contacte',
  },
  home: {
    role: 'Junior Consultant · Digital Integrations — Estudiant d\'Enginyeria Informàtica (UOC)',
    headline:
      'Connecto sistemes perquè les dades arribin d\'un lloc a un altre completes, correctes i a temps. El que m\'enganxa és veure com es transformen pel camí.',
    ctaLinkedIn: 'LinkedIn',
    ctaGitHub: 'GitHub',
    ctaEmail: 'Escriu-me',
    experienceHeading: 'Experiència destacada',
    experienceCta: 'Veure experiència completa',
    experienceResultLabel: 'Resultat',
    cases: [
      {
        sector: 'Farmacèutica · Internacional',
        title: 'Sincronització delta d\'empleats',
        summary:
          'Vaig redissenyar una integració diària de SuccessFactors implementant tres modes de càrrega —bulk, delta i snapshot— per enviar només el que ha canviat.',
        result: 'En producció amb documentació tècnica mantinguda fins a la v1.6.',
        tags: ['SAP CI', 'SuccessFactors', 'Groovy'],
      },
      {
        sector: 'Telecomunicacions',
        title: 'Investigació de dessincronitzacions al LMS',
        summary:
          'Vaig analitzar el flux complet de sincronització de cursos i vaig identificar diverses causes arrel: finestra incremental incorrecta, filtre erroni i desajust d\'esquema.',
        result: '~2.650 de 2.667 registres amb títols duplicats descoberts.',
        tags: ['SAP CI', 'XSLT', 'SuccessFactors'],
      },
      {
        sector: 'DevOps · Intern',
        title: 'Pipelines CI/CD per a integracions SAP',
        summary:
          'Vaig desenvolupar dos workflows de GitHub Actions: un que verifica bones pràctiques automàticament i un altre que automatitza la migració entre entorns.',
        result: '2 pipelines en producció usats per l\'equip.',
        tags: ['GitHub Actions', 'SAP BTP', 'CI/CD'],
      },
    ],
  },
  footer: {
    madeWith: 'Fet amb Astro',
    rights: 'Yuna Espejo',
  },
  themeToggle: {
    light: 'Canviar a mode fosc',
    dark: 'Canviar a mode clar',
  },
  langSwitcher: {
    label: 'Idioma',
  },
};
