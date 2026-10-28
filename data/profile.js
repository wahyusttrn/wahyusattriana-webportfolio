// Single source of truth for the home page (app/page.jsx) and the CV (app/cv/page.jsx).
// Dates use new Date(year, monthIndex); end: null means present.

export const profile = {
  name: 'Wahyu Sattriana',
  fullName: 'Nyoman Wahyu Sattriana P.',
  title: 'Software Engineer',
  location: 'Denpasar, Bali, Indonesia',
  timezone: 'UTC+8',
  availability: ['On-site in Indonesia', 'Remote', 'Relocation'],
  email: 'wahyusattriana@gmail.com',
  website: 'https://wahyusattriana.com',
  summary:
    'Software engineer building websites, internal tools and AI-integrated apps. 130+ sites shipped for Australian companies at BoltBlue, and founder of Makmoor.com, a POS and business management system.'
};

export const socials = {
  linkedin: { name: 'LinkedIn', link: 'https://www.linkedin.com/in/wahyusattriana' },
  github: { name: 'GitHub', link: 'https://github.com/wahyusttrn' },
  medium: { name: 'Medium', link: 'https://medium.com/@wahyusattriana' },
  instagram: { name: 'Instagram', link: 'https://www.instagram.com/wahyusttrn' },
  youtube: { name: 'YouTube', link: 'https://www.youtube.com/@wahyusattriana' }
};

export const experiences = [
  {
    name: 'BoltBlue',
    role: 'Remote Web Developer / Software Engineer',
    description: [
      'Build and maintain 130+ WordPress-Elementor and Next.js websites for Australian companies.',
      'Develop AI-integrated internal tools such as an Auto Image Sorter and Claude workflow skills that integrate Claude with WordPress through SSH connections.',
      'Manage the tracking pipeline to monitor leads and conversions with GTM, GA4, and Google Ads.',
      "Maintain clients' internal automation systems and CRMs such as Zapier, GHL, Mindbody, and more."
    ],
    start: new Date(2025, 10),
    end: null
  },
  {
    name: 'Makmoor.com',
    role: 'Founder, POS systems',
    description: [
      'AI-assisted development using React Native, Express, and PostgreSQL.',
      'Handle social media posts and marketing strategies.',
      'Manage sales and customer service.'
    ],
    start: new Date(2026, 3),
    end: null
  },
  {
    name: 'Content Creator',
    role: 'Self-employed',
    description: [
      'Create long and short form content about work, life, and experiments.',
      'Human-made content and process, from scriptwriting to editing and resources.'
    ],
    start: new Date(2026, 3),
    end: null
  },
  {
    name: 'EIJI Sushi',
    role: 'Graphic Designer and Social Media Manager',
    description: [
      'Increased new customers by 20% through social media posts.',
      'Captured product and real-moment photography.',
      'Designed menu books and brochures, and directed a company video profile.',
      'Built a product administration and registration system.'
    ],
    start: new Date(2023, 11),
    end: new Date(2024, 8)
  }
];

export const educations = [
  {
    name: 'Hacktiv8',
    role: 'Fullstack JavaScript Bootcamp',
    description: [
      'Fast-paced learning with an intense schedule and material.',
      'Challenges, live coding, debugging, pair programming, and a hackathon as final projects.'
    ],
    link: {
      name: 'Transcript',
      link: 'https://job-portal-manual.s3.us-east-1.amazonaws.com/Transcript+-+RMT-62+-+2025+-+Nyoman+Wahyu+Sattriana+Purnawijaya.pdf'
    },
    start: new Date(2025, 3),
    end: new Date(2025, 7)
  },
  {
    name: 'SMA Negeri 1 Singaraja',
    role: 'Student Council President (2024)',
    description: [
      'Head of Electronics and Robotics Club, 2022–2024.',
      'Top 100 National Best Student Council President by ISLC 2024.',
      'Top 50 National Best Student Council President by IPB OSIS Fest 2024.',
      'Led the Creative and Design Department at Forum OSIS Nasional XII.'
    ],
    start: new Date(2022, 6),
    end: new Date(2025, 3)
  }
];

export const projects = [
  {
    title: 'Makmoor.com',
    date: 'Since Apr 2026',
    role: 'Founder. Fullstack.',
    description:
      'Cloud-based POS and business management system that keeps running in offline without losing any records.',
    tags: ['React Native', 'Expo', 'Next.js', 'Express', 'PostgreSQL', 'Prisma'],
    link: 'https://makmoor.com'
  },
  {
    title: 'Smart Spend Assistant',
    date: 'Jul 2025',
    role: 'Team lead. Fullstack, UI/UX.',
    description: 'AI-integrated financial activity tracker with an OpenAI-powered assistant.',
    tags: ['React Native', 'Next.js', 'TypeScript', 'MongoDB', 'OpenAI', 'Xendit'],
    link: 'https://github.com/SmartSpendAssistant-AsyncProject'
  },
  {
    title: 'Greets',
    date: 'Jun 2025',
    role: 'Team member. Fullstack.',
    description: 'Real-time chat app with an AI chatbot that can summarise the conversation.',
    tags: ['React', 'Express', 'PostgreSQL', 'WebSocket', 'OpenAI'],
    link: 'https://github.com/Greets-RMT62'
  }
];

// home: false keeps a group on the CV only
export const skills = [
  { group: 'Frontend', items: ['HTML/CSS', 'JavaScript', 'TypeScript', 'Tailwind', 'React', 'Next.js', 'React Native'] },
  { group: 'Backend', items: ['REST', 'GraphQL', 'WebSocket', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma / ORMs'] },
  { group: 'Ops', items: ['Vercel', 'Railway', 'Amazon EC2', 'Cloudflare', 'Supabase', 'Firebase'] },
  { group: 'AI workflow', items: ['AI-assisted coding', 'AI-integrated apps', 'Local model training'] },
  { group: 'Other', items: ['WordPress', 'Webflow', 'GTM / GA4', 'Arduino / C++', 'Graphic design'] },
  { group: 'Exploring', items: ['C', 'Go', 'Rust', 'Docker', 'Nginx'], home: false }
];

export const certifications = [
  {
    name: 'IELTS Academic',
    date: 'Jan 2025',
    note: 'Valid until Jan 2027',
    items: [{ name: 'Overall band 6.0', link: 'https://www.linkedin.com/in/wahyusattriana/overlay/Certifications/794022326/treasury/?profileId=ACoAAFjD5noBX53Rixz4w3WDbznG8Au28qcP00M' }]
  },
  {
    name: 'HackerRank',
    date: 'Jul 2025',
    items: [
      { name: 'Software Engineer', link: 'https://www.hackerrank.com/certificates/e0e281de2be7' },
      { name: 'Problem Solving', link: 'https://www.hackerrank.com/certificates/cfd1afba1bcb' },
      { name: 'JavaScript', link: 'https://www.hackerrank.com/certificates/fbd283ec7d15' },
      { name: 'React', link: 'https://www.hackerrank.com/certificates/d6b22537944c' },
      { name: 'CSS', link: 'https://www.hackerrank.com/certificates/fb22bd2eacaa' }
    ]
  },
  {
    name: 'Forage',
    date: 'Jul 2025',
    items: [
      {
        name: 'AWS Solutions Architecture',
        link: 'https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_68da7eb9890ba2dde4411215_1759558797724_completion_certificate.pdf'
      },
      {
        name: 'GE Aerospace',
        link: 'https://www.theforage.com/completion-certificates/ay2tsYxaTif7Nt6z7/fjk7MFbQbedPXb3ws_ay2tsYxaTif7Nt6z7_68da7eb9890ba2dde4411215_1759817745914_completion_certificate.pdf'
      },
      {
        name: 'Accenture',
        link: 'https://www.theforage.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_68da7eb9890ba2dde4411215_1759851993695_completion_certificate.pdf'
      }
    ]
  },
  {
    name: 'SoloLearn',
    date: 'Jul 2025',
    items: [
      { name: 'HTML Fundamentals', link: 'https://www.sololearn.com/en/certificates/CT-MBKGPUKX' },
      { name: 'Basic JavaScript', link: 'https://www.sololearn.com/en/certificates/CT-UZ2CENJV' }
    ]
  }
];
