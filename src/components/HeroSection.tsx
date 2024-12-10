"use client";
import { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

export default function HeroSection() {
  return (
    <div
      // Flex container to center content both horizontally and vertically
      // min-h-screen ensures it takes full viewport height
      // p-4 adds padding around the card to prevent touching screen edges
      className="flex justify-start items-center min-h-screen p-4 pt-24 bg-[url('/medyprofpic.png')] bg-contain bg-no-repeat"
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
            Placeholder for her informationPlaceholder for her
            informationPlaceholder for her informationPlaceholder for her
            informationPlaceholder for her informationPlaceholder for her
            informationPlaceholder for her informationPlaceholder for her
            informationPlaceholder for her informationPlaceholder for her
            informationPlaceholder for her informationPlaceholder for her
            informationPlaceholder for her informationPlaceholder for her
            informationPlaceholder for her informationPlaceholder for her
            informationPlaceholder for her informationPlaceholder for her
            informationPlaceholder for her informationPlaceholder for her
            informationPlaceholder for her informationPlaceholder for her
            informationPlaceholder for her informationPlaceholder for her
            informationPlaceholder for her informationPlaceholder for her
            informationPlaceholder for her informationPlaceholder for her
            informationPlaceholder for her informationPlaceholder for her
            informationPlaceholder for her information
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
  );
}
