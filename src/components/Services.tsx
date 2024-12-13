"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import SmokeFadeIn from "./SmokeFadeIn";

export function Services() {
  return (
    <SmokeFadeIn visibleOnLoad={false}>
      <h1 className="flex flex-auto text-3xl text-bold m-10">Services</h1>
      <div className="h-screen py-20 w-full">
        <LayoutGrid cards={cards} />
      </div>
    </SmokeFadeIn>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Translations</p>
      <p className="font-normal text-base text-white"></p>
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
      <p className="font-bold md:text-4xl text-xl text-white">Interpreting</p>
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
      <p className="font-bold md:text-4xl text-xl text-white">
        Project Management
      </p>
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
];
