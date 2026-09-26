import { site } from '../config/site';
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
    aboutTitle: 'About — Yuna Espejo',
    aboutDescription:
      'Junior SAP integration consultant. Consistent, thorough, and passionate about F1 and backend.',
    cvTitle: 'CV — Yuna Espejo',
    cvDescription:
      'CV of Yuna Espejo: Junior Consultant in Digital Integrations, Timestamp Spain.',
    contactTitle: 'Contact — Yuna Espejo',
    contactDescription:
      'Send me a message or reach out via email or LinkedIn.',
    projectsTitle: 'Projects — Yuna Espejo',
    projectsDescription: "Personal projects by Yuna Espejo. Coming soon.",
  },
  experience: {
    heading: 'Experience',
    intro:
      'I work as a Junior Consultant on the Digital Integrations team at Timestamp Spain. I build integrations for HR processes using SAP Cloud Integration: I pull data from SuccessFactors, transform and validate it, and deliver it to the target system. I take part in the full cycle: analysis, development, testing, deployment and documentation.',
    taskLabel: 'Task',
    resultLabel: 'Result',
    tagsLabel: 'Stack',
    otherWorksHeading: 'Other work',
    cases: [
      {
        index: '01',
        sector: 'Pharma · International',
        title: 'Employee delta sync',
        task: 'Redesign a daily integration that sent all employee data every day regardless of what had changed.',
        result: 'New three-mode load (full, incremental and snapshot) so only changes are transferred. Significantly fewer API calls [PENDING: figure], in production and documented.',
        tags: ['SAP Cloud Integration', 'SuccessFactors', 'Groovy', 'SFTP'],
      },
      {
        index: '02',
        sector: 'Telecom',
        title: 'LMS desync investigation',
        task: 'Find out why courses were not syncing between a learning platform and SuccessFactors.',
        result: 'Three root causes identified and fixed (an incorrect incremental window, a faulty filter and a schema mismatch). Also uncovered a data quality issue: 2,650 out of 2,667 titles were duplicates.',
        tags: ['SAP Cloud Integration', 'XSLT', 'SuccessFactors', 'Groovy'],
      },
      {
        index: '03',
        sector: 'Optical',
        title: '7-flow SAP–CRM integration design',
        task: "Plan a 7-flow integration between an optical sector client's ERP and CRM, with a heavily constrained target API.",
        result: 'Execution order defined according to entity dependencies and a ~60-day plan, clear from day one.',
        tags: ['SAP Cloud Integration', 'REST', 'JSON', 'Groovy'],
      },
      {
        index: '04',
        sector: 'DevOps · Internal',
        title: 'CI/CD pipelines for SAP integrations',
        task: 'Automate integration quality checks and migration between environments.',
        result: 'Two GitHub Actions workflows: one checks best practices, one automates migration. [PENDING: impact]',
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
  about: {
    heading: 'About',
    role: 'Junior Consultant · Digital Integrations',
    company: 'Timestamp Spain',
    companyPeriod: 'Nov. 2025 – present · full-time · Barcelona / remote',
    bio: 'I build integrations for HR processes using SAP Cloud Integration. I joined as an intern with no prior SAP or Groovy experience and was offered a contract at the end because I had picked up the concepts quickly. That sums up how I work pretty well.',
    whatSetsApartHeading: 'What sets me apart',
    traits: [
      {
        label: 'Consistent',
        text: 'When I focus on something I do not stop until it is done properly, tested and documented for the next person.',
      },
      {
        label: 'Organised',
        text: 'I document what I do and keep things in order. Not out of perfectionism, but because I know how hard it is to find something that is not well explained.',
      },
      {
        label: 'Fast learner',
        text: 'In a few months I went from not knowing SAP Cloud Integration to running end-to-end integrations for international clients.',
      },
      {
        label: 'Good team presence',
        text: "I have no trouble asking questions or putting forward my own theories. People who have worked with me say I keep focus without losing my sense of humour.",
      },
    ],
    whyHeading: 'Why backend and integrations',
    why: "I have always been interested in how things work on the inside, not just knowing that they work. Reliability is especially important when you work with sensitive data like employee records: one mistake does not just break the integration, it can affect real people.",
    f1Heading: 'Why F1',
    f1: 'I am fascinated by how teams analyse telemetry and lap times to decide on a tyre strategy or when to pit. It is not just about speed: it is about making decisions under pressure with incomplete data. I am especially interested in the software that makes it possible to see and use that telemetry in real time.',
    communityHeading: 'Community',
    community: [
      {
        label: 'Rewriting the Code',
        text: 'Member of this community of women in technology.',
        href: site.rewritingTheCode,
      },
      {
        label: '@yesa.exe',
        text: 'Turning ideas into projects and sharing the process: data, engineering and learning in public.',
        href: site.instagram,
      },
    ],
  },
  cv: {
    heading: 'CV',
    downloadLabel: 'Download PDF',
    downloadNote: 'PDF coming soon',
    experienceHeading: 'Experience',
    educationHeading: 'Education',
    certsHeading: 'Certifications',
    languagesHeading: 'Languages',
    skillsHeading: 'Stack',
    jobs: [
      {
        title: 'Junior Consultant',
        company: 'Timestamp Spain (Timestamp Group)',
        period: 'Nov. 2025 – present',
        type: 'Part-time · Barcelona / remote',
        bullets: [
          'Development and maintenance of enterprise integrations with SAP Cloud Integration for multinational clients.',
          'Full cycle: design, development in Groovy and JavaScript, testing, documentation and production deployment.',
          'Full migration of an integration environment from SAP Neo to Cloud Foundry.',
          'Projects for clients in telecoms, insurance, pharma and workforce management.',
        ],
      },
      {
        title: 'SAP Integration Trainee',
        company: 'Timestamp Spain',
        period: 'Mar. – Oct. 2025',
        type: 'Internship',
        bullets: [
          'Built two GitHub Actions workflows: automatic best-practice checks and environment migration automation.',
          'Employee lifecycle integrations (onboarding and offboarding) with cross-platform sync.',
          'Integration testing with Postman collections and technical documentation.',
        ],
      },
      {
        title: 'IT Technician Intern',
        company: 'ClickTech (Erasmus+)',
        period: 'Mar. – Apr. 2024',
        type: 'Erasmus+ Internship · Amarante, Portugal',
        bullets: [
          'Equipment, server and network device setup and configuration. Incident resolution and connectivity testing.',
        ],
      },
      {
        title: 'Marketing & Social Media Intern',
        company: 'Grupo Actialia',
        period: 'Oct. 2023 – Jan. 2024',
        type: 'Internship',
        bullets: [
          'Social media creation and management, and onboarding of new team members.',
        ],
      },
    ],
    languages: [
      { lang: 'Spanish', level: 'Native' },
      { lang: 'English', level: 'A2 certified (Cambridge), actively studying' },
      { lang: 'Portuguese', level: 'Basic' },
    ],
  },
  contact: {
    heading: "Let's talk",
    intro: 'Open to conversations about integrations, backend and data.',
    emailLabel: 'Direct email',
    formHeading: 'Or write to me here',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    messagePlaceholder: 'Your message',
    submitLabel: 'Send message',
    successMessage: 'Message received. I will reply as soon as I can.',
    errorMessage:
      'Something went wrong. Try writing to me directly at y.espejo.santana@gmail.com',
    nameLabel: 'Name',
    emailFieldLabel: 'Email',
    messageLabel: 'Message',
  },
  projects: {
    heading: 'Projects',
    empty: 'Nothing published yet. Only finished projects are published.',
    circuitSim: {
      title: 'Barcelona-Catalunya Circuit Simulation',
      description: 'Interactive circuit simulation with curvature-based speed. Canvas API + requestAnimationFrame.',
      tagline: "[YUNA'S TEXT: why did you build this? One or two sentences in first person.]",
      howItWorksHeading: 'How the speed is calculated',
      howItWorks: "[YUNA'S TEXT: explain the curvature algorithm in your own words.]",
      techHeading: 'Technologies',
      tech: ['Canvas API', 'requestAnimationFrame', 'IntersectionObserver', 'CSS custom properties', 'Vanilla JavaScript'],
      backLabel: 'Back to projects',
    },
  },
  nav: {
    experience: 'Experience',
    projects: 'Projects',
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
    outsideHeading: 'Beyond code',
    outsideItems: [
      {
        label: 'Formula 1',
        text: "I'm fascinated by how telemetry and lap times drive every strategic call during a race. The software behind all of it is what interests me most.",
      },
      {
        label: '@yesa.exe',
        text: 'Turning ideas into projects and sharing the process: data, engineering and learning in public.',
        href: site.instagram,
      },
      {
        label: 'Rewriting the Code',
        text: 'I am part of Rewriting the Code, a community of women in tech.',
        href: site.rewritingTheCode,
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
        period: '2024 – 2026',
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
    featuredProjectHeading: 'Featured project',
    featuredProjectTitle: 'Barcelona-Catalunya Circuit Simulation',
    featuredProjectDesc: 'Two cars lap the Montmeló circuit. Speed is calculated in real time from the curvature at each point on the track.',
    featuredProjectLink: 'View project',
    experienceHeading: 'Featured experience',
    experienceCta: 'See full experience',
    experienceResultLabel: 'Result',
    cases: [
      {
        sector: 'Pharma · International',
        title: 'Employee delta sync',
        summary:
          'Redesign a daily integration that was sending all employee data every day regardless of what had changed.',
        result: 'New three-mode load so only changes travel. [PENDING: API figure]. In production and documented.',
        tags: ['SAP Cloud Integration', 'SuccessFactors', 'Groovy'],
      },
      {
        sector: 'Telecom',
        title: 'LMS desync investigation',
        summary:
          'Find out why courses were not syncing between a learning platform and SuccessFactors.',
        result: 'Three root causes fixed. A data quality issue uncovered: 2,650 out of 2,667 titles were duplicates.',
        tags: ['SAP Cloud Integration', 'XSLT', 'SuccessFactors'],
      },
      {
        sector: 'DevOps · Internal',
        title: 'CI/CD pipelines for SAP integrations',
        summary:
          'Automate integration quality checks and migration between environments.',
        result: 'Two GitHub Actions workflows: one checks best practices, the other automates migration. [PENDING: impact]',
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
