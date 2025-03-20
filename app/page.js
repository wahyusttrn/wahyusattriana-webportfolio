import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  const socials = [
    { redirect: "https://www.instagram.com/wahyusttrn/", name: "Instagram", path: "/socials/Instagram.svg" },
    { redirect: "https://github.com/WahyuSattriana", name: "GitHub", path: "/socials/GitHub.svg" },
    { redirect: "https://www.linkedin.com/in/wahyusattriana/", name: "Linkedn", path: "/socials/Linkedn.svg" },
    { redirect: "https://www.youtube.com/@wahyusattriana", name: "YouTube", path: "/socials/YouTube.svg" },
    { redirect: "https://dribbble.com/wahyusttrn", name: "Dribbble", path: "/socials/Dribbble.svg" },
    { redirect: "https://www.figma.com/@wahyusattriana", name: "Figma", path: "/socials/Figma.svg" },
    { redirect: "https://pinterest.com/wahyusttrn/", name: "Pinterest", path: "/socials/Pinterest.svg" },
    { redirect: "https://www.shutterstock.com/g/wahyusttrn", name: "Shutterstock", path: "/socials/Shutterstock.svg" },
    { redirect: "https://lightroom.app.link/yrhgIKtuibb", name: "Lightroom", path: "/socials/Lightroom.svg" },
    { redirect: "https://medium.com/@wahyusattriana", name: "Medium", path: "/socials/Medium.svg" },
  ]
  return (
    <div className="flex flex-col items-center justify-center font-[family-name:var(--font-lexend)] overflow-hidden">
      <main className="flex flex-col items-center justify-center h-screen w-[100vw]">
        <div className="md:h-[80vh] md:w-[90vw] flex flex-col items-center justify-center gap-3 m-0 md:mb-[-40vh]">
          <h2 className="font-[family-name:var(--font-lexend)] text-[3vw] md:text-[2vw]">Hi, my name is Wahyu Sattriana and i am a freelance</h2>
          <h1 className="font-[family-name:var(--font-league-gothic)] text-center text-[20vw]/[17vw] md:text-[16vw]/[13vw]">DESIGNER &<br/><span className="md:text-(--color-background) text-(--color-foreground) text-outline">WEBDEVELOPER</span></h1>
        </div>
        <div className="w-screen flex items-center justify-center">
          <div className="flex justify-between items-baseline w-[70%]">
            <h3 className="font-light text-[2vw] sm:text-[1.5vw]">Based on<br/>Bali, Indonesia</h3>
            <Image src="/heroPhoto.png" width={500} height={500} alt="Wahyu Sattriana" className="md:w-[40%] w-[50%]"/>
            <h3 className="font-light text-[2vw] sm:text-[1.5vw] text-end">Available<br/>to be hired.</h3>
          </div>
        </div>
      </main>
      <section className="flex flex-col md:flex-row items-center justify-center sm:h-[100vh] h-[60vh] sm:w-[70vw] w-[85vw] gap-[5vw]">
        <div className="flex flex-col items-start justify-center sm:w-md md:order-2">
          <h1 className="font-semibold sm:text-2xl text-lg">Who am I?</h1>
          <p className="font-normal sm:text-sm text-xs text-justify">
            Hello. I am a web developer and graphic designer who loves to explore infinite amount of styles and creativity. I have learn to design and code since years until now whereas been worked on multiple projects. I have worked for companies, events, school projects, individuals, also many more. I can either work alone or groups and experienced to handle pressures. If you are interested, I guarantee the best project that suits you!
          </p>
          <div className="flex gap-2 mt-7 justify-center md:justify-start w-full">
            <Button variant={"outline"} href={"/career"}>My journey</Button>
            <Button variant={"filled"} href={"/artworks"}>What I have done</Button>
          </div>
        </div>
        <div className="sm:w-2xs w-3xs grid grid-cols-5 sm:gap-1 gap-2">
          {socials.map((social, i) => (
            <Link key={i} href={social.redirect} target="blank">
              <Image src={social.path} width={500} height={500} alt={social.name} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}