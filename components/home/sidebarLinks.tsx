"use client";
import { useState } from "react";
import homeIcon from "../../public/home_icon.svg";
import codeIcon from "../../public/code_icon.svg";
import cloudIcon from "../../public/cloud_icon.svg";
import bookIcon from "../../public/book_icon.svg";
import settingsIcon from "../../public/settings_icon.svg";
import homeIcon2 from "../../public/home_icon_2.svg";
import codeIcon2 from "../../public/code_icon_2.svg";
import cloudIcon2 from "../../public/cloud_icon_2.svg";
import bookIcon2 from "../../public/book_icon_2.svg";
import settingsIcon2 from "../../public/settings_icon_2.svg";
import Image from "next/image";
import Link from "next/link";

const SidebarLinks: React.FC = () => {
  const [selected, setSelected] = useState("home");

  //links for navigation to different pages of the application
  const links = [
    { id: "home", label: "Repositories", icon: homeIcon, icon2: homeIcon2, link:"/home" },
    { id: "code", label: "AI Code Review", icon: codeIcon, icon2: codeIcon2, link:"/home" },
    { id: "cloud", label: "Cloud Security", icon: cloudIcon, icon2: cloudIcon2, link:"/home" },
    { id: "how to use", label: "How to Use", icon: bookIcon, icon2: bookIcon2, link:"/home" },
    { id: "settings", label: "Settings", icon: settingsIcon, icon2: settingsIcon2, link:"/home" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {links.map((l) => (
        <Link href={l.link}
          key={l.id}
          onClick={() => setSelected(l.id)}
          className={`relative w-full flex justify-start items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 overflow-hidden
            ${
              selected === l.id
                ? "text-white"
                : "text-[#414651]"
            }`}
        >
          {/* Sliding Background */}
          <div
            className={`absolute inset-0 ${
              selected === l.id ? "bg-slide-in" : "bg-transparent"
            }`}
          />
          {/* Icon and Label */}
          <Image
            src={selected === l.id ? l.icon2 : l.icon}
            alt={`${l.label}-icon`}
            className="z-10 transition-all duration-300"
          />
          <span className="z-10 text-[16px] font-medium">{l.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarLinks;
