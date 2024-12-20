"use client";
import { useState } from "react";
import refreshIcon from "../../public/refresh_icon.svg";
import addIcon from "../../public/plus_icon.svg";
import Image from "next/image";
import searchIcon from "../../public/search_icon.svg";
import { repoData } from "./reposData";
import databaseIcon from "../../public/database.svg";

const Repositories: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <section className="p-3 md:p-6 w-full h-full flex flex-col md:border border-[#E9EAEB] rounded-lg md:shadow-[0px_0px_24px_0px_rgba(8,23,53,0.16)] md:mt-0 mt-[80px]">
      <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[20px] lg:text-[24px] text-[#171717]">Repositories</h1>
          <p className="text-[14px]">33 total repositories</p>
        </div>
        <div className="flex gap-3">
          <button className="flex px-4 py-2 gap-2 justify-center items-center border border-[#D8DAE5] rounded-lg">
            <Image src={refreshIcon} alt="refresh" />
            <p className="text-[#171717] text-[10px] sm:text-[12px] lg:text-[16px] font-semibold">Refresh All</p>
          </button>
          <button className="flex bg-[#1570EF] px-4 py-2 gap-2 justify-center items-center rounded-lg">
            <Image src={addIcon} alt="add new" />
            <p className="text-white text-[10px] sm:text-[12px] lg:text-[16px] font-semibold">Add Repository</p>
          </button>
        </div>
      </div>
      <div className="relative flex items-center pt-4">
        {/* Search Icon */}
        <div className="absolute left-3">
          <Image src={searchIcon} alt="search icon"/>
        </div>
        {/* Input Field */}
        <input
          type="text"
          value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search Repositories"
          className="pl-10 pr-4 py-2 w-auto rounded-lg border border-[#D5D7DA] focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="flex flex-col w-full gap-0 mt-2">
        {repoData.map((data,idx) => (
          <div key={idx} className="border-t border-b border-[#D5D7DA] flex flex-col gap-3 p-4 cursor-pointer hover:bg-[#F5F5F5]">
            <div className="flex gap-2 items-center">
              <h2 className="text-[18px] lg:text-[20px] font-medium text-[#181D27]">{data.name}</h2>
              <div className="rounded-2xl border border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3] font-light text-[10px] sm:text-[12px] lg:text-[14px] px-3 py-1">{data.visibility}</div>
            </div>
            <div className="flex gap-3 sm:gap-10 items-center text-[12px] sm:text-[14px] lg:text-[16px] text-[#181D27]">
              <p className="flex items-center gap-2">{data.language} <div className="w-2 h-2 rounded-full bg-[#1570EF]"></div></p>
              <p className="flex items-center gap-2"><span><Image src={databaseIcon} alt="size" /></span>{data.size}</p>
              <p>Updated {data.lastUpdated}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Repositories;