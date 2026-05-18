// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

const contactLinks = [
  {
    label: personalData.email,
    href: `mailto:${personalData.email}`,
    icon: MdAlternateEmail,
  },
  {
    label: personalData.phone,
    href: personalData.phoneHref,
    icon: IoMdCall,
  },
  {
    label: "GitHub",
    href: personalData.github,
    icon: IoLogoGithub,
  },
  {
    label: "Telegram",
    href: personalData.telegram,
    icon: FaTelegramPlane,
  },
  {
    label: "X",
    href: personalData.twitter,
    icon: FaXTwitter,
  },
];

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Contact With Me
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactLinks.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            target={href.startsWith('http') ? '_blank' : undefined}
            href={href}
            className="group rounded-lg border border-[#1b2c68a0] bg-[#11152c] p-5 transition-all duration-300 hover:border-[#16f2b3] hover:bg-[#151b35]"
          >
            <div className="flex items-center gap-4">
              <Icon
                className="bg-[#8b98a5] p-2 rounded-full group-hover:bg-[#16f2b3] group-hover:scale-110 transition-all duration-300 text-gray-800"
                size={42}
              />
              <span className="break-all text-sm sm:text-base text-gray-200 group-hover:text-white">
                {label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
