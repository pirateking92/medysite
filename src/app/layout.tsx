// app/layout.tsx
import { Raleway, Alegreya } from "next/font/google";
import "/src/app/globals.css";
import "flowbite/dist/flowbite.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const headingFont = Raleway({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-headingFont",
});

const bodyFont = Alegreya({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bodyfont",
});

export const metadata = {
  title: "Medy D'Avino",
  description:
    "Interpreter, Translator, Project Manager - Italian, English, Spanish",
  icons: {
    icon: "/2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="bg-black-to-navy flex flex-col min-h-screen bg-no-repeat bg-fixed">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
