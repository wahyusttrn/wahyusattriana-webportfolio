'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "./Button";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }

  const currentPath = usePathname();

  const pages = [
    { name: "About", path: "/" },
    { name: "Career", path: "/career" },
    { name: "Artworks", path: "/artworks" },
  ];

  const isActive = (path) => {
    return currentPath === path;
  };

  return (
    <div>
      <div className={menuOpen ? "fixed right-0 top-0 w-[65%] md:hidden h-screen bg-(--color-background) p-10 ease-in duration-300 z-20" : "fixed left-[100%] top-0 p-10 duration-300 z-20"}>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <ul className="flex flex-col gap-10">
            {pages.map((page, i) => (
              <li key={i} className="h-full flex items-center hover:font-semibold hover:underline hover:underline-offset-2 duration-100">
                <Link href={page.path} alt={page.name} className={isActive(page.path) ? 'px-4 py-3 font-semibold underline decoration-dotted decoration-(--color-foreground) underline-offset-2' : 'px-4 py-3'}>
                  {page.name}
                </Link>
            </li>
            ))}
          </ul>
          <Button variant={"filled"} href={"mailto:wahyusattriana@gmail.com"}>Email me!</Button>
        </div>
      </div>

      <div className={menuOpen ? "fixed md:hidden w-screen h-screen bg-(--color-foreground) opacity-15 duration-200 z-10" : "fixed ease-in w-0 h-0 duration-200 z-10"}></div>

      <nav className="fixed w-full h-20 font-[family-name:var(--font-lexend)] bg-(--color-background)">
        <div className="flex justify-between items-center w-full h-full px-14 md:px-24">
          <Link className="h-full flex items-center" href="">
            <h1 className="text-2xl font-extrabold tracking-[-3px]">wahyusttrn.</h1>
          </Link>
          <div className="hidden md:flex gap-[3vw]">
            <ul className="hidden md:flex gap-[2vw]">
              {pages.map((page, i) => (
                <li key={i} className="h-full flex items-center hover:font-semibold hover:underline hover:underline-offset-2 duration-100">
                  <Link href={page.path} alt={page.name} className={isActive(page.path) ? 'px-4 py-3 font-semibold underline decoration-dotted decoration-(--color-foreground) underline-offset-2' : 'px-4 py-3'}>
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button variant={"filled"} href={"mailto:wahyusattriana@gmail.com"}>Email me!</Button>
          </div>
          <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </nav>
    </div>
  )
}