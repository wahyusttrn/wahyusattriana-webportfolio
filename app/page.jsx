import { Github, Linkedin, Mail, Instagram, Youtube, BookOpenText, ExternalLink, Code } from 'lucide-react';
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
  'HTML/CSS',
  'Tailwind',
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'NextJS',
  'React Native',
  'Express',
  'Sequelize',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Git Workflow',
  'REST API',
  'GraphQL',
  'WebSocket',
  'Graphic Design'
];

const experiences = [
  {
    company: 'Forum OSIS Nasional',
    role: 'Head of Creative and Designs Departement',
    description: '',
    date: '2024 - 2025'
  },
  {
    company: 'Makmur Raya',
    role: 'Social Media Designer',
    description: '',
    date: '2024 - 2025'
  },
  {
    company: 'Singarockland',
    role: 'Part of Media and Creative',
    description: '',
    date: '2024 - 2024'
  },
  {
    company: 'Eiji Sushi',
    role: 'Designer and Social Media Manager',
    description: '',
    date: '2023 - 2024'
  }
];

const educations = [
  {
    school: 'Hactiv8 Indonesia',
    role: 'Fullstack JavaScript Immersive Student',
    description: '',
    date: '2025 - 2025'
  },
  {
    school: 'SMA Negeri 1 Singaraja',
    role: 'Student Council President and Head Of Robotics Club',
    description: '',
    date: '2022 - 2025'
  }
];

const projects = [
  {
    title: 'Smart Spend Assistant',
    description: 'A seamless AI powered money manager app',
    tags: ['NextJS', 'TypeScript', 'MongoDB', 'Zod', 'React Native', 'OpenAI', 'Xendit'],
    type: 'direct',
    link: 'https://github.com/SmartSpendAssistant-AsyncProject'
  },
  {
    title: 'Everylity App',
    description: 'An e-commerce web applications built using fullstack Next.js',
    tags: ['NextJS', 'TypeScript', 'MongoDB', 'Zod', 'Shadcn'],
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
    tags: ['ReactJS', 'Vite', 'Express', 'Sequelize', 'PostgreSQL', 'Axios', 'WebSocket', 'OpenAI', 'TDD'],
    type: 'direct',
    link: 'https://github.com/Greets-RMT62'
  },
  {
    title: 'Shred App',
    description: 'Task manager app built under ExcalidrawAPI and GeminiAI',
    tags: ['ReactJS', 'Vite', 'Express', 'Sequelize', 'PostgreSQL', 'Axios', 'Tailwind', 'Shadcn'],
    type: 'direct',
    link: 'https://github.com/wahyusttrn/shred-app'
  },
  {
    title: 'Skelvia App',
    description: 'Educational prototype web-app built under monolith architecture',
    tags: ['Express', 'EJS', 'Sequelize', 'PostgreSQL', 'Tailwind', 'DaisyUI'],
    type: 'direct',
    link: 'https://github.com/wahyusttrn/skelvia-app'
  },
  {
    title: 'Prelo App',
    description: 'E-commerce platform to dig the fundamental web development',
    tags: ['HTML', 'CSS', 'JavaScript', 'DOM', 'Bootstrap'],
    type: 'multiple',
    demo: 'https://wahyusttrn.github.io/prelo-app/',
    github: 'https://github.com/wahyusttrn/prelo-app'
  }
];

export default function HomePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div id="home" className="h-full max-w-3xl flex flex-col justify-center pt-20 container mx-auto px-4">
        <ScrollAnimation animateId="header" className="mb-4 flex sm:flex-row flex-col items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-muted flex-shrink-0 overflow-hidden">
            <img src="/myPic.png" alt="Wahyu Sattriana Profile Picture" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1">
            <h1 className="scroll-m-20 text-5xl font-bold tracking-tight text-balance">Hi! I'm Wahyu Sattriana</h1>
            <h2 className="scroll-m-20 text-xl tracking-tight mb-4">An Overthinker Software Engineer</h2>
            <div className="flex space-x-4 mb-6">
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://github.com/wahyusttrn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://linkedin.com/in/wahyusattriana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:wahyusattriana@gmail.com" aria-label="Send Email">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.instagram.com/wahyusttrn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.youtube.com/@wahyusattriana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://medium.com/@wahyusattriana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Medium Blog"
                >
                  <BookOpenText className="h-4 w-4" />
                </Link>
              </Button>
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
            <Link target="_blank" href={'https://drive.google.com/file/d/1oH7XMsBxjxyQO8-EDHrglNQraRYKyvq8/view'}>
              <p className="leading-7 italic hover:underline">Curiculum Vitae (CV) here.</p>
            </Link>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animateId="skills" className="mb-12 scroll-mt-20">
          <section id="skills">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-muted rounded-md p-3 text-center">
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animateId="experience" className="mb-12 scroll-mt-20">
          <section id="experience">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <article key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">{exp.company}</h3>
                    <h4 className="text-sm text-muted-foreground mb-2">{exp.role}</h4>
                  </div>
                  <time className="text-sm text-muted-foreground sm:whitespace-nowrap">{exp.date}</time>
                </article>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animateId="education" className="mb-12 scroll-mt-20">
          <section id="education">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">Education</h2>
            <div className="space-y-6">
              {educations.map((edu, index) => (
                <article key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">{edu.school}</h3>
                    <h4 className="text-sm text-muted-foreground mb-2">{edu.role}</h4>
                  </div>
                  <time className="text-sm text-muted-foreground sm:whitespace-nowrap">{edu.date}</time>
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
            <Button asChild>
              <Link href="https://www.instagram.com/wahyusttrn" target="_blank" rel="noopener noreferrer">
                Chat me
              </Link>
            </Button>
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
