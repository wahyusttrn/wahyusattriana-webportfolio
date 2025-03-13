import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center font-[family-name:var(--font-lexend)]">
      <main className="flex flex-col items-center justify-center h-screen gap-3">
        <h2 className="font-[family-name:var(--font-lexend)] text-[4vh]">Hi, my name is Wahyu Sattriana and i am a freelance</h2>
        <h1 className="font-[family-name:var(--font-league-gothic)] text-center text-[35vh]/[28vh]">DESIGNER & <br/> <span className="text-(--color-background) text-outline">WEBDEVELOPER</span></h1>
      </main>
    </div>
  );
}