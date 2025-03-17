import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center w-full h-20 font-[family-name:var(--font-lexend)] bg-(--color-foreground) absolute px-14 md:px-24 text-(--color-background) mt-16">
      <Link className="font-normal" href={"mailto:wahyusattriana@gmail.com"}>wahyusattriana@gmail.com</Link>
      <h1 className="font-normal">©2025</h1>
    </footer>
  )
}