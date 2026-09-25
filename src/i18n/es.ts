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
    educationHeading: 'Formación y certificaciones',
    educationSubheading: 'Formación',
    certsSubheading: 'Certificaciones',
    statusInProgress: 'En curso',
    statusCompleted: 'Completado',
    education: [
      {
        degree: 'Grado en Ingeniería Informática',
        spec: 'Itinerario de Ingeniería del Software',
        school: 'UOC',
        period: 'sep. 2026 – actualidad',
        inProgress: true,
      },
      {
        degree: 'CFGS Administración de Sistemas Informáticos en Red',
        spec: 'Linux/Windows Server, Docker, scripting, redes, BBDD',
        school: 'IES Sa Palomera',
        period: '2024',
        inProgress: false,
      },
      {
        degree: 'CFGM Sistemas Microinformáticos y Redes',
        spec: '',
        school: 'IES Sa Palomera',
        period: '2021 – 2024',
        inProgress: false,
      },
    ],
    certifications: [
      {
        name: 'Discovering SAP Business Technology Platform',
        issuer: 'SAP · Record of Achievement',
        year: '2025',
      },
      {
        name: '3.er puesto — Campeonato Nacional de Excel',
        issuer: 'PUE Academy',
        year: 'jun. 2025',
      },
      {
        name: 'Microsoft Office Specialist',
        detail: 'Excel Associate · Word Expert',
        issuer: 'Microsoft',
        year: '',
      },
    ],
    stackHeading: 'Stack real',
    stackCategories: {
      integration: 'Integración',
      languages: 'Lenguajes',
      formats: 'Formatos y protocolos',
      devops: 'DevOps y herramientas',
      data: 'Datos',
    },
    experienceHeading: 'Experiencia destacada',
    experienceCta: 'Ver experiencia completa',
    experienceResultLabel: 'Resultado',
    cases: [
      {
        sector: 'Farmacéutica · Internacional',
        title: 'Sincronización delta de empleados',
        summary:
          'Rediseñé una integración diaria de SuccessFactors implementando tres modos de carga —bulk, delta y snapshot— para enviar solo lo que ha cambiado.',
        result: 'En producción con documentación técnica mantenida hasta la v1.6.',
        tags: ['SAP CI', 'SuccessFactors', 'Groovy'],
      },
      {
        sector: 'Telecomunicaciones',
        title: 'Investigación de desincronizaciones en LMS',
        summary:
          'Analicé el flujo completo de sincronización de cursos e identifiqué varias causas raíz: ventana incremental incorrecta, filtro erróneo y desajuste de esquema.',
        result: '~2.650 de 2.667 registros con títulos duplicados descubiertos.',
        tags: ['SAP CI', 'XSLT', 'SuccessFactors'],
      },
      {
        sector: 'DevOps · Interno',
        title: 'Pipelines CI/CD para integraciones SAP',
        summary:
          'Desarrollé dos workflows de GitHub Actions: uno que verifica buenas prácticas automáticamente y otro que automatiza la migración entre entornos.',
        result: '2 pipelines en producción usados por el equipo.',
        tags: ['GitHub Actions', 'SAP BTP', 'CI/CD'],
      },
    ],
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
