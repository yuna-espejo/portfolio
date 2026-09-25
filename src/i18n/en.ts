import type { Translations } from './es';

export const en: Translations = {
  meta: {
    siteName: 'Yuna Espejo',
    homeTitle: 'Yuna Espejo — Software Developer',
    homeDescription:
      'Junior Consultant in Digital Integrations. I connect systems so data gets from one place to another complete, correct and on time.',
    experienceTitle: 'Experience — Yuna Espejo',
    experienceDescription:
      'Real integration case studies: SuccessFactors, SAP Cloud Integration, GitHub Actions. Junior Consultant at Timestamp Spain.',
  },
  experience: {
    heading: 'Experience',
    intro:
      'I work as a Junior Consultant on the Digital Integrations team at Timestamp Spain. I build integrations for HR processes using SAP Cloud Integration: I pull data from SuccessFactors, transform and validate it, and deliver it to the target system. I take part in the full cycle: analysis, development, testing, deployment and documentation.',
    contextLabel: 'Context',
    problemLabel: 'Problem',
    whatLabel: 'What I did',
    resultLabel: 'Result',
    tagsLabel: 'Stack',
    otherWorksHeading: 'Other work',
    cases: [
      {
        index: '01',
        sector: 'Pharma · International',
        title: 'Employee delta sync',
        context:
          'Integration that syncs employee data from SuccessFactors to a client internal system. The daily full load was consuming too many API calls and did not scale.',
        problem:
          'The full-load architecture sent every record every day regardless of what had changed, creating unnecessary load and making monitoring difficult.',
        what:
          'I debugged the integration thoroughly and designed a three-mode architecture: full load (bulk) for the initial run, incremental (delta) for the day-to-day sending only changes, and snapshot to validate the full state without overloading. I maintained the technical documentation through version 1.6.',
        result:
          'In production with significantly fewer daily API calls. The integration is now lighter, easier to monitor, and documented so that anyone on the team can maintain it.',
        tags: ['SAP Cloud Integration', 'SuccessFactors', 'Groovy', 'SFTP'],
      },
      {
        index: '02',
        sector: 'Telecom',
        title: 'LMS desync investigation',
        context:
          'Course sync between a learning platform and SuccessFactors. Courses were not appearing or updating correctly in the target platform.',
        problem:
          'The team could not reproduce the failures consistently. The flow included complex XSLT transformations and several chained filters that made isolating the cause difficult.',
        what:
          'I analysed the full flow and identified three root causes: a 7-day incremental window that left records out of range, a bug in the completed-courses filter, and a schema mismatch in the unassignment flow. I extended the integration to reuse existing identifiers instead of creating duplicates.',
        result:
          'Schema problem fixed and affected cases corrected. As a side finding, I uncovered a data quality issue in the catalogue: ~2,650 out of 2,667 items had duplicate titles.',
        tags: ['SAP Cloud Integration', 'XSLT', 'SuccessFactors', 'Groovy'],
      },
      {
        index: '03',
        sector: 'Optical · Retail',
        title: '7-flow SAP–CRM integration design',
        context:
          'Connecting a client ERP in the optical retail sector to their CRM. The integration needed to sync the full product catalogue, customers, orders and invoices between two systems with very different data models.',
        problem:
          "The target API had strict limitations: upserts by external identifier capped at 30 characters and batches of at most 200 records. Entities also had dependencies that required a specific insertion order.",
        what:
          'I mapped the entity dependencies and designed the integration as 7 chained flows: auth → customers → shipping addresses → product families → products → orders → invoices. I documented the API constraints and planned execution to ensure each flow had the data it needed available.',
        result:
          'A ~60-day integration plan with clear dependencies and no ambiguity from day one. The team could start development without having to rethink the architecture.',
        tags: ['SAP Cloud Integration', 'REST', 'JSON', 'Groovy'],
      },
      {
        index: '04',
        sector: 'DevOps · Internal',
        title: 'CI/CD pipelines for SAP integrations',
        context:
          'During my internship, the team needed to control integration quality and move builds between environments reliably, without manual error-prone steps.',
        problem:
          'Environment deployments were manual and there was no automated process to verify that integrations followed team conventions before going to production.',
        what:
          'I built two GitHub Actions workflows: one that automatically checks integration best practices (naming, configuration, artefacts) and one that automates migration of integrations between SAP BTP environments.',
        result:
          '2 pipelines in production used by the team. Deployments are now reproducible and best-practice review happens before code reaches production.',
        tags: ['GitHub Actions', 'SAP BTP', 'SAP Cloud Integration', 'CI/CD'],
      },
    ],
    otherWorks: [
      'Full platform migration from SAP Neo to Cloud Foundry: credentials, environment setup, import, functional verification and SFTP reconfiguration.',
      'Employee lifecycle integrations for an insurance company: onboarding, offboarding, data changes and absences.',
      'Automated generation of CSV files (standard and PGP-encrypted) with employee data, run daily via crontab and versioned in Bitbucket.',
      'Employee and agreement sync between SuccessFactors and a shift management platform, running every 5 minutes.',
      'Node.js / SAP CAP service that extracts documents from SuccessFactors, compresses them, encrypts them with PGP and delivers them via SFTP.',
      'Automated seniority recognition notifications (5, 10, 15, 20+ years) for employees and management.',
    ],
  },
  nav: {
    experience: 'Experience',
    about: 'About',
    cv: 'CV',
    contact: 'Contact',
  },
  home: {
    role: 'Junior Consultant · Digital Integrations — Software Engineering student (UOC)',
    headline:
      'I connect systems so data gets from one place to another complete, correct and on time. What hooks me is watching it transform along the way.',
    ctaLinkedIn: 'LinkedIn',
    ctaGitHub: 'GitHub',
    ctaEmail: 'Email me',
    outsideHeading: 'Outside the code',
    outsideItems: [
      {
        label: 'Formula 1',
        text: "I'm fascinated by how telemetry and lap times drive every strategic call during a race. The software behind all of it is what interests me most.",
      },
      {
        label: '@yesa.exe',
        text: 'I create tech content on Instagram: curiosities, learnings and day-to-day things from the industry.',
        href: 'https://www.instagram.com/yesa.exe/',
      },
      {
        label: 'Reading',
        text: 'Stoicism, mostly. Marcus Aurelius and Epictetus are regulars. Also technical essays when something catches my eye.',
      },
    ],
    contactHeading: "Let's talk",
    contactTagline: 'Open to conversations about integrations, backend and data.',
    contactEmail: 'Send me an email',
    contactForm: 'Contact form',
    educationHeading: 'Education & certifications',
    educationSubheading: 'Education',
    certsSubheading: 'Certifications',
    statusInProgress: 'In progress',
    statusCompleted: 'Completed',
    education: [
      {
        degree: "Bachelor's in Computer Engineering",
        spec: 'Software Engineering track',
        school: 'UOC',
        period: 'Sep. 2026 – present',
        inProgress: true,
      },
      {
        degree: 'Higher Technician in Network Systems Administration',
        spec: 'Linux/Windows Server, Docker, scripting, networking, databases',
        school: 'IES Sa Palomera',
        period: '2024',
        inProgress: false,
      },
      {
        degree: 'Technician in Microcomputer Systems and Networks',
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
        name: '3rd place — National Excel Championship',
        issuer: 'PUE Academy',
        year: 'Jun. 2025',
      },
      {
        name: 'Microsoft Office Specialist',
        detail: 'Excel Associate · Word Expert',
        issuer: 'Microsoft',
        year: '',
      },
    ],
    stackHeading: 'Real stack',
    stackCategories: {
      integration: 'Integration',
      languages: 'Languages',
      formats: 'Formats & protocols',
      devops: 'DevOps & tools',
      data: 'Data',
    },
    experienceHeading: 'Featured experience',
    experienceCta: 'See full experience',
    experienceResultLabel: 'Result',
    cases: [
      {
        sector: 'Pharma · International',
        title: 'Employee delta sync',
        summary:
          'Redesigned a daily SuccessFactors integration by implementing three load modes —bulk, delta, and snapshot— to send only what has changed.',
        result: 'In production with technical documentation maintained through v1.6.',
        tags: ['SAP CI', 'SuccessFactors', 'Groovy'],
      },
      {
        sector: 'Telecom',
        title: 'LMS desync investigation',
        summary:
          'Analysed the full course sync flow and identified multiple root causes: incorrect incremental window, wrong filter, and schema mismatch.',
        result: '~2,650 out of 2,667 records with duplicate titles uncovered.',
        tags: ['SAP CI', 'XSLT', 'SuccessFactors'],
      },
      {
        sector: 'DevOps · Internal',
        title: 'CI/CD pipelines for SAP integrations',
        summary:
          'Built two GitHub Actions workflows: one that automatically checks integration best practices, one that automates environment migration.',
        result: '2 pipelines in production, used by the team.',
        tags: ['GitHub Actions', 'SAP BTP', 'CI/CD'],
      },
    ],
  },
  footer: {
    madeWith: 'Built with Astro',
    rights: 'Yuna Espejo',
  },
  themeToggle: {
    light: 'Switch to dark mode',
    dark: 'Switch to light mode',
  },
  langSwitcher: {
    label: 'Language',
  },
};
