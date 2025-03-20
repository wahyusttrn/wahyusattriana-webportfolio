import PageTitle from "../../components/PageTitle";
import Image from "next/image";

export default function artwork_child() {
  let photos = [];
  for (let i = 1; i <= 2; i++) {
    photos.push({ name: "eiji" + i, path: "/artworks/companies/eiji_sushi/" + i + ".png" });
  }

  return (
    <div className="flex flex-col items-center justify-center font-[family-name:var(--font-lexend)]">
      <PageTitle variant={"filled"}>EIJI SUSHI</PageTitle>
      {photos.map((photo, j) => (
        <section key={j} className="sm:max-w-[70vw] max-w-[90vw] flex flex-wrap gap-5">
          <Image className="h-full w-auto" src={photo.path} width={500} height={500} alt={photo.name} />
        </section>
      ))}
    </div>
  );
}