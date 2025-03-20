import PageTitle from "../../components/PageTitle";
import Image from "next/image";

export default function artwork_child() {
  let photos = [];
  for (let i = 1; i <= 8; i++) {
    photos.push({ name: "fon" + i, path: "/artworks/featurings/fon/" + i + ".png" });
  }

  return (
    <div className="flex flex-col items-center justify-center font-[family-name:var(--font-lexend)]">
      <div className="mt-10"></div> {/* conditional */}
      <PageTitle variant={"filled"}>FORUM OSIS NASIONAL</PageTitle>
      <h2 className="font-[family-name:var(--font-lexend)] sm:text-xl text-lg mb-5 text-center px-4">Feeds - Varsity - Essay videos - More</h2>
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