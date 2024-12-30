// app/layout.tsx
import { Raleway, Alfa_Slab_One } from "next/font/google";
import "/src/styles/globals.css";
import "flowbite/dist/flowbite.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisScrollProvider from "./providers/lenis-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

const headingFont = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-headingFont",
  display: "swap",
});

const bodyFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bodyfont",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MDLinguistics",
  description:
    "Interpretation, Translation, Project Management - Italian, English, Spanish",
  icons: {
    icon: "/mdlingLogoClean.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="bg-medy-colors">
        <LenisScrollProvider>
          <Navbar />

          <main className="flex-grow pt-32">{children}</main>
          <Footer />
        </LenisScrollProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
