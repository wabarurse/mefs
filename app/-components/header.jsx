"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const leftPathMap = {
    "/experiences": "about",
    "/projects": "experiences",
  };

  const rightPathMap = {
    "/about": "experiences",
    "/experiences": "projects",
  };

  const handleLeftArrowClick = () => {
    const newPath = leftPathMap[pathname] || "";
    router.push(newPath);
  };

  const handleRightArrowClick = () => {
    const newPath = rightPathMap[pathname] || "";
    router.push(newPath);
  };

  const NavigationLeftArrow = ({ icon }) => (
    <button onClick={handleLeftArrowClick} className="navbar-left-arrow group">
      {icon}
      <span className="navbar-left-text group-hover:scale-100">
        {leftPathMap[pathname]}
      </span>
    </button>
  );

  const NavigationRightArrow = ({ icon }) => (
    <button onClick={handleRightArrowClick} className="navbar-right-arrow group">
      {icon}
      <span className="navbar-right-text group-hover:scale-100">
        {rightPathMap[pathname]}
      </span>
    </button>
  );

  return (
    // Fixed header with height of 5rem (h-20)
    // top-0 to keep it pinned at the top
    // w-full instead of w-screen keeps it sized to the container (but w-screen also works)
    <div className="bg-color fixed top-0 h-20 w-full m-0 shadow-lg flex justify-center items-center gap-x-4 z-10">
      <Link href="/about">
      <Image
        src="/images/logo.png"
        alt="Logo"
        height={48}
        width={48}
        className="hover-zoom absolute left-4 top-1/2 -translate-y-1/2"
      />
      </Link>
      

      <NavigationLeftArrow icon={<BsArrowLeftShort size="30" />} />
      <NavigationRightArrow icon={<BsArrowRightShort size="30" />} />
    </div>
  );
};

export default NavigationBar;
