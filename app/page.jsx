import Image from 'next/image';
import profilePhoto from '@/public/Profile-2.webp';
import { BaliClock } from '@/components/bali-clock';
import { ThemeToggle } from '@/components/theme-toggle';

const formatMonth = (date) => date.toLocaleString('en-US', { month: 'short', year: 'numeric' });

// Inclusive month count, e.g. Nov 2025 - Nov 2025 = 1 mo
const monthsBetween = (start, end) =>
  (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

// start and end use new Date(year, monthIndex), end: null means present
const withDuration = (item) => ({
  ...item,
  date: `${formatMonth(item.start)} — ${item.end ? formatMonth(item.end) : 'Present'}`,
  month: monthsBetween(item.start, item.end ?? new Date())
});

const experiences = [
  {
    name: 'BoltBlue',
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
].map(withDuration);

const educations = [
  {
    name: 'Hacktiv8',
    role: 'Fullstack JavaScript Bootcamp',
    description: [
      'Fast-paced learning with an intense schedule and material.',
      'Challenges, live coding, debugging, pair programming, and a hackathon as final projects.'
    ],
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
].map(withDuration);

const projects = [
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
  },
  {
    title: 'Everylity',
    date: '',
    role: 'Fullstack.',
    description: 'E-commerce web application built end to end with Next.js.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Zod', 'shadcn/ui'],
    link: 'https://github.com/wahyusttrn/everylity-ecommerce'
  }
];

const skills = [
  { group: 'Frontend', items: ['TypeScript', 'React / Next.js', 'React Native', 'Tailwind'] },
  { group: 'Backend', items: ['Express', 'PostgreSQL / MongoDB', 'Redis', 'GraphQL / WebSocket'] },
  { group: 'Ops', items: ['Vercel', 'Amazon EC2', 'Cloudflare', 'Supabase / Firebase'] },
  { group: 'Also', items: ['AI-assisted coding', 'WordPress / Webflow', 'GTM / GA4', 'Graphic design'] }
];

const email = 'wahyusattriana@gmail.com';
const resume = process.env.RESUME_URL || '';

const mainLinks = [
  ...(resume ? [{ name: 'CV', link: resume }] : []),
  { name: 'Email', link: `mailto:${email}` },
  { name: 'LinkedIn', link: 'https://linkedin.com/in/wahyusattriana' },
  { name: 'GitHub', link: 'https://github.com/wahyusttrn' }
];

const otherLinks = [
  { name: 'YouTube', link: 'https://www.youtube.com/@wahyusattriana' },
  { name: 'Medium', link: 'https://medium.com/@wahyusattriana' },
  { name: 'Instagram', link: 'https://www.instagram.com/wahyusttrn' }
];

// Rebuild daily so "Present" month counts stay current
export const revalidate = 86400;

const external = (link) => (link.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' });

// Full-bleed rows break out of the page gutter
const bleed = '-mx-4 px-4 lg:-mx-8 lg:px-8';

function SectionHeading({ num, title }) {
  return (
    <div className="grid lg:grid-cols-12 gap-x-4 items-start border-t-[3px] border-ink pt-3.5 mt-20 lg:mt-28 mb-8 lg:mb-10">
      <span
        aria-hidden="true"
        className="lg:col-span-3 text-hot text-[clamp(56px,9vw,140px)] leading-[0.78] font-[850] [font-stretch:125%]"
      >
        {num}
      </span>
      <h2 className="lg:col-span-9 pt-3 lg:pt-1 text-[clamp(30px,4.2vw,60px)] leading-none font-extrabold tracking-[-0.025em]">
        {title}
      </h2>
    </div>
  );
}

function Row({ name, role, date, month, description }) {
  return (
    <article
      className={`group grid lg:grid-cols-12 gap-x-4 gap-y-2 pt-5 pb-7 border-t border-ink last:border-b transition-colors duration-200 hover:bg-ink hover:text-paper ${bleed}`}
    >
      <p className="lg:col-span-3 text-sm font-medium text-dim transition-colors duration-200 group-hover:text-hot">
        {date}
        <span className="block text-xs">
          {month} {month > 1 ? 'mos' : 'mo'}
        </span>
      </p>
      <h3 className="lg:col-span-4 text-[clamp(26px,2.6vw,38px)] leading-[1.02] font-extrabold tracking-[-0.02em] [font-stretch:112%]">
        {name}
      </h3>
      <div className="lg:col-span-5">
        <p className="font-semibold mb-2.5">{role}</p>
        <ul className="list-[square] pl-[18px] space-y-1.5 marker:text-hot">
          {description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="px-4 lg:px-8">
      <header className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-2 py-3.5 border-b border-ink text-[13px] font-medium">
        <span className="lg:col-span-3">Wahyu Sattriana</span>
        <span className="hidden lg:block lg:col-span-3">Software Engineer</span>
        <span className="text-right lg:text-left lg:col-span-3 text-dim">
          Bali <BaliClock />
        </span>
        <nav aria-label="Links" className="col-span-2 lg:col-span-3 flex flex-wrap gap-x-3.5 gap-y-1 lg:justify-end">
          {mainLinks.map((e) => (
            <a key={e.name} href={e.link} {...external(e.link)} className="border-b border-transparent hover:border-current">
              {e.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </header>

      <main>
        <Image
          src={profilePhoto}
          alt="Wahyu Sattriana"
          width={200}
          height={200}
          priority
          className="lg:hidden mt-6 size-[clamp(96px,28vw,200px)] object-cover"
        />
        <h1 className="mt-5 lg:mt-7 text-[12vw] leading-[0.8] font-[850] tracking-[-0.02em] uppercase whitespace-nowrap [font-stretch:125%]">
          Wahyu
          <br />
          Sattriana<span className="text-hot">.</span>
        </h1>

        <section className="grid lg:grid-cols-12 gap-x-4 gap-y-6 pt-12 pb-14">
          <p className="lg:col-span-3 text-[13px] font-medium">
            <Image
              src={profilePhoto}
              alt="Wahyu Sattriana"
              width={176}
              height={176}
              className="hidden lg:block mb-4 size-44 object-cover"
            />
            Currently at BoltBlue
            <span className="block text-dim">Founder of Makmoor.com</span>
          </p>
          <div className="lg:col-span-8">
            <p className="mb-5 text-[clamp(20px,2.2vw,30px)] leading-tight font-semibold">
              <s className="text-dim font-medium decoration-hot decoration-[3px]">Graphic designer</s>{' '}
              <s className="text-dim font-medium decoration-hot decoration-[3px]">Social media manager</s> Software
              engineer.
            </p>
            <p className="text-[clamp(26px,3.4vw,50px)] leading-[1.08] font-medium tracking-[-0.015em]">
              I build websites, internal tools and AI-integrated apps.{' '}
              <b className="text-hot font-extrabold">130+</b> sites for Australian companies so far, from WordPress
              to Next.js.
            </p>
          </div>
        </section>

        <div
          className={`flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4.5 bg-hot text-[#121212] font-semibold ${bleed}`}
        >
          <p className="lg:text-lg">
            <span className="mr-3 uppercase font-[850] [font-stretch:125%]">Available</span>
            On-site in Indonesia · Remote · Relocation
          </p>
          <div className="flex gap-2 text-sm">
            {resume && (
              <a
                href={resume}
                {...external(resume)}
                className="border-2 border-[#121212] px-3.5 py-2 transition-colors hover:bg-[#121212] hover:text-hot"
              >
                Download CV
              </a>
            )}
            <a
              href={`mailto:${email}`}
              className="border-2 border-[#121212] px-3.5 py-2 transition-colors hover:bg-[#121212] hover:text-hot"
            >
              Email me
            </a>
          </div>
        </div>

        <section aria-label="Experience">
          <SectionHeading num="01" title="Experience" />
          {experiences.map((exp) => (
            <Row key={exp.name} {...exp} />
          ))}
        </section>

        <section aria-label="Selected work">
          <SectionHeading num="02" title="Selected work" />
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              {...external(project.link)}
              className="group grid lg:grid-cols-12 gap-x-4 gap-y-2.5 pt-5.5 pb-7.5 border-t border-ink last:border-b"
            >
              <span className="lg:col-span-3 text-sm font-medium text-dim">{project.date || '—'}</span>
              <h3 className="lg:col-span-6 text-[clamp(34px,5.6vw,84px)] leading-[0.9] font-[850] tracking-[-0.03em] [font-stretch:112%] transition duration-200 group-hover:text-hot group-hover:translate-x-2.5 motion-reduce:group-hover:translate-x-0">
                {project.title}
              </h3>
              <p className="lg:col-span-3 text-sm font-semibold">
                {project.role}
                <span className="block mt-1.5 font-normal text-dim">{project.tags.join(', ')}</span>
              </p>
              <p className="lg:col-start-4 lg:col-span-6 max-w-[52ch]">{project.description}</p>
            </a>
          ))}
        </section>

        <section aria-label="Toolbox">
          <SectionHeading num="03" title="Toolbox" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
            {skills.map((skill) => (
              <div key={skill.group}>
                <h3 className="mb-2.5 pb-2 border-b border-ink text-[13px] font-bold">{skill.group}</h3>
                <ul className="text-lg leading-normal font-medium">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-label="Education">
          <SectionHeading num="04" title="Education" />
          {educations.map((edu) => (
            <Row key={edu.name} {...edu} />
          ))}
        </section>
      </main>

      <footer className="mt-28 lg:mt-36 border-t-[3px] border-ink pt-3.5">
        <a
          href={`mailto:${email}`}
          className="block mt-2 text-[17vw] leading-[0.8] font-[850] tracking-[-0.03em] uppercase whitespace-nowrap [font-stretch:125%] transition-colors hover:text-hot"
        >
          Hiring?
        </a>
        <p className="mt-6 text-dim">I reply faster than I overthink. Usually.</p>
        <div className="flex flex-wrap gap-x-8 gap-y-2 pt-6 pb-6 text-[clamp(18px,2vw,26px)] font-semibold">
          {[{ name: email, link: `mailto:${email}` }, ...mainLinks.filter((e) => e.name !== 'Email'), ...otherLinks].map(
            (e) => (
              <a key={e.name} href={e.link} {...external(e.link)} className="border-b-2 border-hot">
                {e.name}
              </a>
            )
          )}
        </div>
        <div className="flex justify-between py-4 pb-6 border-t border-ink text-[13px] text-dim">
          <span>© {new Date().getFullYear()} Wahyu Sattriana</span>
          <span>Bali, Indonesia</span>
        </div>
      </footer>
    </div>
  );
}
