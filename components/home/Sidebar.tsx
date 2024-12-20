"use client";
import Logo from "../../public/codeant-ai_logo.svg";
import phone from "../../public/phone_icon.svg";
import logout from "../../public/logout_icon.svg";
import Image from "next/image";
import SidebarLinks from "./sidebarLinks";
import { useState } from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [user, setUser] = useState<string>("Adnan Shaik");

  return (
    <div className="flex flex-col w-full h-full border border-[#E9EAEB] p-5 justify-between">
      <div className="flex flex-col w-full gap-3">
        {/* logo and company name */}
        <div className="flex gap-3 items-center justify-center">
          <Image src={Logo} alt="CodeAnt AI logo"/>
          <h1 className="text-[#181D27] md:text-[26px] lg:text-[30px]">CodeAnt AI</h1>
        </div>
        {/* logo and company name */}
        {/* users dropdown menu */}
        <select value={user} onChange={(e) => setUser(e.target.value)} className="px-4 py-2 rounded-lg border border-[#D5D7DA] shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
          <option value="Adnan Shaik" className="text-[#181D27] text-[14px]">Adnan Shaik</option>
          <option value="Sana Shaik" className="text-[#181D27] text-[14px]">Sana Shaik</option>
          <option value="John Doe" className="text-[#181D27] text-[14px]">John Doe</option>
        </select>
        {/* users dropdown menu */}
        {/* Sidebar navigation links */}
        <div className=" w-full pt-5">
          <SidebarLinks/>
        </div>
        {/* Sidebar navigation links */}
      </div>
      {/* support and logout */}
      <div className="flex flex-col gap-5 text-[#414651] font-bold text-[16px] pl-5">
        <button className="flex gap-3">
          <Image src={phone} alt="phone" />
          <p className="">Support</p>
        </button>
        <Link href="/" className="flex gap-3">
          <Image src={logout} alt="logout" />
          <p className="">Logout</p>
        </Link>
      </div>
      {/* support and logout */}
    </div>
  )
}

export default Sidebar;