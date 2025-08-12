'use client';

import Link from 'next/link';

export function SmoothScrollNav({ mobile = false, onClick }) {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Link
        href="#home"
        onClick={(e) => {
          handleSmoothScroll(e, 'home');
          onClick?.();
        }}
        className={`text-foreground/70 hover:text-foreground transition-colors font-medium cursor-pointer ${
          mobile ? 'block py-2' : ''
        }`}
      >
        Home
      </Link>
      <Link
        href="#experience"
        onClick={(e) => {
          handleSmoothScroll(e, 'experience');
          onClick?.();
        }}
        className={`text-foreground/70 hover:text-foreground transition-colors font-medium cursor-pointer ${
          mobile ? 'block py-2' : ''
        }`}
      >
        Experience
      </Link>
      <Link
        href="#projects"
        onClick={(e) => {
          handleSmoothScroll(e, 'projects');
          onClick?.();
        }}
        className={`text-foreground/70 hover:text-foreground transition-colors font-medium cursor-pointer ${
          mobile ? 'block py-2' : ''
        }`}
      >
        Projects
      </Link>
    </>
  );
}
