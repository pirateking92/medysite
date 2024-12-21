"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import SmokeFadeIn from "./SmokeFadeIn";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main>
      {/* div for initial text and intro */}
      <div className="flex flex-col justify-center text-black text-font-bold min-h-screen px-10 text-3xl text-left bg-[url(/medyBanner.png)] bg-fixed bg-no-repeat bg-cover">
        {" "}
        <SmokeFadeIn visibleOnLoad={false}>
          <div className="lg:w-[50vh] md:w-[50vh]">
            <h1 className="mb-10 text-5xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              MDLinguistics
            </h1>
            <h2 className="mb-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              Comprehensive language solutions, catered to your needs
            </h2>
            <p className="bg-sky-50 bg-opacity-30 rounded-full sm:pr-30 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              Explore our expert translation, interpreting, localization, and
              consultation services, designed to elevate your global
              communication
            </p>
          </div>
          <div className="flex flex-col justify-center items-start pt-20">
            <Link href="/contact">
              <button className="shadow-[inset_0_0_0_2px_#000] z-50 text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                Consult
              </button>
            </Link>
          </div>
        </SmokeFadeIn>
      </div>
      <div
        className="flex flex-col-reverse
                 md:flex-row
                 justify-center
                 items-center
                 min-h-screen
                 p-4
                 pt-24
                 space-y-6
                 md:space-x-8
                 md:space-y-0
                 max-w-7xl
                 mx-auto
        "
      >
        <SmokeFadeIn visibleOnLoad={false}>
          <Card
            className="w-full
                     
                     max-w-xl
                     shadow-lg
                     border
                     border-gray-200
                     rounded-lg
                     overflow-hidden
          "
          >
            <CardHeader className="bg-gray-50 p-6">
              <CardTitle className="text-2xl font-bold text-gray-800">
                Medy D'Avino
              </CardTitle>
            </CardHeader>
            <CardDescription className="px-6 pt-2 text-gray-900 text-xl prose-2xl">
              <p>Translator, Interpreter - Italian, English, Spanish </p>
              <p>The face behind MD Linguistic Solutions</p>
            </CardDescription>
            <CardContent className="p-6">
              <p className="text-gray-700 prose-md mb-4">
                Driven by a genuine passion for helping people understand and be
                understood.
              </p>

              <p className="text-gray-700 prose-md mb-4">
                Medy's passion for communication took a transformative turn
                after a few years in the field. With a natural talent for
                creative writing, marketing, and communication, coupled with a
                love for entrepreneurship, she realized that helping businesses
                reach new audiences was her true calling.
              </p>

              <p className="text-gray-700 prose-md mb-4">
                At the same time, her deep interest in medicine and law made it
                challenging to settle on just one niche—she knew that being a
                jack of all trades wouldn't foster the credibility she valued.
                Facing this reality, Medy chose to specialize in empowering
                businesses through tailored language solutions, while building a
                trusted network of colleagues to support clients in other
                specialized areas.
              </p>

              <p className="text-gray-700 prose-md mb-4">
                This collaborative vision is what led to the creation of MD
                Linguistic Solutions, where businesses and individuals alike
                find the expertise and support they need to communicate
                effectively and confidently.
              </p>
            </CardContent>
            <CardFooter className="bg-gray-50 p-6 text-sm text-gray-500">
              <p></p>
            </CardFooter>
          </Card>
        </SmokeFadeIn>
        <SmokeFadeIn visibleOnLoad={false}>
          <Image
            className="w-full
                   md:w-auto
                   rounded-xl
                  mb-5
                   max-w-md
                   object-cover
                   md:max-h-[800px]"
            src="/medyprofpic.png"
            alt="profile picture"
            width={800}
            height={800}
          />
        </SmokeFadeIn>
      </div>
    </main>
  );
}
