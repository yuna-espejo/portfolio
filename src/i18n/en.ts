import type { Translations } from './es';

export const en: Translations = {
  meta: {
    siteName: 'Yuna Espejo',
    homeTitle: 'Yuna Espejo — Software Developer',
    homeDescription:
      'Junior Consultant in Digital Integrations. I connect systems so data gets from one place to another complete, correct and on time.',
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
