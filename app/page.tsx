"use client";

import "@/public/styles/cabinet-grotesk.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import confetti from "canvas-confetti";
import { useRef } from "react";

export default function Home() {
  const textRef = useRef(null);

  const launchConfetti = () => {
    if (textRef.current) {
      // Get the position of the text element
      const rect = textRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2; // Center horizontally
      const y = rect.top + rect.height / 2; // Center vertically

      // Convert to relative coordinates for confetti
      const xPercent = x / window.innerWidth;
      const yPercent = y / window.innerHeight;

      // Launch confetti
      confetti({
        particleCount: 150,
        spread: 60,
        origin: { x: xPercent, y: yPercent },
      });
    }
  };

  return (
    <>
      <div
        style={{ fontFamily: "CabinetGrotesk-Variable" }}
        className="flex flex-col min-h-screen w-full lg:items-center space-y-4"
      >
        <Navbar slug="/" />

        <div style={{ height: `calc(100vh - 100px)` }}>
          <div className="flex flex-col justify-between h-full">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div>
              <p className="text-4xl">
                <span className="text-[#6fb360] font-bold">
                  Tuan<span className="-mt-4">*</span>{" "}
                </span>
                is a software engineer based in{" "}
                <span className="text-[#335ccc] font-bold">Toronto</span>.
              </p>
              <p className="text-4xl">
                Previously at{" "}
                <span className="text-[hsl(351,92%,60%)] font-bold">Tesla</span>{" "}
                and <span className="font-bold">CertiK</span>, and currently{" "}
                <span
                  className="underline font-bold text-[#ff8031]"
                  ref={textRef}
                  onMouseEnter={launchConfetti}
                >
                  unemployed
                </span>
                .
              </p>
            </div>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div className="w-full flex justify-center pb-6">
              <p>
                *Tuan is also really into music and video games, but we can get
                into that later.
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-16 border border-black w-full items-center justify-center">
          <p className="text-2xl">Projects</p>
        </div>
        <div className="h-4"></div>
        <div className="flex">
          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-lime-100 to-lime-300 to-85%">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Feb 2024 - Nov 2024
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                Arima Data
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-lime-400" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Home Page Redesign / Authentication Routes
              </div>
            </div>
          </div>

          <div className="w-12"></div>
          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-red-100  to-red-500">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Winter 2022
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                Tesla
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-red-500" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Infotainment / Navigation Systems Team
              </div>
            </div>
          </div>

          <div className="w-12 "></div>

          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-[#a6a6a6]  to-[#000000]">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Fall 2021
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                CertiK
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-[#6c6c6c]" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Security Tools / Static Analysis Team
              </div>
            </div>
          </div>

          <div className="w-12"></div>
          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-blue-300  to-blue-700">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Summer 2020 / Summer 2021
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                4PAY
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-blue-900" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Money Transfers / Fraud Detection
              </div>
            </div>
          </div>
        </div>

        <div className="h-8"></div>

        <div className="flex">
          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-lime-100 to-lime-300 to-85%">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Feb 2024 - Nov 2024
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                Arima Data
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-lime-400" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Home Page Redesign / Authentication Routes
              </div>
            </div>
          </div>

          <div className="w-12"></div>
          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-red-100  to-red-500">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Winter 2022
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                Tesla
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-red-500" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Infotainment / Navigation Systems Team
              </div>
            </div>
          </div>

          <div className="w-12 "></div>

          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-[#a6a6a6]  to-[#000000]">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Fall 2021
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                CertiK
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-[#6c6c6c]" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Security Tools / Static Analysis Team
              </div>
            </div>
          </div>

          <div className="w-12"></div>
          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-blue-300  to-blue-700">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Summer 2020 / Summer 2021
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                4PAY
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-blue-900" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Money Transfers / Fraud Detection
              </div>
            </div>
          </div>
        </div>

        <div className="h-8"></div>

        <div className="flex">
          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-lime-100 to-lime-300 to-85%">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Feb 2024 - Nov 2024
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                Arima Data
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-lime-400" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Home Page Redesign / Authentication Routes
              </div>
            </div>
          </div>

          <div className="w-12"></div>
          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-red-100  to-red-500">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Winter 2022
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                Tesla
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-red-500" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Infotainment / Navigation Systems Team
              </div>
            </div>
          </div>

          <div className="w-12 "></div>

          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-[#a6a6a6]  to-[#000000]">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Fall 2021
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                CertiK
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-[#6c6c6c]" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Security Tools / Static Analysis Team
              </div>
            </div>
          </div>

          <div className="w-12"></div>
          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-blue-300  to-blue-700">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Summer 2020 / Summer 2021
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                4PAY
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-blue-900" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Money Transfers / Fraud Detection
              </div>
            </div>
          </div>
        </div>

        <div className="h-8"></div>
        <Footer />
      </div>
    </>
  );
}
