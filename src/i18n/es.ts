import { site } from '../config/site';
export const es = {
  meta: {
    siteName: 'Yuna Espejo',
    homeTitle: 'Yuna Espejo — Software Developer',
    homeDescription:
      'Junior Consultant en Digital Integrations. Conecto sistemas para que los datos lleguen completos, correctos y a tiempo.',
    experienceTitle: 'Experiencia — Yuna Espejo',
    experienceDescription:
      'Casos de integración reales: SuccessFactors, SAP Cloud Integration, GitHub Actions. Junior Consultant en Timestamp Spain.',
    aboutTitle: 'Sobre mí — Yuna Espejo',
    aboutDescription:
      'Junior Consultant en integraciones SAP. Constante, documentadora y apasionada por la F1 y el backend.',
    cvTitle: 'CV — Yuna Espejo',
    cvDescription:
      'Currículum de Yuna Espejo: Junior Consultant en Digital Integrations, Timestamp Spain.',
    contactTitle: 'Contacto — Yuna Espejo',
    contactDescription:
      'Escríbeme un mensaje o contacta por email o LinkedIn.',
    projectsTitle: 'Proyectos — Yuna Espejo',
    projectsDescription: 'Proyectos personales de Yuna Espejo. Próximamente.',
  },
  experience: {
    heading: 'Experiencia',
    intro:
      'Trabajo como Junior Consultant en el equipo de Digital Integrations de Timestamp Spain. Desarrollo integraciones para procesos de RRHH con SAP Cloud Integration: obtengo datos de SuccessFactors, los transformo y valido, y los entrego al sistema destino. Participo en todo el ciclo: análisis, desarrollo, pruebas, despliegue y documentación.',
    taskLabel: 'Tarea',
    resultLabel: 'Resultado',
    tagsLabel: 'Stack',
    otherWorksHeading: 'Otros trabajos',
    cases: [
      {
        index: '01',
        sector: 'Farmacéutica · Internacional',
        title: 'Sincronización delta de empleados',
        task: 'Rediseñar una integración diaria que enviaba todos los datos de empleados cada día, hubieran cambiado o no.',
        result: 'Nueva carga en tres modos (completa, incremental y snapshot) para que solo viaje lo que cambia. Muchas menos llamadas a la API [PENDIENTE: cifra], en producción y documentada.',
        tags: ['SAP Cloud Integration', 'SuccessFactors', 'Groovy', 'SFTP'],
      },
      {
        index: '02',
        sector: 'Telecomunicaciones',
        title: 'Investigación de desincronizaciones en LMS',
        task: 'Averiguar por qué había cursos que no se sincronizaban entre una plataforma de formación y SuccessFactors.',
        result: 'Tres causas raíz identificadas y corregidas (una ventana incremental incorrecta, un filtro erróneo y un desajuste de esquema). Además, destapé un problema de calidad de datos: 2.650 de 2.667 títulos duplicados.',
        tags: ['SAP Cloud Integration', 'XSLT', 'SuccessFactors', 'Groovy'],
      },
      {
        index: '03',
        sector: 'Óptica',
        title: 'Diseño de integración en 7 flujos SAP–CRM',
        task: 'Planificar una integración de 7 flujos entre el ERP y el CRM de un cliente del sector óptico, con una API de destino muy limitada.',
        result: 'Orden de ejecución definido según las dependencias entre entidades y una planificación de unos 60 días, clara desde el primer día.',
        tags: ['SAP Cloud Integration', 'REST', 'JSON', 'Groovy'],
      },
      {
        index: '04',
        sector: 'DevOps · Interno',
        title: 'Pipelines CI/CD para integraciones SAP',
        task: 'Automatizar el control de calidad de las integraciones y su migración entre entornos.',
        result: 'Dos workflows de GitHub Actions, uno que revisa las buenas prácticas y otro que automatiza la migración. [PENDIENTE: impacto]',
        tags: ['GitHub Actions', 'SAP BTP', 'SAP Cloud Integration', 'CI/CD'],
      },
    ],
    otherWorks: [
      'Migración completa de una plataforma de integraciones de SAP Neo a Cloud Foundry: credenciales, configuración del entorno, importación, verificación funcional y reconfiguración SFTP.',
      'Integraciones del ciclo de vida del empleado para una aseguradora: altas, bajas, cambios de datos y ausencias.',
      'Generación automatizada de ficheros CSV (estándar y cifrados con PGP) con datos de empleados, ejecutada a diario con crontab y versionada en Bitbucket.',
      'Sincronización de empleados y convenios entre SuccessFactors y una plataforma de gestión de turnos, ejecutada cada 5 minutos.',
      'Servicio en Node.js / SAP CAP que extrae documentos de SuccessFactors, los comprime, los cifra con PGP y los entrega por SFTP.',
      'Automatización de notificaciones de reconocimiento por antigüedad (5, 10, 15, 20+ años) para empleados y dirección.',
    ],
  },
  about: {
    heading: 'Sobre mí',
    role: 'Junior Consultant · Digital Integrations',
    company: 'Timestamp Spain',
    companyPeriod: 'nov. 2025 – actualidad · jornada completa · Barcelona / remoto',
    bio: 'Desarrollo integraciones para procesos de recursos humanos con SAP Cloud Integration. Empecé como becaria en prácticas sin conocer SAP ni Groovy, y al acabar me ofrecieron un contrato porque había asimilado los conceptos rápido. Eso resume bastante bien cómo trabajo.',
    whatSetsApartHeading: 'Lo que me diferencia',
    traits: [
      {
        label: 'Constante',
        text: 'Cuando me centro en algo no paro hasta tenerlo bien hecho, probado y documentado para la siguiente persona.',
      },
      {
        label: 'Ordenada',
        text: 'Documento lo que hago y dejo las cosas organizadas. No por perfeccionismo, sino porque sé lo que cuesta encontrar algo que no está bien explicado.',
      },
      {
        label: 'Aprendo rápido',
        text: 'En pocos meses pasé de no conocer SAP Cloud Integration a llevar integraciones de principio a fin para clientes internacionales.',
      },
      {
        label: 'Genero buen ambiente',
        text: 'No me cuesta preguntar ni proponer mis propias teorías. Quienes han trabajado conmigo dicen que mantengo el foco sin perder el humor.',
      },
    ],
    whyHeading: 'Por qué backend e integraciones',
    why: 'Siempre me ha interesado cómo funcionan las cosas por dentro, no solo saber que funcionan. La fiabilidad es especialmente importante cuando trabajas con datos sensibles como los de empleados: un error no solo rompe la integración, puede afectar a personas reales.',
    f1Heading: 'Por qué la F1',
    f1: 'Me fascina cómo analizan la telemetría y los tiempos para decidir una estrategia de neumáticos o cuándo hacer una parada. No es solo velocidad: es tomar decisiones bajo presión con datos incompletos. Me interesa especialmente el software que hace posible ver y usar esa telemetría en tiempo real.',
    communityHeading: 'Comunidad',
    community: [
      {
        label: 'Rewriting the Code',
        text: 'Miembro de esta comunidad de mujeres en tecnología.',
        href: site.rewritingTheCode,
      },
      {
        label: '@yesa.exe',
        text: 'Convierto ideas en proyectos y comparto el proceso: datos, ingeniería y aprender en público.',
        href: site.instagram,
      },
    ],
  },
  cv: {
    heading: 'CV',
    downloadLabel: 'Descargar PDF',
    downloadNote: 'PDF actualizado próximamente',
    experienceHeading: 'Experiencia',
    educationHeading: 'Formación',
    certsHeading: 'Certificaciones',
    languagesHeading: 'Idiomas',
    skillsHeading: 'Stack',
    jobs: [
      {
        title: 'Junior Consultant',
        company: 'Timestamp Spain (Timestamp Group)',
        period: 'nov. 2025 – actualidad',
        type: 'Media jornada · Barcelona / remoto',
        bullets: [
          'Desarrollo y mantenimiento de integraciones empresariales con SAP Cloud Integration para clientes multinacionales.',
          'Ciclo completo: diseño, desarrollo en Groovy y JavaScript, pruebas, documentación y despliegue en producción.',
          'Migración completa de un entorno de integraciones de SAP Neo a Cloud Foundry.',
          'Proyectos para clientes de telecomunicaciones, seguros, farmacia y gestión de personal.',
        ],
      },
      {
        title: 'SAP Integration Trainee',
        company: 'Timestamp Spain',
        period: 'mar. – oct. 2025',
        type: 'Prácticas',
        bullets: [
          'Desarrollé dos workflows de GitHub Actions: comprobación automática de buenas prácticas y migración entre entornos.',
          'Integración del ciclo de vida del empleado (altas y bajas) con sincronización entre plataformas.',
          'Validación de integraciones con colecciones de Postman y documentación técnica.',
        ],
      },
      {
        title: 'IT Technician Intern',
        company: 'ClickTech (Erasmus+)',
        period: 'mar. – abr. 2024',
        type: 'Prácticas Erasmus+ · Amarante, Portugal',
        bullets: [
          'Montaje y configuración de equipos, servidores y dispositivos de red. Resolución de incidencias y pruebas de conectividad.',
        ],
      },
      {
        title: 'Marketing & Social Media Intern',
        company: 'Grupo Actialia',
        period: 'oct. 2023 – ene. 2024',
        type: 'Prácticas',
        bullets: [
          'Creación y gestión de redes sociales e incorporación de nuevos miembros del equipo.',
        ],
      },
    ],
    languages: [
      { lang: 'Español', level: 'Nativo' },
      { lang: 'Inglés', level: 'A2 certificado (Cambridge), en formación activa' },
      { lang: 'Portugués', level: 'Básico' },
    ],
  },
  contact: {
    heading: 'Hablamos',
    intro: 'Abierta a conversar sobre integraciones, backend y datos.',
    emailLabel: 'Email directo',
    formHeading: 'O escríbeme aquí',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'Tu email',
    messagePlaceholder: 'Tu mensaje',
    submitLabel: 'Enviar mensaje',
    successMessage: 'Mensaje recibido. Te respondo en cuanto pueda.',
    errorMessage:
      'Algo ha ido mal. Prueba a escribirme directamente a y.espejo.santana@gmail.com',
    nameLabel: 'Nombre',
    emailFieldLabel: 'Email',
    messageLabel: 'Mensaje',
  },
  projects: {
    heading: 'Proyectos',
    empty: 'Nada publicado aún. Solo se publican proyectos terminados.',
    circuitSim: {
      title: 'Simulación del Circuito de Barcelona-Catalunya',
      description: 'Simulación interactiva del circuito con velocidad basada en curvatura. Canvas API + requestAnimationFrame.',
      tagline: '[TEXTO DE YUNA: ¿por qué construiste esto? Una o dos frases en primera persona.]',
      howItWorksHeading: 'Cómo calcula la velocidad',
      howItWorks: '[TEXTO DE YUNA: explica el algoritmo de curvatura en tus propias palabras. Puedes decir algo como: el coche lee la diferencia de ángulo 15 unidades antes y después de su posición, y eso le da la curvatura. A más curvatura, menos velocidad.]',
      techHeading: 'Tecnologías',
      tech: ['Canvas API', 'requestAnimationFrame', 'IntersectionObserver', 'CSS custom properties', 'JavaScript vanilla'],
      backLabel: 'Volver a proyectos',
    },
  },
  nav: {
    experience: 'Experiencia',
    projects: 'Proyectos',
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
    outsideHeading: 'Más allá del código',
    outsideItems: [
      {
        label: 'Fórmula 1',
        text: 'Me fascina cómo la telemetría y los tiempos guían cada decisión estratégica en carrera. El software detrás de todo eso es lo que más me interesa.',
      },
      {
        label: '@yesa.exe',
        text: 'Convierto ideas en proyectos y comparto el proceso: datos, ingeniería y aprender en público.',
        href: site.instagram,
      },
      {
        label: 'Rewriting the Code',
        text: 'Formo parte de Rewriting the Code, una comunidad de mujeres en tecnología.',
        href: site.rewritingTheCode,
      },
    ],
    contactHeading: 'Hablamos',
    contactTagline: 'Abierta a conversar sobre integraciones, backend y datos.',
    contactEmail: 'Escríbeme un email',
    contactForm: 'Formulario de contacto',
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
        period: '2024 – 2026',
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
    featuredProjectHeading: 'Proyecto destacado',
    featuredProjectTitle: 'Simulación del Circuito de Barcelona-Catalunya',
    featuredProjectDesc: 'Dos coches compiten en el circuito de Montmeló. La velocidad se calcula en tiempo real a partir de la curvatura de cada punto del trazado.',
    featuredProjectLink: 'Ver el proyecto',
    experienceHeading: 'Experiencia destacada',
    experienceCta: 'Ver experiencia completa',
    experienceResultLabel: 'Resultado',
    cases: [
      {
        sector: 'Farmacéutica · Internacional',
        title: 'Sincronización delta de empleados',
        summary:
          'Rediseñar una integración diaria que enviaba todos los datos de empleados cada día, hubieran cambiado o no.',
        result: 'Nueva carga en tres modos para que solo viaje lo que cambia. [PENDIENTE: cifra API]. En producción y documentada.',
        tags: ['SAP Cloud Integration', 'SuccessFactors', 'Groovy'],
      },
      {
        sector: 'Telecomunicaciones',
        title: 'Investigación de desincronizaciones en LMS',
        summary:
          'Averiguar por qué había cursos que no se sincronizaban entre una plataforma de formación y SuccessFactors.',
        result: 'Tres causas raíz corregidas. Un problema de calidad de datos: 2.650 de 2.667 títulos duplicados.',
        tags: ['SAP Cloud Integration', 'XSLT', 'SuccessFactors'],
      },
      {
        sector: 'DevOps · Interno',
        title: 'Pipelines CI/CD para integraciones SAP',
        summary:
          'Automatizar el control de calidad de las integraciones y su migración entre entornos.',
        result: 'Dos workflows de GitHub Actions: uno revisa buenas prácticas, otro automatiza la migración. [PENDIENTE: impacto]',
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
