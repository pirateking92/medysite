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
            <h2 className="bg-clip-text text-left text-transparent drop shadow 1-xl bg-gradient-to-b from-white/80 to-white/20 pb-10 ">
              Comprehensive language solutions, catered to your needs
            </h2>
            <p className="bg-clip-text text-left text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 prose-lg">
              Explore our expert translation, interpreting, localization, and
              consultation services, designed to elevate your global
              communication
            </p>
          </SmokeFadeIn>
        </div>
      </BackgroundGradientAnimation>
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
        <SmokeFadeIn>
          <Card
            className="w-full
                     md:w-1/2
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
            <CardDescription className="px-6 pt-2 text-gray-600 prose-lg">
              Translator, Interpreter - Italian, English, Spanish the face
              behind MD Linguistic Solutions
            </CardDescription>
            <CardContent className="p-6">
              <p className="text-gray-700 prose-lg">
                driven by a genuine passion for helping people understand and be
                understood. Medy’s passion for communication took a
                transformative turn after a few years in the field. With a
                natural talent for creative writing, marketing, and
                communication, coupled with a love for entrepreneurship, she
                realized that helping businesses reach new audiences was her
                true calling. At the same time, her deep interest in medicine
                and law made it challenging to settle on just one niche—she knew
                that being a jack of all trades wouldn’t foster the credibility
                she valued. Facing this reality, Medy chose to specialize in
                empowering businesses through tailored language solutions, while
                building a trusted network of colleagues to support clients in
                other specialized areas. This collaborative vision is what led
                to the creation of MD Linguistic Solutions, where businesses and
                individuals alike find the expertise and support they need to
                communicate effectively and confidently.
              </p>
            </CardContent>
            <CardFooter className="bg-gray-50 p-6 text-sm text-gray-500">
              <p>foot</p>
            </CardFooter>
          </Card>
        </SmokeFadeIn>
        <SmokeFadeIn visibleOnLoad={false}>
          <Image
            className="w-full
                   md:w-auto
                   rounded-xl
                   pb-5
                   max-w-md
                   object-cover
                   md:max-h-[600px]"
            src="/medyprofpic.png"
            alt="profile picture"
            width={400}
            height={400}
          />
        </SmokeFadeIn>
      </div>
      ;
    </main>
  );
}
