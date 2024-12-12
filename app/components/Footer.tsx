"use client";

import { useRouter } from "next/router";
import Modal from "./Modal";
import { useState } from "react";

const whiteButtonClass =
  "border-black rounded-full text-black border py-2 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer";

const darkButtonClass =
  "border-white rounded-full text-white border py-2 px-8 bg-[#050D21] hover:bg-white hover:text-black hover:cursor-pointer";

const whiteNavbarClass = "flex border-t border-black w-full justify-center";
const darkNavbarClass =
  "flex border-t border-black bg-[#050D21] w-full justify-center";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? darkNavbarClass : whiteNavbarClass}>
      <div className="flex w-full bg-white justify-center sm:justify-between items-center sm:space-x-12 px-12 py-3">
        <Modal isModalOpen={modalOpen} modalSetter={setModalOpen} />
        <div
          className={"hidden sm:flex".concat(
            dark ? " text-white" : " text-black"
          )}
        >
          Designed and coded by Tuan Dau • 2023
        </div>
        <div className="flex justify-center items-center space-x-4 md:space-x-12">
          <div
            className={dark ? darkButtonClass : whiteButtonClass}
            onClick={() => setModalOpen(true)}
          >
            LinkedIn
          </div>
          <a
            className={dark ? darkButtonClass : whiteButtonClass}
            href="mailto:tuansdau@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
