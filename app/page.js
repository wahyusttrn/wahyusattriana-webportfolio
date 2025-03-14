import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center font-[family-name:var(--font-lexend)]">
      <main className="flex flex-col items-center justify-center sm:justify-center mt-28 md:mt-0 md:h-screen w-screen">
        <div className="md:h-[80%] md:w-[100%] flex flex-col items-center justify-center gap-3 m-0 md:mb-[-320px]">
          <h2 className="font-[family-name:var(--font-lexend)] text-[3vw] sm:text-[2vw]">Hi, my name is Wahyu Sattriana and i am a freelance</h2>
          <h1 className="font-[family-name:var(--font-league-gothic)] text-center text-[20vw]/[17vw] sm:text-[16vw]/[13vw]">DESIGNER &<br/><span className="text-(--color-background) text-outline">WEBDEVELOPER</span></h1>
        </div>
        <div className="w-screen flex items-center justify-center">
          <div className="flex justify-between items-baseline w-[70%]">
            <h3 className="font-light text-[2vw] sm:text-[1.5vw]">Based on<br/>Bali, Indonesia</h3>
            <Image src="/heroPhoto.png" width={500} height={500} alt="Wahyu Sattriana" className="md:w-[40%] w-[50%]"/>
            <h3 className="font-light text-[2vw] sm:text-[1.5vw] text-end">Available<br/>to be hired.</h3>
          </div>
        </div>
      </main>
    </div>
  );
}