import Image from 'next/image';
import profilePhoto from '@/public/Profile-2.webp';
import { BaliClock } from '@/components/bali-clock';
import { ThemeToggle } from '@/components/theme-toggle';
import { profile, socials, experiences, educations, projects, skills } from '@/data/profile';
import { withDuration } from '@/lib/dates';

const email = `mailto:${profile.email}`;

const mainLinks = [{ name: 'CV', link: '/cv' }, { name: 'Email', link: email }, socials.linkedin, socials.github];

const footerLinks = [
  { name: profile.email, link: email },
  ...mainLinks.filter((e) => e.name !== 'Email'),
  socials.medium,
  socials.instagram,
  socials.youtube
];

// Rebuild daily so "Present" month counts stay current
export const revalidate = 86400;

export const metadata = { alternates: { canonical: '/' } };

// Structured data so search engines know who the page is about
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  alternateName: profile.fullName,
  jobTitle: profile.title,
  url: profile.website,
  email: `mailto:${profile.email}`,
  image: `${profile.website}/Profile-2.webp`,
  address: { '@type': 'PostalAddress', addressLocality: 'Denpasar', addressRegion: 'Bali', addressCountry: 'ID' },
  worksFor: { '@type': 'Organization', name: 'BoltBlue' },
  sameAs: Object.values(socials).map((e) => e.link)
};

const external = (link) => (link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {});

// Content stays within this width; every horizontal rule and band runs the full screen width
const wrap = 'max-w-[1440px] mx-auto px-4 lg:px-8';

function SectionHeading({ num, title }) {
  return (
    <div className="border-t-[3px] border-ink mt-20 lg:mt-28 mb-8 lg:mb-10">
      <div className={`grid lg:grid-cols-12 gap-x-4 items-start pt-3.5 ${wrap}`}>
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
    </div>
  );
}

function Row({ name, role, date, month, description }) {
  return (
    <article className="group border-t border-ink last:border-b transition-colors duration-200 hover:bg-ink hover:text-paper">
      <div className={`grid lg:grid-cols-12 gap-x-4 gap-y-2 pt-5 pb-7 ${wrap}`}>
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
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
      />
      <header className="border-b border-ink">
        <div className={`grid grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-2 py-3.5 text-[13px] font-medium ${wrap}`}>
          <span className="lg:col-span-3">{profile.name}</span>
          <span className="hidden lg:block lg:col-span-3">{profile.title}</span>
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
        </div>
      </header>

      <main>
        <div className={wrap}>
          <Image
            src={profilePhoto}
            alt={profile.name}
            width={200}
            height={200}
            priority
            className="lg:hidden mt-6 size-[clamp(96px,28vw,200px)] object-cover"
          />
          <h1 className="mt-5 lg:mt-7 text-[min(12vw,168px)] leading-[0.8] font-[850] tracking-[-0.02em] uppercase whitespace-nowrap [font-stretch:125%]">
            Wahyu
            <br />
            Sattriana<span className="text-hot">.</span>
          </h1>

          <section className="grid lg:grid-cols-12 gap-x-4 gap-y-6 pt-12 pb-14">
            <p className="lg:col-span-3 text-[13px] font-medium">
              <Image
                src={profilePhoto}
                alt={profile.name}
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
                <b className="text-hot font-extrabold">130+</b> sites for Australian companies. Also love tinkering low-level and complex stuff.
              </p>
            </div>
          </section>
        </div>

        <div className="bg-hot text-[#121212] font-semibold">
          <div className={`flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4.5 ${wrap}`}>
            <p className="lg:text-lg">
              <span className="mr-3 uppercase font-[850] [font-stretch:125%]">Available</span>
              {profile.availability.join(' · ')}
            </p>
            <div className="flex gap-2 text-sm">
              <a
                href="/cv"
                className="border-2 border-[#121212] px-3.5 py-2 transition-colors hover:bg-[#121212] hover:text-hot"
              >
                Download CV
              </a>
              <a
                href={email}
                className="border-2 border-[#121212] px-3.5 py-2 transition-colors hover:bg-[#121212] hover:text-hot"
              >
                Email me
              </a>
            </div>
          </div>
        </div>

        <section aria-label="Experience">
          <SectionHeading num="01" title="Experience" />
          {experiences.map(withDuration).map((exp) => (
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
              className="group block border-t border-ink last:border-b"
            >
              <div className={`grid lg:grid-cols-12 gap-x-4 gap-y-2.5 pt-5.5 pb-7.5 ${wrap}`}>
                <span className="lg:col-span-3 text-sm font-medium text-dim">{project.date}</span>
                <h3 className="lg:col-span-6 text-[clamp(34px,5.6vw,84px)] leading-[0.9] font-[850] tracking-[-0.03em] [font-stretch:112%] transition duration-200 group-hover:text-hot group-hover:translate-x-2.5 motion-reduce:group-hover:translate-x-0">
                  {project.title}
                </h3>
                <p className="lg:col-span-3 text-sm font-semibold">
                  {project.role}
                  <span className="block mt-1.5 font-normal text-dim">{project.tags.join(', ')}</span>
                </p>
                <p className="lg:col-start-4 lg:col-span-6 max-w-[52ch]">{project.description}</p>
              </div>
            </a>
          ))}
        </section>

        <section aria-label="Toolbox">
          <SectionHeading num="03" title="Toolbox" />
          <div className={`grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8 ${wrap}`}>
            {skills
              .filter((skill) => skill.home !== false)
              .map((skill) => (
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
          {educations.map(withDuration).map((edu) => (
            <Row key={edu.name} {...edu} />
          ))}
        </section>
      </main>

      <footer className="mt-28 lg:mt-36 border-t-[3px] border-ink">
        <div className={`pt-3.5 ${wrap}`}>
          <a
            href={email}
            className="block mt-2 text-[min(17vw,240px)] leading-[0.8] font-[850] tracking-[-0.03em] uppercase whitespace-nowrap [font-stretch:125%] transition-colors hover:text-hot"
          >
            Hiring?
          </a>
          <p className="mt-6 text-dim">I reply faster than I overthink. Usually.</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 pt-6 pb-6 text-[clamp(18px,2vw,26px)] font-semibold">
            {footerLinks.map((e) => (
              <a key={e.name} href={e.link} {...external(e.link)} className="border-b-2 border-hot">
                {e.name}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-ink">
          <div className={`flex justify-between py-4 pb-6 text-[13px] text-dim ${wrap}`}>
            <span>
              © {new Date().getFullYear()} {profile.name}
            </span>
            <span>Bali, Indonesia</span>
          </div>
        </div>
      </footer>
    </>
  );
}
