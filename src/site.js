// All site content lives here. Edit this file to update the site.

export const business = {
  name: 'Baez Consulting',
  legalName: 'Baez Consulting LLC',
  email: 'contact@baezconsulting.io',
  domain: 'baezconsulting.io',
}

export const services = [
  {
    tag: '</>',
    title: 'Software Development',
    description:
      'Front-end and back-end development, API development, and system integration for enterprise-grade applications.',
  },
  {
    tag: 'ai()',
    title: 'AI Consulting',
    description:
      'Our AI consulting services help organizations identify, design, and implement practical AI solutions that improve efficiency, automate workflows, enhance decision-making, and create new business opportunities.',
  },
  {
    tag: '[ ]',
    title: 'Software Engineering',
    description:
      'Application architecture across the full software development lifecycle, through to production support.',
  },
  {
    tag: 'db.tune',
    title: 'Database Tuning & Optimization',
    description:
      'Find the bottlenecks, optimize slow-running queries, and improve indexing for faster, more reliable systems.',
  },
]

export const expertise = [
  'database architecture',
  'performance tuning',
  'query optimization',
  'indexing strategies',
  'execution plan analysis',
  'stored procedures',
  'data modeling',
  'troubleshooting',
  'backup & recovery',
  'security',
  'scalability',
  'high availability',
]

export const leader = {
  name: 'Emilio Baez',
  title: 'CEO & President',
  // Headshot lives in /public. Set to '' to show a placeholder instead.
  photo: '/emilio.png',
  bio: [
    'A highly experienced Senior Full Stack Software Developer and Database Administrator who designs, develops, and supports enterprise-grade applications and database environments.',
    'Brings deep hands-on experience across the full software development lifecycle — front-end and back-end development, application architecture, API development, system integration, and production support — along with significant experience administering, managing, and designing complex relational database systems.',
    'Known for identifying database and application bottlenecks, optimizing slow-running queries, improving indexing strategies, and designing scalable solutions that improve overall system performance and reliability.',
  ],
}

// Contact form: create a free form at https://formspree.io and paste its ID
// into a .env file as VITE_FORMSPREE_ID=xxxxxxx. Without it, the form opens
// the visitor's email app instead.
export const formspreeId = import.meta.env.VITE_FORMSPREE_ID || ''
