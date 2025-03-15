import { Lexend, League_Gothic } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const leagueGothic = League_Gothic({
  variable: "--font-league-gothic",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wahyu Sattriana",
  description: "This is Wahyu Sattriana's Web Portfolio. Everything i have been doing or still on progress will be archived in here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${leagueGothic.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}