export default function PageTitle({ children, variant}) {
  const container = "sm:h-[80vh] h-[60vh] md:w-[90vw] flex flex-col items-center justify-center"
  const text = {
    filled: "font-[family-name:var(--font-league-gothic)] text-center text-[20vw]/[17vw] md:text-[16vw]/[13vw]",
    outline: "font-[family-name:var(--font-league-gothic)] text-center text-[20vw]/[17vw] md:text-[16vw]/[13vw] text-outline text-(--color-background)",
  };

  return <div className={container}><h1 className={text[variant]}>{children}</h1></div>
}