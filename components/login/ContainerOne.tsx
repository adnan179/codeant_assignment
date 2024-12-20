import Image from "next/image";
import Logo from "../../public/codeant-ai_logo.svg";

const ContainerOne: React.FC = () => {
  
  return (
    <div className="bg-white flex flex-col p-7 gap-7 rounded-[36px] border border-[#808080]/20 shadow-[0px_0px_24px_0px_rgba(8,23,53,0.16)]">
        <div className="flex gap-2 justify-start items-center">
          <Image src={Logo} alt="Codeant AI Logo" />
          <h1 className="font-bold text-[20px] text-[#081735]">AI to Detect & Autofix Bad Code</h1>
      </div>
      <div className="w-full h-[1px] bg-[#E6E8F0]"></div>
        <div className="flex gap-14 items-center">
          <div className="flex flex-col text-center">
            <h2 className="font-bold text-[#081735] text-[18px]">30+</h2>
            <p className="text-[#171717] text-[14px]">Languages Support</p>
          </div>
          <div className="flex flex-col text-center">
            <h2 className="font-bold text-[#081735] text-[18px]">10K+</h2>
            <p className="text-[#171717] text-[14px]">Developers</p>
          </div>
          <div className="flex flex-col text-center">
            <h2 className="font-bold text-[#081735] text-[18px]">100K+</h2>
            <p className="text-[#171717] text-[14px]">Hours Saved</p>
          </div>
        </div>
      </div>
  )
}

export default ContainerOne;