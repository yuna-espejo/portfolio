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
  },
  experience: {
    heading: 'Experiència',
    intro:
      "Treballo com a Junior Consultant a l'equip de Digital Integrations de Timestamp Spain. Desenvolupo integracions per a processos de RRHH amb SAP Cloud Integration: obtinc dades de SuccessFactors, les transformo i valido, i les entrego al sistema destí. Participo en tot el cicle: anàlisi, desenvolupament, proves, desplegament i documentació.",
    contextLabel: 'Context',
    problemLabel: 'Problema',
    whatLabel: 'Què vaig fer',
    resultLabel: 'Resultat',
    tagsLabel: 'Stack',
    otherWorksHeading: 'Altres treballs',
    cases: [
      {
        index: '01',
        sector: 'Farmacèutica · Internacional',
        title: 'Sincronització delta de personal',
        context:
          "Integració que sincronitza dades de personal des de SuccessFactors cap a un sistema intern del client. La càrrega completa diària consumia massa crides a l'API i no escalava.",
        problem:
          "L'arquitectura de càrrega completa enviava tots els registres cada dia sense distingir què havia canviat, cosa que generava una càrrega innecessària i dificultava la monitorització.",
        what:
          "Vaig depurar la integració a fons i vaig dissenyar una arquitectura en tres modes: càrrega completa (bulk) per a l'arrencada inicial, incremental (delta) per al dia a dia enviant només els canvis, i snapshot per validar l'estat complet sense sobrecarregar. Vaig mantenir la documentació tècnica fins a la versió 1.6.",
        result:
          "En producció amb moltes menys crides diàries a l'API. La integració és ara més lleuera, més fàcil de monitoritzar i documentada perquè qualsevol persona de l'equip la pugui mantenir.",
        tags: ['SAP Cloud Integration', 'SuccessFactors', 'Groovy', 'SFTP'],
      },
      {
        index: '02',
        sector: 'Telecomunicacions',
        title: 'Investigació de dessincronitzacions al LMS',
        context:
          "Sincronització de cursos entre una plataforma d'aprenentatge i SuccessFactors. Cursos que no apareixien o no s'actualitzaven correctament a la plataforma destí.",
        problem:
          "L'equip no aconseguia reproduir els errors de forma consistent. El flux incloïa transformacions XSLT complexes i diversos filtres encadenats que dificultaven aïllar la causa.",
        what:
          "Vaig analitzar el flux complet i vaig identificar tres causes arrel: una finestra incremental de 7 dies que deixava registres fora del rang, un error en el filtre de cursos completats, i un desajust d'esquema en el flux de desassignació. Vaig ampliar la integració per reutilitzar identificadors existents en lloc de crear duplicats.",
        result:
          "Problema d'esquema resolt i casos afectats corregits. Com a troballa indirecta, vaig descobrir un problema de qualitat de dades al catàleg: ~2.650 de 2.667 elements tenien títols duplicats.",
        tags: ['SAP Cloud Integration', 'XSLT', 'SuccessFactors', 'Groovy'],
      },
      {
        index: '03',
        sector: 'Òptica · Retail',
        title: 'Disseny d\'integració en 7 fluxos SAP–CRM',
        context:
          "Connectar l'ERP d'un client del sector òptic amb el seu CRM. La integració havia de sincronitzar el catàleg complet de productes, clients, comandes i factures entre dos sistemes amb models de dades molt diferents.",
        problem:
          "L'API de destí tenia limitacions estrictes: upserts per identificador extern de màxim 30 caràcters i lots de màxim 200 registres. A més, les entitats tenien dependències que obligaven a respectar un ordre d'inserció.",
        what:
          "Vaig analitzar les dependències entre entitats i vaig dissenyar l'ordre de la integració en 7 fluxos encadenats: autenticació → clients → adreces d'enviament → famílies de producte → productes → comandes → factures. Vaig documentar les restriccions de l'API i vaig planificar l'execució per garantir que cada flux tingués disponibles les dades que necessitava.",
        result:
          "Planificació de ~60 dies d'integració amb dependències clares i sense ambigüitats des del primer dia. L'equip va poder començar el desenvolupament sense necessitat de replantejar l'arquitectura.",
        tags: ['SAP Cloud Integration', 'REST', 'JSON', 'Groovy'],
      },
      {
        index: '04',
        sector: 'DevOps · Intern',
        title: 'Pipelines CI/CD per a integracions SAP',
        context:
          "Durant les pràctiques, l'equip necessitava controlar la qualitat de les integracions i moure desenvolupaments entre entorns de forma fiable, sense passos manuals propensos a errors.",
        problem:
          "Els desplegaments entre entorns eren manuals i no hi havia cap procés automàtic per verificar que les integracions seguien les convencions de l'equip abans de pujar a producció.",
        what:
          "Vaig desenvolupar dos workflows de GitHub Actions: un que comprova automàticament les bones pràctiques de les integracions (nomenclatura, configuració, artefactes) i un altre que automatitza la migració d'integracions entre entorns de SAP BTP.",
        result:
          "2 pipelines en producció usats per l'equip. Els desplegaments són ara reproduïbles i la revisió de bones pràctiques es fa abans que el codi arribi a producció.",
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
    outsideHeading: 'Fora del codi',
    outsideItems: [
      {
        label: 'Fórmula 1',
        text: "Em fascina com la telemetria i els temps guien cada decisió estratègica en carrera. El software que hi ha darrere és el que més m'interessa.",
      },
      {
        label: '@yesa.exe',
        text: "Creo contingut tech a Instagram: curiositats, aprenentatges i coses del dia a dia de la indústria.",
        href: 'https://www.instagram.com/yesa.exe/',
      },
      {
        label: 'Lectures',
        text: "Estoicisme, principalment. Marc Aureli i Epicteto són lectures fixes. També assaig tècnic quan alguna cosa em crida l'atenció.",
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
        spec: 'Itinerari d\'Enginyeria del Software',
        school: 'UOC',
        period: 'set. 2026 – actualitat',
        inProgress: true,
      },
      {
        degree: 'CFGS Administració de Sistemes Informàtics en Xarxa',
        spec: 'Linux/Windows Server, Docker, scripting, xarxes, BBDD',
        school: 'IES Sa Palomera',
        period: '2024',
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
        name: '3r lloc — Campionat Nacional d\'Excel',
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
