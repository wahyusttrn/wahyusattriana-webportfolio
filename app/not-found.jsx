import { profile } from '@/data/profile';

// Overrides the layout's "index, follow" so it doesn't contradict the noindex Next.js adds
export const metadata = {
  title: 'Page not found - Wahyu Sattriana',
  robots: { index: false, follow: true }
};

const wrap = 'max-w-[1440px] mx-auto px-4 lg:px-8';

const button = 'border-2 border-[#121212] px-3.5 py-2 transition-colors hover:bg-[#121212] hover:text-hot';

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="border-b border-ink">
        <div className={`flex justify-between py-3.5 text-[13px] font-medium ${wrap}`}>
          <a href="/" className="border-b border-transparent hover:border-current">
            {profile.name}
          </a>
          <span className="text-dim">Error 404</span>
        </div>
      </header>

      <main className="flex flex-1 flex-col justify-center py-12">
        <div className={wrap}>
          <h1 className="text-[min(30vw,400px)] leading-[0.8] font-[850] tracking-[-0.04em] [font-stretch:125%]">
            404<span className="text-hot">.</span>
          </h1>
          <div className="grid lg:grid-cols-12 gap-x-4 pt-10 pb-14">
            <p className="lg:col-start-4 lg:col-span-8 text-[clamp(26px,3.4vw,50px)] leading-[1.08] font-medium tracking-[-0.015em]">
              This page doesn't exist. I probably overthought it out of existence.
            </p>
          </div>
        </div>

        <div className="bg-hot text-[#121212] font-semibold">
          <div className={`flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4.5 ${wrap}`}>
            <p className="lg:text-lg">
              <span className="mr-3 uppercase font-[850] [font-stretch:125%]">Lost?</span>
              Try one of these instead
            </p>
            <div className="flex gap-2 text-sm">
              <a href="/" className={button}>
                Home
              </a>
              <a href="/cv" className={button}>
                CV
              </a>
              <a href={`mailto:${profile.email}`} className={button}>
                Email me
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-ink">
        <div className={`flex justify-between py-4 pb-6 text-[13px] text-dim ${wrap}`}>
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Bali, Indonesia</span>
        </div>
      </footer>
    </div>
  );
}
