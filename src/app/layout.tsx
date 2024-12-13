// app/layout.tsx
import { Raleway, Alegreya } from "next/font/google";
import "/src/styles/globals.css";
import "flowbite/dist/flowbite.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisScrollProvider from "./providers/lenis-provider";
import { Metadata } from "next";

const headingFont = Raleway({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-headingFont",
});

const bodyFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bodyfont",
});

export const metadata: Metadata = {
  title: "Medy D'Avino",
  description:
    "Interpreter, Translator, Project Manager - Italian, English, Spanish",
  icons: {
    icon: "/mdlingLogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="bg-medy-colors flex flex-col min-h-screen bg-no-repeat bg-fixed">
        <LenisScrollProvider>
          <main className="flex-grow">{children}</main>
        </LenisScrollProvider>

        <Footer />
      </body>
    </html>
  );
}
