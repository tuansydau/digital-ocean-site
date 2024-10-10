"use client";

import { useEffect, useState } from "react";

export default function TailwindScreens() {
  const smSize = 639;
  const mdSize = 767;
  const lgSize = 1023;
  const xlSize = 1279;
  const xxlSize = 1535;

  const widthToTailwind = (width: any) => {
    const screenDict: any = {
      sm: width > smSize,
      md: width > mdSize,
      lg: width > lgSize,
      xl: width > xlSize,
      xxl: width > xxlSize,
    };
    return screenDict["xxl"]
      ? "2xl"
      : screenDict["xl"]
      ? "xl"
      : screenDict["lg"]
      ? "lg"
      : screenDict["md"]
      ? "md"
      : screenDict["sm"]
      ? "sm"
      : "mobile";
  };

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center text-9xl text-red-500 bg-red-100">
      {widthToTailwind(screenSize)}
    </div>
  );
}
