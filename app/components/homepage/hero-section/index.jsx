// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";

function HeroSection() {
  return (
    <section className="relative mb-16 flex flex-col items-center justify-between overflow-hidden py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt=""
        width={1572}
        height={795}
        priority
        className="absolute -top-[98px] left-1/2 -z-10 w-[140vw] max-w-none -translate-x-1/2 opacity-100"
      />

      <div className="grid min-h-[520px] grid-cols-1 items-center gap-10 py-10 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-[#16f2b3]">
            {personalData.designation}
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            {personalData.name}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-200 sm:text-base">
            Full-stack web, mobile, and AI-integrated products with React, Next.js, Node.js, MongoDB, and cloud deployment.
          </p>

          <div className="my-8 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              aria-label="GitHub"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.telegram}
              target="_blank"
              aria-label="Telegram"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTelegramPlane size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              aria-label="X"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaXTwitter size={30} />
            </Link>
          </div>

          <Link
            className="inline-flex items-center gap-2 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            role="button"
            href={personalData.resume}
            download="Kunal_Agarwal_Resume.pdf"
          >
            <span>Get Resume</span>
            <MdDownload size={16} />
          </Link>
        </div>

        <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-5 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div>
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">developer</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-amber-300">'Kunal Agarwal'</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">stack:</span>
                <span className="text-amber-300">'MERN + AI'</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">experience:</span>
                <span className="text-orange-400">'2+ years'</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">focus:</span>
                <span className="text-amber-300">'Web, Mobile, Automation'</span>
              </div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
