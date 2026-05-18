// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm">
            © 2026 <span className="text-[#16f2b3]">Kunal Agarwal</span>
          </p>
          <div className="flex items-center gap-4">
            <Link target="_blank" href={personalData.github} className="hover:text-[#16f2b3]" aria-label="GitHub">
              <IoLogoGithub size={22} />
            </Link>
            <Link target="_blank" href={personalData.telegram} className="hover:text-[#16f2b3]" aria-label="Telegram">
              <FaTelegramPlane size={20} />
            </Link>
            <Link target="_blank" href={personalData.twitter} className="hover:text-[#16f2b3]" aria-label="X">
              <FaXTwitter size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
