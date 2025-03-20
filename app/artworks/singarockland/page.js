import PageTitle from "../../components/PageTitle";
import Image from "next/image";

export default function artwork_child() {
  let photos = [];
  for (let i = 1; i <= 6; i++) {
    photos.push({ name: "singarockland" + i, path: "/artworks/featurings/singarockland/" + i + ".png" });
  }

  return (
    <div className="flex flex-col items-center justify-center font-[family-name:var(--font-lexend)]">
      <PageTitle variant={"filled"}>SINGAROCKLAND</PageTitle>
      <h2 className="font-[family-name:var(--font-lexend)] sm:text-xl text-lg mb-5 text-center px-4">Feeds - Poster - Lanyard - Bumper motion - Header - More</h2>
      <section className="sm:max-w-[70vw] max-w-[90vw] flex flex-wrap justify-center items-center gap-5">
        {photos.map((photo, j) => (
          <div key={j} className="h-52">
            <Image className="h-full w-auto" src={photo.path} width={500} height={500} alt={photo.name} />
          </div>
        ))}
      </section>
    </div>
  );
}