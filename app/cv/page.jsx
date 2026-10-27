import { PrintButton } from '@/components/print-button';
import { profile, socials, experiences, educations, projects, skills, certifications } from '@/data/profile';
import { formatRange } from '@/lib/dates';

// The browser uses the title as the default PDF file name
const description = `CV of ${profile.name}, ${profile.title} based in ${profile.location}.`;

export const metadata = {
  title: 'Wahyu Sattriana - CV',
  description,
  alternates: { canonical: '/cv' },
  openGraph: {
    title: 'Wahyu Sattriana - CV',
    description,
    url: '/cv',
    siteName: 'Wahyu Sattriana Portfolio',
    locale: 'en_US',
    type: 'profile'
  }
};

// The CV stays on white paper whatever the site theme is
const paperColors = { '--paper': '#ffffff', '--ink': '#121212', '--dim': '#5f5c55', '--hot': '#ff3d00' };

// Printed copies can't be clicked, so links show their address
const display = (link) => link.replace(/^(mailto:|https?:\/\/)(www\.)?/, '').replace(/\/$/, '');

const contacts = [
  { name: profile.email, link: `mailto:${profile.email}` },
  { name: display(profile.website), link: profile.website },
  { name: display(socials.linkedin.link), link: socials.linkedin.link },
  { name: display(socials.github.link), link: socials.github.link }
];

// Ligatures are off because some browsers (Firefox) export fi/fl ligatures without their letters,
// turning "workflow" into "workow" for anything that reads the PDF's text
function Sheet({ children }) {
  return (
    <article
      style={paperColors}
      className="mx-auto w-full max-w-[210mm] bg-paper px-5 py-8 text-[9.5pt] leading-[1.45] text-ink [font-variant-ligatures:none] shadow-[0_1px_2px_rgba(0,0,0,0.12),0_12px_40px_rgba(0,0,0,0.18)] sm:min-h-[297mm] sm:p-[14mm] print:min-h-0 print:w-[210mm] print:max-w-none print:break-after-page print:p-[14mm] print:shadow-none print:last:break-after-auto"
    >
      {children}
    </article>
  );
}

function Section({ num, title, children }) {
  return (
    <section className="mt-6 first:mt-0">
      <h2 className="mb-3 flex items-baseline gap-2 border-b-2 border-ink pb-1 text-[10.5pt] font-extrabold uppercase tracking-[0.06em]">
        <span className="text-hot [font-stretch:125%]">{num}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Entry({ title, subtitle, date, children }) {
  return (
    <div className="mb-3.5 break-inside-avoid last:mb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
        <h3 className="text-[10.5pt]">
          <b>{title}</b>
          {subtitle && <span className="text-dim"> · {subtitle}</span>}
        </h3>
        <span className="text-[9pt] text-dim sm:whitespace-nowrap">{date}</span>
      </div>
      {children}
    </div>
  );
}

function Bullets({ items }) {
  return (
    <ul className="mt-1 list-[square] space-y-0.5 pl-4 marker:text-hot">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const linkStyle = 'underline decoration-dim/50 underline-offset-2';

export default function CvPage() {
  return (
    <div className="min-h-screen bg-[#dcdad3] px-3 pb-12 sm:px-6 dark:bg-[#0b0b0b] print:bg-white! print:p-0">
      <div className="mx-auto flex max-w-[210mm] items-center justify-between gap-4 py-4 text-sm font-medium print:hidden">
        <a href="/" className="border-b border-transparent hover:border-current">
          Back to site
        </a>
        <div className="flex items-center gap-3">
          <span className="hidden text-dim sm:inline">Choose “Save as PDF” in the print dialog</span>
          <PrintButton />
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8 print:space-y-0">
        <Sheet>
          <header className="mb-5 border-b-[3px] border-ink pb-4">
            <h1 className="text-[clamp(20px,6vw,22pt)] leading-[0.95] font-[850] uppercase [font-stretch:125%]">
              {profile.fullName}
            </h1>
            <p className="mt-2 text-[12pt] font-bold">{profile.title}</p>
            <p className="mt-2 flex flex-wrap gap-x-2 text-[9pt]">
              {contacts.map((e, i) => (
                <span key={e.link}>
                  {i > 0 && <span className="mr-2 text-dim">|</span>}
                  <a href={e.link} className={linkStyle}>
                    {e.name}
                  </a>
                </span>
              ))}
            </p>
            <p className="mt-1 text-[9pt] text-dim">
              {profile.location} ({profile.timezone}) · Available: {profile.availability.join(', ')}
            </p>
          </header>

          <p className="mb-6">{profile.summary}</p>

          <Section num="01" title="Experience">
            {experiences.map((exp) => (
              <Entry key={exp.name} title={exp.name} subtitle={exp.role} date={formatRange(exp.start, exp.end)}>
                <Bullets items={exp.description} />
              </Entry>
            ))}
          </Section>

          <Section num="02" title="Projects">
            {projects.map((project) => (
              <Entry key={project.title} title={project.title} subtitle={project.role} date={project.date}>
                <p className="mt-0.5">{project.description}</p>
                <p className="text-[9pt] text-dim">
                  {project.tags.join(', ')} ·{' '}
                  <a href={project.link} className={linkStyle}>
                    {display(project.link)}
                  </a>
                </p>
              </Entry>
            ))}
          </Section>
        </Sheet>

        <Sheet>
          <Section num="03" title="Skills">
            <dl className="grid grid-cols-1 gap-x-4 sm:grid-cols-[110px_1fr]">
              {skills.map((skill) => (
                <div key={skill.group} className="contents">
                  <dt className="font-bold">{skill.group}</dt>
                  <dd className="mb-1.5 sm:mb-1">{skill.items.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section num="04" title="Education">
            {educations.map((edu) => (
              <Entry key={edu.name} title={edu.name} subtitle={edu.role} date={formatRange(edu.start, edu.end)}>
                <Bullets items={edu.description} />
                {edu.link && (
                  <a href={edu.link.link} className={`mt-1 inline-block text-[9pt] ${linkStyle}`}>
                    {edu.link.name}
                  </a>
                )}
              </Entry>
            ))}
          </Section>

          <Section num="05" title="Certifications">
            {certifications.map((cert) => (
              <Entry key={cert.name} title={cert.name} subtitle={cert.note} date={cert.date}>
                <p className="mt-0.5">
                  {cert.items.map((item, i) => (
                    <span key={item.name}>
                      {i > 0 && ', '}
                      <a href={item.link} className={linkStyle}>
                        {item.name}
                      </a>
                    </span>
                  ))}
                </p>
              </Entry>
            ))}
          </Section>
        </Sheet>
      </div>
    </div>
  );
}
