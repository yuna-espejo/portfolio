import { site } from '../config/site';
import type { Translations } from './es';

export const ca: Translations = {
  meta: {
    siteName: 'Yuna Espejo',
    homeTitle: 'Yuna Espejo — Software Developer',
    homeDescription:
      'Junior Consultant en Digital Integrations. Connecto sistemes perquè les dades arribin completes, correctes i a temps.',
    experienceTitle: 'Experiència — Yuna Espejo',
    experienceDescription:
      "Casos d'integració reals: SuccessFactors, SAP Cloud Integration, GitHub Actions. Junior Consultant a Timestamp Spain.",
    aboutTitle: 'Sobre mi — Yuna Espejo',
    aboutDescription:
      "Junior Consultant en integracions SAP. Constant, documentadora i apassionada per la F1 i el backend.",
    cvTitle: 'CV — Yuna Espejo',
    cvDescription:
      'Currículum de Yuna Espejo: Junior Consultant en Digital Integrations, Timestamp Spain.',
    contactTitle: 'Contacte — Yuna Espejo',
    contactDescription:
      "Escriu-me un missatge o contacta per correu o LinkedIn.",
    projectsTitle: 'Projectes — Yuna Espejo',
    projectsDescription: 'Projectes personals de Yuna Espejo. Properament.',
  },
  experience: {
    heading: 'Experiència',
    intro:
      "Treballo com a Junior Consultant a l'equip de Digital Integrations de Timestamp Spain. Desenvolupo integracions per a processos de RRHH amb SAP Cloud Integration: obtinc dades de SuccessFactors, les transformo i valido, i les entrego al sistema destí. Participo en tot el cicle: anàlisi, desenvolupament, proves, desplegament i documentació.",
    taskLabel: 'Tasca',
    resultLabel: 'Resultat',
    tagsLabel: 'Stack',
    otherWorksHeading: 'Altres treballs',
    cases: [
      {
        index: '01',
        sector: 'Farmacèutica · Internacional',
        title: 'Sincronització delta de personal',
        task: "Redissenyar una integració diària que enviava totes les dades de personal cada dia, haguessin canviat o no.",
        result: "Nova càrrega en tres modes (completa, incremental i snapshot) perquè només viatgi el que canvia. Moltes menys crides a l'API [PENDENT: xifra], en producció i documentada.",
        tags: ['SAP Cloud Integration', 'SuccessFactors', 'Groovy', 'SFTP'],
      },
      {
        index: '02',
        sector: 'Telecomunicacions',
        title: 'Investigació de dessincronitzacions al LMS',
        task: "Esbrinar per què hi havia cursos que no es sincronitzaven entre una plataforma de formació i SuccessFactors.",
        result: "Tres causes arrel identificades i corregides (una finestra incremental incorrecta, un filtre erroni i un desajust d'esquema). A més, vaig destapar un problema de qualitat de dades: 2.650 de 2.667 títols duplicats.",
        tags: ['SAP Cloud Integration', 'XSLT', 'SuccessFactors', 'Groovy'],
      },
      {
        index: '03',
        sector: 'Òptica',
        title: "Disseny d'integració en 7 fluxos SAP–CRM",
        task: "Planificar una integració de 7 fluxos entre l'ERP i el CRM d'un client del sector òptic, amb una API de destí molt limitada.",
        result: "Ordre d'execució definit segons les dependències entre entitats i una planificació d'uns 60 dies, clara des del primer dia.",
        tags: ['SAP Cloud Integration', 'REST', 'JSON', 'Groovy'],
      },
      {
        index: '04',
        sector: 'DevOps · Intern',
        title: 'Pipelines CI/CD per a integracions SAP',
        task: "Automatitzar el control de qualitat de les integracions i la seva migració entre entorns.",
        result: "Dos workflows de GitHub Actions, un que revisa les bones pràctiques i un altre que automatitza la migració. [PENDENT: impacte]",
        tags: ['GitHub Actions', 'SAP BTP', 'SAP Cloud Integration', 'CI/CD'],
      },
    ],
    otherWorks: [
      "Migració completa d'una plataforma d'integracions de SAP Neo a Cloud Foundry: credencials, configuració de l'entorn, importació, verificació funcional i reconfiguració SFTP.",
      "Integracions del cicle de vida del personal per a una asseguradora: altes, baixes, canvis de dades i absències.",
      "Generació automatitzada de fitxers CSV (estàndard i xifrats amb PGP) amb dades de personal, executada diàriament amb crontab i versionada a Bitbucket.",
      "Sincronització de personal i convenis entre SuccessFactors i una plataforma de gestió de torns, executada cada 5 minuts.",
      "Servei en Node.js / SAP CAP que extreu documents de SuccessFactors, els comprimeix, els xifra amb PGP i els entrega per SFTP.",
      "Automatització de notificacions de reconeixement per antiguitat (5, 10, 15, 20+ anys) per a personal i direcció.",
    ],
  },
  about: {
    heading: 'Sobre mi',
    role: 'Junior Consultant · Digital Integrations',
    company: 'Timestamp Spain',
    companyPeriod: 'nov. 2025 – actualitat · jornada completa · Barcelona / remot',
    bio: "Desenvolupo integracions per a processos de recursos humans amb SAP Cloud Integration. Vaig començar com a becària en pràctiques sense conèixer SAP ni Groovy, i en acabar em van oferir un contracte perquè havia assimilat els conceptes ràpidament. Això resumeix bastant bé com treballo.",
    whatSetsApartHeading: 'El que em diferencia',
    traits: [
      {
        label: 'Constant',
        text: "Quan em centro en alguna cosa no paro fins que estigui ben feta, provada i documentada per a la persona següent.",
      },
      {
        label: 'Ordenada',
        text: "Documento el que faig i deixo les coses organitzades. No per perfeccionisme, sinó perquè sé el que costa trobar alguna cosa que no està ben explicada.",
      },
      {
        label: 'Aprenc ràpid',
        text: "En pocs mesos vaig passar de no conèixer SAP Cloud Integration a dur integracions de principi a fi per a clients internacionals.",
      },
      {
        label: 'Genero bon ambient',
        text: "No em costa preguntar ni proposar les meves pròpies teories. Les persones que han treballat amb mi diuen que mantinc el focus sense perdre l'humor.",
      },
    ],
    whyHeading: 'Per què backend i integracions',
    why: "Sempre m'ha interessat com funcionen les coses per dins, no només saber que funcionen. La fiabilitat és especialment important quan treballes amb dades sensibles com les dels empleats: un error no només trenca la integració, pot afectar persones reals.",
    f1Heading: 'Per què la F1',
    f1: "Em fascina com analitzen la telemetria i els temps per decidir una estratègia de pneumàtics o quan fer una parada. No és només velocitat: és prendre decisions sota pressió amb dades incompletes. M'interessa especialment el programari que fa possible veure i usar aquesta telemetria en temps real.",
    communityHeading: 'Comunitat',
    community: [
      {
        label: 'Rewriting the Code',
        text: "Membre d'aquesta comunitat de dones en tecnologia.",
        href: site.rewritingTheCode,
      },
      {
        label: '@yesa.exe',
        text: "Converteixo idees en projectes i comparteixo el procés: dades, enginyeria i aprendre en públic.",
        href: site.instagram,
      },
    ],
  },
  cv: {
    heading: 'CV',
    downloadLabel: 'Descarregar PDF',
    downloadNote: 'PDF actualitzat properament',
    experienceHeading: 'Experiència',
    educationHeading: 'Formació',
    certsHeading: 'Certificacions',
    languagesHeading: 'Idiomes',
    skillsHeading: 'Stack',
    jobs: [
      {
        title: 'Junior Consultant',
        company: 'Timestamp Spain (Timestamp Group)',
        period: 'nov. 2025 – actualitat',
        type: 'Mitja jornada · Barcelona / remot',
        bullets: [
          "Desenvolupament i manteniment d'integracions empresarials amb SAP Cloud Integration per a clients multinacionals.",
          'Cicle complet: disseny, desenvolupament en Groovy i JavaScript, proves, documentació i desplegament en producció.',
          "Migració completa d'un entorn d'integracions de SAP Neo a Cloud Foundry.",
          'Projectes per a clients de telecomunicacions, assegurances, farmàcia i gestió de personal.',
        ],
      },
      {
        title: 'SAP Integration Trainee',
        company: 'Timestamp Spain',
        period: 'mar. – oct. 2025',
        type: 'Pràctiques',
        bullets: [
          'Vaig desenvolupar dos workflows de GitHub Actions: comprovació automàtica de bones pràctiques i migració entre entorns.',
          'Integració del cicle de vida del personal (altes i baixes) amb sincronització entre plataformes.',
          "Validació d'integracions amb col·leccions de Postman i documentació tècnica.",
        ],
      },
      {
        title: 'IT Technician Intern',
        company: 'ClickTech (Erasmus+)',
        period: 'mar. – abr. 2024',
        type: 'Pràctiques Erasmus+ · Amarante, Portugal',
        bullets: [
          "Muntatge i configuració d'equips, servidors i dispositius de xarxa. Resolució d'incidències i proves de connectivitat.",
        ],
      },
      {
        title: 'Marketing & Social Media Intern',
        company: 'Grupo Actialia',
        period: 'oct. 2023 – gen. 2024',
        type: 'Pràctiques',
        bullets: [
          "Creació i gestió de xarxes socials i incorporació de nous membres de l'equip.",
        ],
      },
    ],
    languages: [
      { lang: 'Espanyol', level: 'Natiu' },
      { lang: 'Anglès', level: 'A2 certificat (Cambridge), en formació activa' },
      { lang: 'Portuguès', level: 'Bàsic' },
    ],
  },
  contact: {
    heading: 'Parlem',
    intro: "Oberta a conversar sobre integracions, backend i dades.",
    emailLabel: 'Correu directe',
    formHeading: "O escriu-me aquí",
    namePlaceholder: 'El teu nom',
    emailPlaceholder: 'El teu correu',
    messagePlaceholder: 'El teu missatge',
    submitLabel: 'Enviar missatge',
    successMessage: "Missatge rebut. Et responc tan aviat com pugui.",
    errorMessage:
      "Alguna cosa ha anat malament. Prova d'escriure'm directament a y.espejo.santana@gmail.com",
    nameLabel: 'Nom',
    emailFieldLabel: 'Correu',
    messageLabel: 'Missatge',
  },
  projects: {
    heading: 'Projectes',
    empty: "Res publicat encara. Només es publiquen projectes acabats.",
    circuitSim: {
      title: 'Simulació del Circuit de Barcelona-Catalunya',
      description: 'Simulació interactiva del circuit amb velocitat basada en curvatura. Canvas API + requestAnimationFrame.',
      tagline: '[TEXT DE YUNA: per què vas construir això? Una o dues frases en primera persona.]',
      howItWorksHeading: 'Com calcula la velocitat',
      howItWorks: '[TEXT DE YUNA: explica l\'algorisme de curvatura amb les teves pròpies paraules.]',
      techHeading: 'Tecnologies',
      tech: ['Canvas API', 'requestAnimationFrame', 'IntersectionObserver', 'CSS custom properties', 'JavaScript vanilla'],
      backLabel: 'Tornar a projectes',
    },
  },
  nav: {
    experience: 'Experiència',
    projects: 'Projectes',
    about: 'Sobre mi',
    cv: 'CV',
    contact: 'Contacte',
  },
  home: {
    role: "Junior Consultant · Digital Integrations — Estudiant d'Enginyeria Informàtica (UOC)",
    headline:
      "Connecto sistemes perquè les dades arribin d'un lloc a un altre completes, correctes i a temps. El que m'enganxa és veure com es transformen pel camí.",
    ctaLinkedIn: 'LinkedIn',
    ctaGitHub: 'GitHub',
    ctaEmail: 'Escriu-me',
    outsideHeading: 'Més enllà del codi',
    outsideItems: [
      {
        label: 'Fórmula 1',
        text: "Em fascina com la telemetria i els temps guien cada decisió estratègica en carrera. El software que hi ha darrere és el que més m'interessa.",
      },
      {
        label: '@yesa.exe',
        text: 'Converteixo idees en projectes i comparteixo el procés: dades, enginyeria i aprendre en públic.',
        href: site.instagram,
      },
      {
        label: 'Rewriting the Code',
        text: "Formo part de Rewriting the Code, una comunitat de dones en tecnologia.",
        href: site.rewritingTheCode,
      },
    ],
    contactHeading: 'Parlem',
    contactTagline: 'Oberta a conversar sobre integracions, backend i dades.',
    contactEmail: "Escriu-me un correu",
    contactForm: 'Formulari de contacte',
    educationHeading: 'Formació i certificacions',
    educationSubheading: 'Formació',
    certsSubheading: 'Certificacions',
    statusInProgress: 'En curs',
    statusCompleted: 'Completat',
    education: [
      {
        degree: 'Grau en Enginyeria Informàtica',
        spec: "Itinerari d'Enginyeria del Software",
        school: 'UOC',
        period: 'set. 2026 – actualitat',
        inProgress: true,
      },
      {
        degree: 'CFGS Administració de Sistemes Informàtics en Xarxa',
        spec: 'Linux/Windows Server, Docker, scripting, xarxes, BBDD',
        school: 'IES Sa Palomera',
        period: '2024 – 2026',
        inProgress: false,
      },
      {
        degree: 'CFGM Sistemes Microinformàtics i Xarxes',
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
        name: "3r lloc — Campionat Nacional d'Excel",
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
      integration: 'Integració',
      languages: 'Llenguatges',
      formats: 'Formats i protocols',
      devops: 'DevOps i eines',
      data: 'Dades',
    },
    featuredProjectHeading: 'Projecte destacat',
    featuredProjectTitle: 'Simulació del Circuit de Barcelona-Catalunya',
    featuredProjectDesc: 'Dos cotxes volten pel circuit de Montmeló. La velocitat es calcula en temps real a partir de la curvatura de cada punt del traçat.',
    featuredProjectLink: 'Veure el projecte',
    experienceHeading: 'Experiència destacada',
    experienceCta: 'Veure experiència completa',
    experienceResultLabel: 'Resultat',
    cases: [
      {
        sector: 'Farmacèutica · Internacional',
        title: "Sincronització delta d'empleats",
        summary:
          "Redissenyar una integració diària que enviava totes les dades de personal cada dia, haguessin canviat o no.",
        result: "Nova càrrega en tres modes perquè només viatgi el que canvia. [PENDENT: xifra API]. En producció i documentada.",
        tags: ['SAP Cloud Integration', 'SuccessFactors', 'Groovy'],
      },
      {
        sector: 'Telecomunicacions',
        title: 'Investigació de dessincronitzacions al LMS',
        summary:
          "Esbrinar per què hi havia cursos que no es sincronitzaven entre una plataforma de formació i SuccessFactors.",
        result: "Tres causes arrel corregides. Un problema de qualitat de dades: 2.650 de 2.667 títols duplicats.",
        tags: ['SAP Cloud Integration', 'XSLT', 'SuccessFactors'],
      },
      {
        sector: 'DevOps · Intern',
        title: 'Pipelines CI/CD per a integracions SAP',
        summary:
          "Automatitzar el control de qualitat de les integracions i la seva migració entre entorns.",
        result: "Dos workflows de GitHub Actions: un revisa bones pràctiques, l'altre automatitza la migració. [PENDENT: impacte]",
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
