import { Mail, BookOpenText, ExternalLink, Code } from 'lucide-react';
import { Github, Linkedin, Instagram, Youtube } from '@/components/brand-icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from '@/components/theme-toggle';
import { ScrollAnimation } from '@/components/scroll-animation';
import { SmoothScrollNav } from '@/components/smooth-scroll-nav';
import Link from 'next/link';

const skills = [
  'Leadership',
  'Tailwind',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'React Native',
  'Graphic Design',
  'WordPress',
  'Elementor',
  'Express',
  'ORMs',
  'SQL',
  'MongoDB',
  'Redis',
  'Git',
  'GraphQL',
  'WebSocket',
  'PHP',
  'Laravel'
];

const formatMonth = (date) => date.toLocaleString('en-US', { month: 'short', year: 'numeric' });

// Inclusive month count, e.g. Nov 2025 - Nov 2025 = 1 mo
const monthsBetween = (start, end) =>
  (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

// start and end use new Date(year, monthIndex), end: null means present
const withDuration = (item) => ({
  ...item,
  date: `${formatMonth(item.start)} - ${item.end ? formatMonth(item.end) : 'Present'}`,
  month: monthsBetween(item.start, item.end ?? new Date())
});

const experiences = [
  {
    company: 'Makmoor.com (POS Systems)',
    role: 'Founder',
    description: [
      'AI-assisted development using React Native, Express, and PostgreSQL.',
      'Handle social media posts and marketing strategies.',
      'Manage sales and customer service.'
    ],
    start: new Date(2026, 3),
    end: null
  },
  {
    company: 'Content Creator',
    role: 'Self-employed',
    description: [
      'Create long and short form content about work, life, and experiments.',
      'Human-made content and process, from scriptwriting to editing and resources.'
    ],
    start: new Date(2026, 3),
    end: null
  },
  {
    company: 'BoltBlue',
    role: 'Web Developer / Software Engineer',
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
    company: 'EIJI Sushi',
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
].map(withDuration);

const educations = [
  {
    school: 'Hacktiv8 Indonesia',
    role: 'Fullstack JavaScript Bootcamp',
    description: [
      'Fast-paced learning with an intense schedule and material.',
      'Challenges, live coding, debugging, pair programming, and a hackathon as final projects.'
    ],
    start: new Date(2025, 3),
    end: new Date(2025, 7)
  },
  {
    school: 'SMA Negeri 1 Singaraja',
    role: "2024's Student Council President and 2022-2024's Head of Electronics and Robotics Club",
    description: [
      'Top 100 National Best Student Council President by ISLC 2024.',
      'Top 50 National Best Student Council President by IPB OSIS Fest 2024.',
      'Led the Creative and Design Department at Forum OSIS Nasional XII.'
    ],
    start: new Date(2022, 6),
    end: new Date(2025, 3)
  }
].map(withDuration);

const projects = [
  {
    title: 'Smart Spend Assistant',
    description: 'A seamless AI powered money manager app',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Zod', 'React Native', 'OpenAI', 'Xendit'],
    type: 'direct',
    link: 'https://github.com/SmartSpendAssistant-AsyncProject'
  },
  {
    title: 'Everylity App',
    description: 'An e-commerce web applications built using fullstack Next.js',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Zod', 'Shadcn'],
    type: 'direct',
    link: 'https://github.com/wahyusttrn/everylity-ecommerce'
  },
  {
    title: 'Instagram Replica',
    description: 'A replica of instagram mobile apps (personal education purpose only)',
    tags: ['React Native', 'GraphQL', 'Apollo', 'MongoDB', 'Redis'],
    type: 'direct',
    link: 'https://github.com/wahyusttrn/instagram-replica'
  },
  {
    title: 'Greets App',
    description: 'Real Time Chat App, with AI Assistant',
    tags: ['React.js', 'Vite', 'Express', 'Sequelize', 'PostgreSQL', 'Axios', 'WebSocket', 'OpenAI', 'TDD'],
    type: 'direct',
    link: 'https://github.com/Greets-RMT62'
  }
];

const socials = [
  {
    name: 'GitHub',
    label: 'GitHub Profile',
    link: 'https://github.com/wahyusttrn',
    icon: Github
  },
  {
    name: 'Linkedin',
    label: 'Linkedin Profile',
    link: 'https://linkedin.com/in/wahyusattriana',
    icon: Linkedin
  },
  {
    name: 'Email',
    label: 'Send Email',
    link: 'mailto:wahyusattriana@gmail.com',
    icon: Mail
  },
  {
    name: 'Instagram',
    label: 'Instagram Profile',
    link: 'https://www.instagram.com/wahyusttrn',
    icon: Instagram
  },
  {
    name: 'YouTube',
    label: 'YouTube Profile',
    link: 'https://www.youtube.com/@wahyusattriana',
    icon: Youtube
  },
  {
    name: 'Medium',
    label: 'Medium Blog',
    link: 'https://medium.com/@wahyusattriana',
    icon: BookOpenText
  }
];

const resume = process.env.RESUME_URL || '';

// Rebuild daily so "Present" month counts stay current
export const revalidate = 86400;

export default function HomePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div id="home" className="h-full max-w-3xl flex flex-col justify-center pt-20 container mx-auto px-4">
        <ScrollAnimation animateId="header" className="mb-4 flex sm:flex-row flex-col items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-muted flex-shrink-0 overflow-hidden">
            <img src="/Profile-2.webp" alt="Wahyu Sattriana Profile Picture" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1">
            <h1 className="scroll-m-20 text-5xl font-bold tracking-tight text-balance">Hi! I'm Wahyu Sattriana</h1>
            <h2 className="scroll-m-20 text-xl tracking-tight mb-4">An Overthinker Software Engineer</h2>
            <div className="flex space-x-4 mb-6">
              {socials.map((e, i) => {
                return (
                  <Button key={i} variant="outline" size="icon" asChild>
                    <Link href={e.link} target="_blank" rel="noopener noreferrer" aria-label={e.label}>
                      <e.icon className="h-4 w-4" />
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateId="line-break">
          <hr className="my-6" />
        </ScrollAnimation>
      </div>

      <ScrollAnimation
        animateId="navbar"
        className="w-full flex justify-center sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 mb-8 z-10"
      >
        <div className="max-w-3xl container mx-auto px-4">
          <div className="flex items-center justify-between">
            <nav className="flex space-x-8" aria-label="Main navigation">
              <SmoothScrollNav />
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </ScrollAnimation>

      <div className="h-full max-w-3xl flex flex-col justify-center pb-20 container mx-auto px-4">
        <ScrollAnimation animateId="about" className="mb-12 scroll-mt-20">
          <section id="about">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">About Me</h2>
            <p className="leading-7 mb-4">
              I'm an explorative yet "overthinker" software engineer that have worked for multiple companies,
              organizations, also individuals which helped me leverage my skills in programming, leadership, and a touch
              of visual graphics.
            </p>
            <p className="leading-7">I am based in Bali, Indonesia and I'm very open to be hired anywhere (i think).</p>
            <Link target="_blank" href={resume}>
              <p className="leading-7 italic underline">Curiculum Vitae (CV) / resume here.</p>
            </Link>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animateId="skills" className="mb-12 scroll-mt-20">
          <section id="skills">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-muted rounded-md p-2 text-center text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animateId="experience" className="mb-12 scroll-mt-20">
          <section id="experience">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">Experience</h2>
            <div className="sm:space-y-6 space-y-10">
              {experiences.map((exp, index) => (
                <article
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-start sm:gap-4 gap-1"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">{exp.company}</h3>
                    <h4 className="text-sm text-muted-foreground mb-2">{exp.role}</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm leading-6">
                      {exp.description.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <time className="text-sm text-muted-foreground sm:whitespace-nowrap">{exp.date}</time>
                    <p className="text-xs text-muted-foreground italic">
                      {exp.month} {exp.month > 1 ? 'mos' : 'mo'}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animateId="education" className="mb-12 scroll-mt-20">
          <section id="education">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">Education</h2>
            <div className="sm:space-y-6 space-y-10">
              {educations.map((edu, index) => (
                <article
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-start sm:gap-4 gap-1"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">{edu.school}</h3>
                    <h4 className="text-sm text-muted-foreground mb-2">{edu.role}</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm leading-6">
                      {edu.description.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <time className="text-sm text-muted-foreground sm:whitespace-nowrap">{edu.date}</time>
                    <p className="text-xs text-muted-foreground italic">
                      {edu.month} {edu.month > 1 ? 'mos' : 'mo'}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animateId="projects" className="mb-12 scroll-mt-20">
          <section id="projects">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium">{project.title}</h3>
                      {project.type === 'direct' ? (
                        <Button variant="ghost" size="icon" asChild>
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label={`View ${project.title} options`}>
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Demo
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                <Code className="h-4 w-4 mr-2" />
                                GitHub
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animateId="contact" className="mb-12 scroll-mt-20">
          <section id="contact">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">Get In Touch</h2>
            <p className="leading-7 mb-6">
              Hey, I'm always open to discuss new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to just DM me right away!
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="mailto:wahyusattriana@gmail.com" target="_blank" rel="noopener noreferrer">
                  Email me
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://www.instagram.com/wahyusttrn" target="_blank" rel="noopener noreferrer">
                  Direct Message
                </Link>
              </Button>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animateId="footer">
          <footer className="border-t pt-6 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Wahyu Sattriana. All rights reserved.</p>
          </footer>
        </ScrollAnimation>
      </div>
    </div>
  );
}
