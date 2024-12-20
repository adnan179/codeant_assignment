"use client";
import { useState } from "react";
import homeIcon from "../../public/home_icon_2.svg";
import codeIcon from "../../public/code_icon.svg";
import cloudIcon from "../../public/cloud_icon.svg";
import bookIcon from "../../public/book_icon.svg";
import settingsIcon from "../../public/settings_icon.svg";
import Image from "next/image";
import Logo from "../../public/codeant-ai_logo.svg";
import phone from "../../public/phone_icon.svg";
import logout from "../../public/logout_icon.svg";
import hamburger from "../../public/hamburger.svg";
import closeIcon from "../../public/close_icon.svg";

const Navbar: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [user, setUser] = useState<string>("Adnan Shaik");
  
  const links = [
    { id: "home", label: "Repositories", icon: homeIcon },
    { id: "code", label: "AI Code Review", icon: codeIcon },
    { id: "cloud", label: "Cloud Security", icon: cloudIcon },
    { id: "how to use", label: "How to Use", icon: bookIcon },
    { id: "settings", label: "Settings", icon: settingsIcon },
    { id: "support", label: "Support", icon: phone },
    { id: "logout", label: "Logout", icon: logout },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="flex w-full justify-between p-5 fixed top-0 z-50 border-b border-[#E9EAEB]">
      <div >
        <Image src={Logo} alt="CodeAnt AI Logo"/>
      </div>
      <div onClick={handleMenuToggle} className="cursor-pointer">
        <Image src={hamburger} alt="hamburger"/>
      </div>

      {/* dropdown menu */}
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={handleMenuToggle}
          ></div>

          {/* Dropdown */}
          <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg transition-transform">
            <div className="flex justify-between items-center p-5">
              {/* Logo */}
              <Image src={Logo} alt="CodeAnt AI Logo" />

              {/* Close Button */}
              <button onClick={handleMenuToggle}>
                <Image src={closeIcon} alt="close menu" />
              </button>
            </div>
            <div className="px-5">
              <select value={user} onChange={(e) => setUser(e.target.value)} className="px-4 py-2 rounded-lg border border-[#D5D7DA] shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="Adnan Shaik" className="text-[#181D27] text-[14px]">Adnan Shaik</option>
                <option value="Sana Shaik" className="text-[#181D27] text-[14px]">Sana Shaik</option>
                <option value="John Doe" className="text-[#181D27] text-[14px]">John Doe</option>
              </select>
            </div>
            
            {/* Links */}
            <ul className="flex flex-col items-start gap-4 p-5">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="flex items-center gap-3 text-[16px] font-medium cursor-pointer"
                >
                  <Image src={link.icon} alt={`${link.label}-icon`} />
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar;