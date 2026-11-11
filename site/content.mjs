export const owner = {
  name: 'Mohamed Kamal Aldin', shortName: 'Mohamed Kamal',
  title: 'Senior Fullstack Engineer | Node.js / NestJS / TypeScript',
  email: 'muhammedk.aldin@gmail.com', phone: '+20 109 530 4064',
  github: 'https://github.com/Kamellion-Dev',
  linkedin: 'https://www.linkedin.com/in/mohamed-kamal-117026221',
  whatsapp: 'https://wa.me/201095304064',
  site: 'https://kamellion-dev.github.io/Portfolio/',
  resume: 'resume/Mohamed-Kamal-Senior-Fullstack-Engineer-Resume.pdf'
};

export const projects = [
  {
    slug: 'semsarco', name: 'Semsarco', subtitle: 'AI-Driven Marketplace Discovery Platform',
    category: 'AI & product engineering', type: 'Personal project', status: 'Personal project', featured: true,
    stack: ['Node.js', 'Playwright', 'OpenRouter AI', 'Vue 3', 'Redis'],
    summary: 'An Egyptian Arabic search assistant that turns everyday requests into structured marketplace searches.',
    problem: 'Marketplace discovery starts with a human request, not a set of database filters. The challenge is to translate that request into a useful search and present collected listings without repeated results.',
    role: 'Fullstack development: the search experience, AI request processing, and browser-based collection service.',
    contributions: [
      ['AI search', 'Built an Egyptian Arabic assistant that converts user requests into structured product search filters.'],
      ['Collection service', 'Developed a Node.js and Playwright service with persistent browser sessions to collect marketplace listings.'],
      ['Product experience', 'Connected the search workflow to a Vue 3 interface and removed duplicate listings from collected results.']
    ],
    flow: ['User request', 'AI search filters', 'Browser collection', 'Unique listings'],
    note: 'The browser collection service is separate from request interpretation. This keeps collection concerns and conversational behavior independently understandable.',
    outcome: 'A search workflow from Egyptian Arabic requests to structured, deduplicated listing results.',
    evidence: 'Personal project overview. Get in touch to discuss the search workflow and implementation.'
  },
  {
    slug: 'ledgerflow', name: 'LedgerFlow', subtitle: 'Event-Driven Fintech Platform',
    category: 'Personal engineering project', type: 'Personal project', status: 'Architecture concept', featured: true,
    stack: ['Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'RabbitMQ', 'gRPC'],
    summary: 'A fintech architecture concept exploring multi-currency transactions and idempotent ledger updates.',
    problem: 'Repeated payment events can create duplicate financial entries unless processing has a clear idempotency boundary.',
    role: 'Personal systems design and backend architecture for financial workflows.',
    contributions: [['Design scope', 'Explore idempotent transaction handling and multi-currency ledger models.'], ['Proposed architecture', 'Use gRPC for service communication and RabbitMQ for asynchronous settlement events.']],
    flow: ['Payment request', 'Idempotency boundary', 'Ledger update', 'Settlement event'],
    note: 'The design needs explicit decisions on transaction boundaries, retries, and reconciliation before it can be treated as production-ready.',
    outcome: 'Architecture scope covering safe transaction handling, service communication, and payment settlement.', evidence: 'Architecture concept. Get in touch to discuss the design and implementation direction.'
  },
  {
    slug: 'nexus-core', name: 'Nexus Core', subtitle: 'Distributed Workflow Engine',
    category: 'Personal engineering project', type: 'Personal project', status: 'Architecture concept', featured: true,
    stack: ['Node.js', 'NestJS', 'TypeScript', 'BullMQ', 'Redis', 'PostgreSQL'],
    summary: 'A workflow architecture concept for persistent multi-step jobs, retries, and concurrent workers.',
    problem: 'Long-running workflows need durable progress and a way to recover when one background step fails.',
    role: 'Personal systems design and backend architecture for durable workflow execution.',
    contributions: [['Design scope', 'Explore persisted execution state, multi-step workflows, and fault recovery.'], ['Proposed architecture', 'Use Redis/BullMQ workers and PostgreSQL state, with validation before dispatch.']],
    flow: ['Workflow definition', 'Validation', 'Worker queues', 'Persistent state'],
    note: 'A practical implementation must define which steps can be retried safely and how worker completion is reflected in durable workflow state.',
    outcome: 'A documented direction for distributed workflow implementation.', evidence: 'Architecture concept. Get in touch to discuss the design and implementation direction.'
  },
  {
    slug: 'food-sawa', name: 'Food Sawa', subtitle: 'Multi-Tenant Restaurant SaaS Platform',
    category: 'Personal engineering project', type: 'Personal project', status: 'Node.js migration planned', featured: true,
    stack: ['Laravel', 'Node.js / NestJS — planned', 'PostgreSQL / Prisma — planned', 'Docker — planned'],
    summary: 'A restaurant platform with a planned NestJS migration for tenant isolation and SaaS invoicing.',
    problem: 'The next architecture should support independent restaurant accounts with clear access boundaries and a maintainable billing workflow.',
    role: 'Fullstack Laravel development and architecture planning for a Node.js/NestJS migration.',
    contributions: [['Existing implementation', 'Restaurant application developed in Laravel with store-level data separation.'], ['Migration scope', 'Plan tenant database schemas, JWT authentication, role-based access control, and automated invoicing services.']],
    flow: ['Restaurant account', 'Tenant boundary', 'Application services', 'Invoicing — planned'],
    note: 'Moving from shared store-level records to separate database schemas changes migrations, tenant routing, and operational maintenance; it is a substantive architecture change.',
    outcome: 'An existing application and a clearly scoped migration direction.', evidence: 'Laravel application with a planned Node.js migration. Get in touch to discuss the migration approach.'
  }
];

export const skills = [
  { number: '01', title: 'Backend & APIs', text: 'Business logic, clear service boundaries, and connected systems.', items: ['Node.js', 'NestJS', 'TypeScript', 'PHP / Laravel', 'REST APIs', 'Authentication & RBAC'], project: 'semsarco' },
  { number: '02', title: 'Frontend engineering', text: 'Interfaces that make complex business workflows usable.', items: ['React.js', 'Next.js', 'Vue.js', 'JavaScript', 'Inertia.js', 'Tailwind CSS'], project: 'semsarco' },
  { number: '03', title: 'Data & background work', text: 'Application data, queues, and asynchronous processing.', items: ['PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'RabbitMQ', 'BullMQ'], project: 'nexus-core' },
  { number: '04', title: 'AI-powered products', text: 'Product context and useful actions, connected to the customer journey.', items: ['AI agents', 'LLM integration', 'RAG', 'pgvector', 'Vector embeddings', 'Tool calling'], project: 'semsarco' },
  { number: '05', title: 'Payments & integrations', text: 'The boundaries where business applications meet external services.', items: ['MyFatoorah', 'Clickpay', 'Axis', 'Paymob', 'Logistics APIs', 'WhatsApp / Meta APIs'], project: null },
  { number: '06', title: 'Delivery & tooling', text: 'From implementation and review to deployment and support.', items: ['Docker', 'Git', 'CI/CD', 'AWS S3', 'PHPUnit', 'Playwright'], project: 'semsarco' }
];

export const experience = [
  { company: 'Softoio', title: 'Full Stack Engineer', date: 'Mar 2023 — Present', text: 'Build business applications across ERP, e-commerce, CRM, HRM, warehouse management, and logistics.', bullets: [
    'Develop React.js, Vue.js, and Next.js interfaces; contribute to NestJS and TypeScript backend projects alongside PHP/Laravel delivery.',
    'Integrate MyFatoorah, Clickpay, Axis, and Paymob payment gateways, plus logistics APIs that connect business systems and automate data exchange.',
    'Build B2B workflows and AI sales assistance using LLMs, RAG, pgvector, vector embeddings, and tool calling.',
    'Deliver REST APIs, WhatsApp/Meta integrations, background processing, and features from system design through deployment.'
  ] },
  { company: 'Penta Value', title: 'Software Developer', date: 'Feb 2022 — Mar 2023', text: 'Developed backend applications and REST APIs with PHP/Laravel.', bullets: [
    'Delivered e-commerce, social, and learning-management features in Agile teams.',
    'Applied Clean Architecture and SOLID principles to application services and integrations.'
  ] }
];

export const credentials = [
  ['Node JS Backend Diploma', 'Route · June 2026'],
  ["CS50’s Web Programming with Python and JavaScript", 'edX'],
  ['Software Engineer Certificate', 'HackerRank'],
  ['Certified English Speaker Level 8/8', 'Berlitz Egypt'],
  ['Certified Full-Stack Developer', 'Mesmake'],
  ['Bachelor of Laws', 'Faculty of Law, Banha University · 2016–2020']
];
