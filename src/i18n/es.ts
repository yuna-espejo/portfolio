export const es = {
  meta: {
    siteName: 'Yuna Espejo',
    homeTitle: 'Yuna Espejo — Software Developer',
    homeDescription:
      'Junior Consultant en Digital Integrations. Conecto sistemas para que los datos lleguen completos, correctos y a tiempo.',
    experienceTitle: 'Experiencia — Yuna Espejo',
    experienceDescription:
      'Casos de integración reales: SuccessFactors, SAP Cloud Integration, GitHub Actions. Junior Consultant en Timestamp Spain.',
  },
  experience: {
    heading: 'Experiencia',
    intro:
      'Trabajo como Junior Consultant en el equipo de Digital Integrations de Timestamp Spain. Desarrollo integraciones para procesos de RRHH con SAP Cloud Integration: obtengo datos de SuccessFactors, los transformo y valido, y los entrego al sistema destino. Participo en todo el ciclo: análisis, desarrollo, pruebas, despliegue y documentación.',
    contextLabel: 'Contexto',
    problemLabel: 'Problema',
    whatLabel: 'Qué hice',
    resultLabel: 'Resultado',
    tagsLabel: 'Stack',
    otherWorksHeading: 'Otros trabajos',
    cases: [
      {
        index: '01',
        sector: 'Farmacéutica · Internacional',
        title: 'Sincronización delta de empleados',
        context:
          'Integración que sincroniza datos de empleados desde SuccessFactors hacia un sistema interno del cliente. La carga completa diaria consumía demasiadas llamadas a la API y no escalaba.',
        problem:
          'La arquitectura de carga completa enviaba todos los registros cada día sin distinguir qué había cambiado, lo que generaba una carga innecesaria y dificultaba la monitorización.',
        what:
          'Depuré la integración a fondo y diseñé una arquitectura en tres modos: carga completa (bulk) para el arranque inicial, incremental (delta) para el día a día enviando solo los cambios, y snapshot para validar el estado completo sin sobrecargar. Mantuve la documentación técnica hasta la versión 1.6.',
        result:
          'En producción con muchas menos llamadas diarias a la API. La integración es ahora más ligera, más fácil de monitorizar y está documentada de forma que cualquier persona del equipo puede mantenerla.',
        tags: ['SAP Cloud Integration', 'SuccessFactors', 'Groovy', 'SFTP'],
      },
      {
        index: '02',
        sector: 'Telecomunicaciones',
        title: 'Investigación de desincronizaciones en LMS',
        context:
          'Sincronización de cursos entre una plataforma de aprendizaje y SuccessFactors. Cursos que no aparecían o no se actualizaban correctamente en la plataforma destino.',
        problem:
          'El equipo no lograba reproducir los fallos de forma consistente. El flujo incluía transformaciones XSLT complejas y varios filtros encadenados que dificultaban aislar la causa.',
        what:
          'Analicé el flujo completo e identifiqué tres causas raíz: una ventana incremental de 7 días que dejaba registros fuera del rango, un error en el filtro de cursos completados, y un desajuste de esquema en el flujo de desasignación. Amplié la integración para reutilizar identificadores existentes en lugar de crear duplicados.',
        result:
          'Problema de esquema resuelto y casos afectados corregidos. Como resultado indirecto, descubrí un problema de calidad de datos en el catálogo: ~2.650 de 2.667 elementos tenían títulos duplicados.',
        tags: ['SAP Cloud Integration', 'XSLT', 'SuccessFactors', 'Groovy'],
      },
      {
        index: '03',
        sector: 'Óptica · Retail',
        title: 'Diseño de integración en 7 flujos SAP–CRM',
        context:
          'Conectar el ERP de un cliente del sector óptico con su CRM. La integración debía sincronizar el catálogo completo de productos, clientes, pedidos y facturas entre dos sistemas con modelos de datos muy distintos.',
        problem:
          'La API de destino tenía limitaciones estrictas: upserts por identificador externo de máximo 30 caracteres y lotes de máximo 200 registros. Además, las entidades tenían dependencias entre sí que obligaban a respetar un orden de inserción.',
        what:
          'Analicé las dependencias entre entidades y diseñé el orden de la integración en 7 flujos encadenados: autenticación → clientes → direcciones de envío → familias de producto → productos → pedidos → facturas. Documenté las restricciones de la API y planifiqué la ejecución para garantizar que cada flujo tuviera disponibles los datos que necesitaba.',
        result:
          'Planificación de ~60 días de integración con dependencias claras y sin ambigüedades desde el primer día. El equipo pudo empezar el desarrollo sin necesidad de replantear la arquitectura.',
        tags: ['SAP Cloud Integration', 'REST', 'JSON', 'Groovy'],
      },
      {
        index: '04',
        sector: 'DevOps · Interno',
        title: 'Pipelines CI/CD para integraciones SAP',
        context:
          'Durante las prácticas, el equipo necesitaba controlar la calidad de las integraciones y mover desarrollos entre entornos de forma fiable, sin pasos manuales propensos a errores.',
        problem:
          'Los despliegues entre entornos eran manuales y no había ningún proceso automático para verificar que las integraciones seguían las convenciones del equipo antes de subir a producción.',
        what:
          'Desarrollé dos workflows de GitHub Actions: uno que comprueba automáticamente las buenas prácticas de las integraciones (nomenclatura, configuración, artefactos) y otro que automatiza la migración de integraciones entre entornos de SAP BTP.',
        result:
          '2 pipelines en producción usados por el equipo. Los despliegues son ahora reproducibles y la revisión de buenas prácticas ocurre antes de que el código llegue a producción.',
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
    outsideHeading: 'Fuera del código',
    outsideItems: [
      {
        label: 'Fórmula 1',
        text: 'Me fascina cómo la telemetría y los tiempos guían cada decisión estratégica en carrera. El software detrás de todo eso es lo que más me interesa.',
      },
      {
        label: '@yesa.exe',
        text: 'Creo contenido tech en Instagram: curiosidades, aprendizajes y cosas del día a día en la industria.',
        href: 'https://www.instagram.com/yesa.exe/',
      },
      {
        label: 'Lecturas',
        text: 'Estoicismo, principalmente. Marco Aurelio y Epicteto son lecturas fijas. También ensayo técnico cuando algo me llama la atención.',
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
