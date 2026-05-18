// @flow strict
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

function SiteCard({ site }) {
  return (
    <Link
      href={site.url}
      target="_blank"
      className="group overflow-hidden rounded-lg border border-[#1d293a] bg-[#11152c] transition-all duration-500 hover:border-[#16f2b3]"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={site.image}
          alt={site.name}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] via-transparent to-transparent" />
      </div>
      <div className="p-4">
        <p className="text-xs uppercase text-[#16f2b3]">{site.category}</p>
        <h3 className="mt-2 text-lg font-semibold text-white">{site.name}</h3>
        <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-300">
          {site.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {site.tools.map((tool) => (
            <span key={tool} className="rounded-full bg-[#1a1443] px-3 py-1 text-xs text-gray-200">
              {tool}
            </span>
          ))}
        </div>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-pink-500 transition-all duration-300 group-hover:gap-3">
          <span>Visit Website</span>
          <FaExternalLinkAlt size={12} />
        </div>
      </div>
    </Link>
  );
}

export default SiteCard;
