"use client";
import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import SmokeFadeIn from "./SmokeFadeIn";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main>
      {/* div for initial text and intro */}
      <BackgroundGradientAnimation
        className="rounded"
        firstColor="#fdfa0"
        secondColor="#003366"
        thirdColor="#d8bf9f"
        fourthColor="fae8e0"
      >
        <div className="absolute z-50 inset-0 flex flex-col items-left justify-center text-white font-bold px-10 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          {" "}
          <SmokeFadeIn visibleOnLoad={false}>
            <h1 className="bg-clip-text text-left text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 pb-10">
              MDLinguistics
            </h1>
            <p className="bg-clip-text text-left text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 prose-lg">
              Explore our expert translation, interpreting, localization, and
              consultation services, designed to elevate your global
              communication
            </p>
          </SmokeFadeIn>
        </div>
      </BackgroundGradientAnimation>
      <div
        // Flex container to center content both horizontally and vertically
        // min-h-screen ensures it takes full viewport height
        className="flex justify-start items-center min-h-screen p-4 pt-24" //bg-[url('/medyprofpic.png')] bg-right bg-fixed bg-no-repeat"
      >
        <Card
          // w-1/2 makes card take up half the container width
          // max-w-xl prevents card from becoming too wide on large screens
          // shadow-lg adds a large shadow for depth
          // border adds a light gray outline
          // rounded-lg gives rounded corners
          // overflow-hidden prevents content from spilling outside rounded corners
          className="w-1/2 max-w-xl shadow-lg border border-gray-200 rounded-lg overflow-hidden"
        >
          <CardHeader
            // bg-gray-50 gives a light gray background
            // p-6 adds padding inside the header
            className="bg-gray-50 p-6"
          >
            <CardTitle
              // text-2xl makes the title larger
              // font-bold makes text bold
              // text-gray-800 gives a dark gray color
              className="text-2xl font-bold text-gray-800"
            >
              Medy D'Avino
            </CardTitle>
          </CardHeader>

          <CardDescription
            // px-6 adds horizontal padding
            // pt-2 adds small top padding
            // text-gray-600 gives a muted gray color
            className="px-6 pt-2 text-gray-600 prose-lg"
          >
            Translator, Interpreter - Italian, English, Spanish the face behind
            MD Linguistic Solutions
          </CardDescription>

          <CardContent
            // p-6 adds padding around the content
            // text-gray-700 provides a slightly lighter text color
            className="p-6"
          >
            <p className="text-gray-700 prose-lg">
              driven by a genuine passion for helping people understand and be
              understood. Medy’s passion for communication took a transformative
              turn after a few years in the field. With a natural talent for
              creative writing, marketing, and communication, coupled with a
              love for entrepreneurship, she realized that helping businesses
              reach new audiences was her true calling. At the same time, her
              deep interest in medicine and law made it challenging to settle on
              just one niche—she knew that being a jack of all trades wouldn’t
              foster the credibility she valued. Facing this reality, Medy chose
              to specialize in empowering businesses through tailored language
              solutions, while building a trusted network of colleagues to
              support clients in other specialized areas. This collaborative
              vision is what led to the creation of MD Linguistic Solutions,
              where businesses and individuals alike find the expertise and
              support they need to communicate effectively and confidently.
            </p>
          </CardContent>

          <CardFooter
            // bg-gray-50 matches header's light gray background
            // p-6 adds padding
            // text-sm makes text slightly smaller
            // text-gray-500 gives a muted gray color
            className="bg-gray-50 p-6 text-sm text-gray-500"
          >
            <p>foot</p>
          </CardFooter>
        </Card>
        <Image
          className="mx-auto"
          src="/medyprofpic.png"
          alt="profile picture"
          width={400}
          height={400}
        />
      </div>
      <div>
        <Card
          // w-1/2 makes card take up half the container width
          // max-w-xl prevents card from becoming too wide on large screens
          // shadow-lg adds a large shadow for depth
          // border adds a light gray outline
          // rounded-lg gives rounded corners
          // overflow-hidden prevents content from spilling outside rounded corners
          className="w-1/2 max-w-xl shadow-lg border border-gray-200 rounded-lg overflow-hidden"
        >
          <CardHeader
            // bg-gray-50 gives a light gray background
            // p-6 adds padding inside the header
            className="p-6"
          >
            <CardTitle
              // text-2xl makes the title larger
              // font-bold makes text bold
              // text-gray-800 gives a dark gray color
              className="text-2xl font-bold text-gray-800"
            >
              Medy D'Avino
            </CardTitle>
          </CardHeader>

          <CardDescription
            // px-6 adds horizontal padding
            // pt-2 adds small top padding
            // text-gray-600 gives a muted gray color
            className="px-6 pt-2 text-gray-600"
          >
            Translator, Interpreter - Italian, English, Spanish
          </CardDescription>

          <CardContent
            // p-6 adds padding around the content
            // text-gray-700 provides a slightly lighter text color
            className="p-6"
          >
            <p className="text-gray-700">
              driven by a genuine passion for helping people understand and be
              understood. Medy’s passion for communication took a transformative
              turn after a few years in the field. With a natural talent for
              creative writing, marketing, and communication, coupled with a
              love for entrepreneurship, she realized that helping businesses
              reach new audiences was her true calling. At the same time, her
              deep interest in medicine and law made it challenging to settle on
              just one niche—she knew that being a jack of all trades wouldn’t
              foster the credibility she valued. Facing this reality, Medy chose
              to specialize in empowering businesses through tailored language
              solutions, while building a trusted network of colleagues to
              support clients in other specialized areas. This collaborative
              vision is what led to the creation of MD Linguistic Solutions,
              where businesses and individuals alike find the expertise and
              support they need to communicate effectively and confidently.
            </p>
          </CardContent>

          <CardFooter
            // bg-gray-50 matches header's light gray background
            // p-6 adds padding
            // text-sm makes text slightly smaller
            // text-gray-500 gives a muted gray color
            className="bg-gray-50 p-6 text-sm text-gray-500"
          >
            <p>foot</p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
