import Image from "next/image";
import PageTitle from "../components/PageTitle";

export default function About() {
  const photos = [
    { name: "me1", path: "/myself/me1.png" },
    { name: "me2", path: "/myself/me2.png" },
    { name: "me3", path: "/myself/me3.png" },
    { name: "me4", path: "/myself/me4.png" },
  ];
  return (
    <div className="flex flex-col items-center justify-center font-[family-name:var(--font-lexend)]">
      <PageTitle variant={"filled"}>CAREER</PageTitle>
      <section className="flex flex-col sm:flex-row sm:items-start items-center justify-center sm:w-[70vw] w-[85vw] md:gap-40 sm:gap-10 gap-10">
        <div className="sm:w-[200px] w-[75vw] h-auto flex sm:flex-col sm:gap-10 gap-2 sm:order-0 order-1 flex-wrap">
            {photos.map((photo, i) => (
              <div key={i} className="sm:w-[200px] w-[36vw]">
                <Image src={photo.path} width={500} height={500} alt={photo.name} />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-10 sm:w-md">
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-semibold sm:text-2xl text-lg">Part of SATGAS 22/23</h1>
              <p className="font-normal sm:text-sm text-xs text-justify">
                SATGAS (Satuan Petugas) is a student organization in SMA Negeri 1 Singaraja which preparing the ones to be a part of DOK (school’s Government Miniature).
              </p>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-semibold sm:text-2xl text-lg">Head of Citius Robotic Club</h1>
              <p className="font-normal sm:text-sm text-xs text-justify">
                CRC (Citius Robotic Club) is a robotics and electronics extracurricular community based in SMA Negeri 1 Singaraja.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-semibold sm:text-2xl text-lg">Part of CIPS</h1>
              <p className="font-normal sm:text-sm text-xs text-justify">
                CIPS (Cinematography and Photography SMANSA Singaraja) is an extracurricular community based in SMA Negeri 1 Singaraja.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-semibold sm:text-2xl text-lg">24’s Student Council President</h1>
              <p className="font-normal sm:text-sm text-xs text-justify">
                Elected to be Student Council President of SMA Negeri 1 Singaraja.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-semibold sm:text-2xl text-lg">Part of SINGAROCKLAND’s Media and Designs Division</h1>
              <p className="font-normal sm:text-sm text-xs text-justify">
                SINGAROCKLAND is one of the biggest music festival in Singaraja, Bali.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-semibold sm:text-2xl text-lg">Top 50 Best Indonesian Student Council President by IPB OSIS Fest Batch 3</h1>
              <p className="font-normal sm:text-sm text-xs text-justify">
                IPB OSIS Fest is an event held by IPB University which gathering the top 50 best Indonesian student council president through the selection of individual’s innovation essay and public speaking videos.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-semibold sm:text-2xl text-lg">Top 100 Best Indonesian Student Council President by ISLC</h1>
              <p className="font-normal sm:text-sm text-xs text-justify">
                ISLC (Indonesia Student Leadership Camp) is an annual event held by Universitas Indonesia and Forum OSIS Nasional which seeking 100 best student council president through the selection of individual’s innovation essay and public speaking videos.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-semibold sm:text-2xl text-lg">Head of Creative and Designs Department at Forum OSIS Nasional XII</h1>
              <p className="font-normal sm:text-sm text-xs text-justify">
                Forum OSIS Nasional is filled with the best student council president which previously selected by the ISLC’s event.
              </p>
            </div>
          </div>
      </section>
    </div>
  )
}