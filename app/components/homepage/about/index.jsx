// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg leading-7">
            {personalData.description}
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-lg border border-[#1b2c68a0] bg-[#11152c] p-4">
              <p className="text-2xl font-bold text-pink-500">2+</p>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
            <div className="rounded-lg border border-[#1b2c68a0] bg-[#11152c] p-4">
              <p className="text-2xl font-bold text-pink-500">MERN</p>
              <p className="text-sm text-gray-300">Core Stack</p>
            </div>
            <div className="rounded-lg border border-[#1b2c68a0] bg-[#11152c] p-4">
              <p className="text-2xl font-bold text-pink-500">AI</p>
              <p className="text-sm text-gray-300">Integrations</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={360}
            height={440}
            alt={personalData.name}
            className="h-[360px] w-[280px] rounded-lg object-cover object-top border border-[#1b2c68a0] shadow-[0_0_40px_rgba(22,242,179,0.12)] transition-all duration-500 hover:scale-[1.03]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
