"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import Modal from "@/app/components/Modal";

export default function About() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div
      className="flex min-h-screen w-full flex-col justify-between items-center"
      style={{ fontFamily: "CabinetGrotesk-Variable" }}
    >
      <Modal isModalOpen={modalOpen} modalSetter={setModalOpen} />
      <Navbar />
      {/* Hello Potential Employer Blurb */}
      <div className="flex flex-col w-full max-w-[1360px]">
        <div className="flex w-full px-8 lg:px-32 justify-between items-start mt-8">
          <p
            className="w-full xl:w-8/12 mb-16"
            style={{
              fontFamily: "sans-serif",
              fontSize: "6.5rem",
              lineHeight: "7.5rem",
              fontWeight: 900,
            }}
          >
            <span style={{ color: "#2fd063" }}>Hey, </span>potential employer!
          </p>
        </div>
        <div className="block md:flex w-full px-8 lg:px-32 lg:space-x-16">
          <div className="hidden md:flex w-2/12" />
          <div className="md:w-5/12">
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.85rem",
              }}
            >
              First of all, thanks for taking the time to visit my portfolio, I
              have been <b style={{ fontWeight: 900 }}>DYING</b> for someone
              (other than my friends) to see the portfolio site! This website
              has gone through many different versions, and is self-hosted on my
              $6/mo DigitalOcean droplet. The trials and tribulations of
              creating this website were plentiful, but it's super satisfying to
              see it finally go live.
            </p>{" "}
            <div className="mt-8" />
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.85rem",
              }}
            >
              <b style={{ fontWeight: 900 }}>But hi!</b> I&apos;m Tuan Dau, and
              I&apos;m a new grad full stack developer. I went to York
              University, and I&apos;ve interned at a total of 6 different
              companies, mainly creating + designing internal tools/websites,
              containerizing + deploying backend services, and creating CI/CD
              testing/deployment pipelines whenever I am summoned via Slack
              message.
            </p>
          </div>
          <div className="mt-10 md:mt-0 md:w-5/12">
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.85rem",
              }}
            >
              When I&apos;m not programming, I usually enjoy{" "}
              <Link
                className="font-extrabold text-violet-600 hover:text-violet-450"
                href="https://www.tuandau.ca"
                target="_blank"
              >
                doing DJ/event photography,
              </Link>{" "}
              <Link
                className="font-extrabold text-blue-600 hover:text-blue-450"
                href="https://how-dry-is-moo.vercel.app/"
                target="_blank"
              >
                playing a lot of Runescape,
              </Link>{" "}
              <Link
                className="font-extrabold text-[#4d94ca] hover:text-[#8fc4ea]"
                href="https://scuderia.alphatauri.com/en/"
                target="_blank"
              >
                patiently waiting for the F1 season to start,
              </Link>{" "}
              <Link
                className="font-extrabold text-[#FF4454] hover:text-[#f4979f]"
                href="https://tracker.gg/valorant/profile/riot/Verified%20Email%23NA1/overview"
                target="_blank"
              >
                deranking in Valorant,
              </Link>{" "}
              enjoying the photography of others, reading magazines,
              doomscrolling, geeking about my skincare, rewatching Silicon
              Valley for the 5th+ time, going on nature walks, getting injured
              on my nature walks without knowing how, pumping iron,
              chit-chatting/cooking with friends, and taking spontaneous trips
              to new places.
            </p>
            <div className="mt-8" />
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.85rem",
              }}
            >
              If you&apos;re looking for a full-stack developer who can
              design/code prototypes, as well as create infrastructure to hold
              up their code really really quickly, I&apos;d love to talk! Thanks
              for checking out my portfolio! Hopefully you&apos;ve enjoyed this
              website, I&apos;ll cry otherwise. Just kidding.
            </p>
          </div>
        </div>
        <div className="mt-16" />
        <div className="flex w-full justify-end px-8 lg:px-32">
          <div className="w-6 h-6 bg-black"></div>
        </div>
      </div>
      {/* Work Summary */}
      <div className="mt-24" />
      <div className="flex w-full justify-center max-w-[1360px] px-8 lg:px-32">
        <div
          className="flex w-full justify-between"
          style={{
            fontSize: "1rem",
            lineHeight: "1.85rem",
          }}
        >
          <div className="w-9/12">
            <div style={{ fontSize: "1.25rem", fontWeight: 700 }}>
              Work Experience
            </div>
            <div className="mt-4" />
            <div>
              <ul className="w-full space-y-4">
                <li className="flex flex-col">
                  <div className="flex justify-between font-bold bg-blackl">
                    <p>Skinopathy</p>
                    <p>Jan 2023 - May 2023</p>
                  </div>
                  <p className="w-9/12 leading-5">
                    Software Engineer Intern - Backend/DevOps
                  </p>
                </li>
                <li className="flex flex-col">
                  <div className="flex justify-between font-bold">
                    <p>Artemis Data</p>
                    <p>Aug 2022 - Dec 2022</p>
                  </div>
                  <p className="w-9/12 leading-5">
                    Software Engineer Intern - Frontend
                  </p>
                </li>
                <li className="flex flex-col">
                  <div className="flex justify-between font-bold">
                    <p>Big Whale Labs</p>
                    <p>May 2022 - Aug 2022</p>
                  </div>
                  <p className="w-9/12 leading-5">
                    Software Engineer Intern - Frontend
                  </p>
                </li>
                <li className="flex flex-col">
                  <div className="flex justify-between font-bold">
                    <p>Tesla</p>
                    <p>Jan 2022 - Apr 2022</p>
                  </div>
                  <p className="w-9/12 leading-5">
                    Software Engineer Intern - Full-Stack, Infotainment QA Tools
                    Team
                  </p>
                </li>{" "}
                <li className="flex flex-col">
                  <div className="flex justify-between font-bold">
                    <p>CertiK</p>
                    <p>Sep 2021 - Dec 2021</p>
                  </div>
                  <p className="w-9/12 leading-5">
                    Software Engineer Intern - Backend, Static Analysis Team
                  </p>
                </li>{" "}
                <li className="flex flex-col">
                  <div className="flex justify-between font-bold">
                    <p>4PAY Inc.</p>
                    <p>May 2021 - Aug 2021</p>
                  </div>
                  <p className="w-9/12 leading-5">
                    Software Engineer Intern - Backend, KYC Verification
                  </p>
                </li>{" "}
                <li className="flex flex-col">
                  <div className="flex justify-between font-bold">
                    <p>4PAY Inc.</p>
                    <p>Jan 2020 - Sep 2020</p>
                  </div>
                  <p className="w-9/12 leading-5">
                    Technical Systems Analyst Intern - Payments
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-4/12 items-end">
            <div>
              <div className="mt-11"></div>
              <div className="">
                <div style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                  Languages & Tools
                  <div className="mt-2" />
                </div>
                <ul
                  style={{
                    listStyleType: "circle",
                    listStylePosition: "inside",
                  }}
                >
                  <li>Typescript</li>
                  <li>React</li>
                  <li>Python</li>
                  <li>Golang</li>
                  <li>Java</li>
                  <li>Docker</li>
                  <li>Bash</li>
                </ul>
                <div className="mt-8"></div>
              </div>
              <div className="">
                <div style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                  Skills
                </div>
                <div className="mt-2" />
                <ul
                  style={{
                    listStyleType: "circle",
                    listStylePosition: "inside",
                  }}
                >
                  <li>Frontend Development</li>
                  <li>API Design + Implementation</li>
                  <li>Deployments + CI/CD Pipelines</li>
                  <li>QA Tooling/Automated Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32" />
      {/*  */}
      {/* <div className="flex w-full justify-center max-w-[1360px] px-8 lg:px-32"> */}
      <div className="flex w-full justify-center max-w-[1360px] px-8 lg:px-24">
        <div className="flex w-full justify-center text-black">
          <div className="flex w-full space-x-16 justify-between bg-gray-100 py-8 px-16">
            <div className="w-full max-w-[875px]">
              <div className="w-fit" style={{ fontSize: "2.5rem" }}>
                Like my work? Let&apos;s chat!
              </div>
              <div
                className="w-fit mt-2"
                style={{ fontSize: "1.25rem", fontWeight: 300 }}
              >
                If you&apos;re looking for a developer for your company, or for
                someone to talk about music and Runescape, I&apos;d love to meet
                you! Open to emails and meetings, as well as coffee if
                you&apos;re in the Toronto area :)
              </div>
            </div>
            <div
              className="flex flex-col space-y-8 justify-center items-center"
              style={{ fontSize: "1.25rem", fontWeight: 350 }}
            >
              <div
                className="flex border border-black bg-white text-center hover:bg-black hover:text-white hover:cursor-pointer w-64 h-16 items-center justify-center"
                onClick={() => setModalOpen(true)}
              >
                Message me on LinkedIn
              </div>
              <a
                className="flex h-16 border text-center bg-white border-black hover:bg-black hover:text-white items-center w-64 justify-center"
                href="mailto:tuansdau@gmail.com"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32" />
      {/* <div className="w-full bg-black h-5" /> */}
      <Footer />
    </div>
  );
}
