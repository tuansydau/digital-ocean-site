"use client";
import Image from "next/image";
import Link from "next/link";
import TuanDauImage from "@/public/assets/tuan-dau.gif";

const buttonClass =
  "border-black border py-[6px] px-12 text-xl bg-white hover:bg-black hover:text-white rounded-full";

const highlightedClass =
  "border-black border py-[6px] px-12 text-xl bg-black text-white rounded-full";

interface NavbarPropTypes {
  slug?: string;
}

export default function Navbar({ slug }: NavbarPropTypes) {
  return (
    <div className="z-10 flex w-full justify-center py-3 items-center space-x-12 bg-white border-black border-b">
      <div className="flex justify-between w-full px-16 items-center">
        <Link href="/">
          <Image
            src={TuanDauImage}
            className="invisible sm:visible"
            alt=""
            title=""
            width={200}
            height={40}
          />
        </Link>
        <div className="flex space-x-4">
          <Link href="/">
            <div className={slug === "/" ? highlightedClass : buttonClass}>
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className={slug === "about" ? highlightedClass : buttonClass}>
              About
            </div>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1QI8FG7deMMsXLC0AKguzT7mfudOF8CFN/view?usp=drive_link"
            target="_blank"
          >
            <div className={slug === "work" ? highlightedClass : buttonClass}>
              Resume
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
