"use client";
import React, { useState, useRef, useEffect } from "react"; // use things there in case for later
import { LayoutGrid } from "./ui/layout-grid";
import SmokeFadeIn from "./SmokeFadeIn";
import Link from "next/link";

export function Services() {
  return (
    <SmokeFadeIn visibleOnLoad={false}>
      <h1 className="flex flex-auto text-5xl text-bold ml-10 mt-20 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        Services
      </h1>
      <div className="h-screen py-15 w-full">
        <LayoutGrid cards={cards} />
      </div>
    </SmokeFadeIn>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <Link
        href="/translation"
        className="font-bold md:text-4xl text-xl text-white hover:underline"
      >
        Translations
      </Link>
      <p className="font-normal text-base text-white hover:underline"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <Link
        href="/interpreting"
        className="font-bold md:text-4xl text-xl text-white hover:underline"
      >
        Interpreting
      </Link>
      <p className="font-normal text-base text-white">Subheading</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <Link
        href="/projectmanagement"
        className="font-bold md:text-4xl text-xl text-white hover:underline"
      >
        Project Management
      </Link>
      <p className="font-normal text-base text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <Link
        href="/contact"
        className="font-bold md:text-4xl text-xl text-white hover:underline "
      >
        Contact
      </Link>
      <p className="font-normal text-base text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/translating.avif",
    hoverText: "Translation",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/interpreting.avif",
    hoverText: "Interpreting",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/projMang.avif",
    hoverText: "Project Management",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/translating.avif",
    hoverText: "Contact",
  },
];
