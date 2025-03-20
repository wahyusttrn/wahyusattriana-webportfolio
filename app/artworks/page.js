import Image from "next/image";
import Link from "next/link";
import PageTitle from "../components/PageTitle";

export default function Artworks() {
  const companies = [
    { name: "eiji_sushi", path: "/artworks/companies/eiji_sushi.svg", redirect: "./artworks/eiji_sushi" },
    { name: "makmur_raya", path: "/artworks/companies/makmur_raya.svg", redirect: "./artworks/makmur_raya" },
  ];
  const featurings = [
    { name: "fon", path: "/artworks/featurings/fon.svg", redirect: "./artworks/fon" },
    { name: "singarockland", path: "/artworks/featurings/singarockland.svg", redirect: "./artworks/singarockland" },
    { name: "kontras", path: "/artworks/featurings/kontras.svg", redirect: "./artworks/kontras" },
    { name: "morpheus", path: "/artworks/featurings/morpheus.svg", redirect: "./artworks/morpheus" },
    { name: "nutri_bakery", path: "/artworks/featurings/nutri_bakery.svg", redirect: "./artworks/nutri_bakery" },
  ];
  const others = [
    { name: "web_apps", path: "/artworks/others/web_apps.svg", redirect: "./artworks/web_apps" },
    { name: "films", path: "/artworks/others/films.svg", redirect: "./artworks/films" },
  ];

  return (
    <div className="flex flex-col items-center justify-center font-[family-name:var(--font-lexend)]">
      <PageTitle variant={"filled"}>ARTWORKS</PageTitle>
      <div className="flex flex-col gap-10 justify-center">
        <section className="flex flex-col items-center justify-center w-[90vw] gap-4">
          <h2 className="font-[family-name:var(--font-lexend)] sm:text-xl text-lg">Companies i have worked with</h2>
          <div className="w-[90vw] flex flex-wrap justify-center items-center gap-3">
            {companies.map((company, i) => (
              <Link key={i} href={company.redirect} className="h-36">
                <Image className="h-full w-auto" src={company.path} width={500} height={500} alt={company.name} />
              </Link>
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-[90vw] gap-4">
          <h2 className="font-[family-name:var(--font-lexend)] sm:text-xl text-lg">Comunity/Featuring Projects</h2>
          <div className="w-[90vw] flex flex-wrap justify-center items-center gap-3">
            {featurings.map((featuring, i) => (
              <Link key={i} href={featuring.redirect} className="h-36">
                <Image className="h-full w-auto" src={featuring.path} width={500} height={500} alt={featuring.name} />
              </Link>
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-[90vw] gap-4">
          <h2 className="font-[family-name:var(--font-lexend)] sm:text-xl text-lg">Other Projects</h2>
          <div className="w-[90vw] flex flex-wrap justify-center items-center gap-3">
            {others.map((other, i) => (
              <Link key={i} href={other.redirect} className="h-36">
                <Image className="h-full w-auto" src={other.path} width={500} height={500} alt={other.name} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}