"use client";
import SmokeFadeIn from "./SmokeFadeIn";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AnimatedDropdownMenu from "./AnimatedDropdownMenu";
interface NavLink {
  title: string;
  path: string;
  openInNewTab?: boolean;
}

const navLinks: NavLink[] = [
  {
    title: "Translation",
    path: "/translation",
  },
  // { title: "Productions", path: "/productions" },
  {
    title: "Interpreting",
    path: "/interpreting",
  },
  {
    title: "Project Management",
    path: "/projectmanagement",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const contentHeight = document.body.scrollHeight;
    const viewportHeight = window.innerHeight;
    const SCROLL_BUFFER = 50;

    // Simpler animation targeting opacity 0 as the "hidden" state
    const showNav = gsap.to(navbarRef.current, {
      opacity: 0,
      duration: 0.4,
      paused: true,
      reversed: true, // Start in visible state (opacity 1)
    });

    if (contentHeight > viewportHeight + SCROLL_BUFFER) {
      ScrollTrigger.create({
        trigger: navbarRef.current,
        start: "top top",
        end: "max",
        scroller: document.documentElement,
        onUpdate: (self) => {
          self.direction === -1 ? showNav.reverse() : showNav.play();
        },
      });
    }

    return () => {
      showNav.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const menuAnimation = gsap.to(menuRef.current, {
      height: navbarOpen ? "auto" : 0,
      opacity: navbarOpen ? 1 : 0,
      duration: navbarOpen ? 0.5 : 0.4,
      ease: navbarOpen ? "power2.out" : "power2.in",
    });

    return () => {
      menuAnimation.kill();
    };
  }, [navbarOpen]);

  return (
    <SmokeFadeIn visibleOnLoad={false}>
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-20 bg-[#003366] mb-5"
      >
        <div className="flex container items-center  mx-auto p-4">
          {/* Logo */}
          <Link href="/" className="mr-auto">
            {/* <GradualSpacing */}
            <Image
              src="/mdlingLogo.png"
              alt="Medys Logo"
              height={100}
              width={100}
              className="bg-[#fae8e0] rounded-lg"
            />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden lg:block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <ul className="text-white flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    href={link.path}
                    title={link.title}
                    openInNewTab={link.openInNewTab}
                  />
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto">
            <AnimatedDropdownMenu links={navLinks} />
          </div>
        </div>
      </nav>
    </SmokeFadeIn>
  );
};

export default Navbar;
