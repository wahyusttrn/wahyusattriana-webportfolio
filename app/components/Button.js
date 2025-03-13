import Link from "next/link";

export default function Button({ children, variant, href }) {
  const baseStyles = "px-7 py-3 rounded-lg font-semibold focus:outline-none transition duration-300 ease-in-out"
  const variantStyles = {
    filled: "bg-(--color-foreground) text-(--color-background) hover:bg-(--color-background) hover:text-(--color-foreground) hover:border hover:border-(--color-foreground)",
    outline: "bg-(--color-background) text-(--color-foreground) border border-(--color-foreground) hover:bg-(--color-foreground) hover:text-(--color-background)",
    text: "text-(--color-foreground) bg-transparent hover:underline",
    disabled: "disabled:bg-gray-300 pointer-events-none",
  };
  let buttonClasses = `${baseStyles} ${variantStyles[variant]}`;

  return <Link className={buttonClasses} href={href}>{children}</Link>
}