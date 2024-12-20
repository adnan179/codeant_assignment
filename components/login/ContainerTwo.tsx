import Image from "next/image";
import pieChart from "../../public/piechart.svg";
import arrow from "../../public/blue-up-arrow.svg";

const ContainerTwo: React.FC = () => {
  
  return (
    <div className="bg-white flex flex-col p-7 rounded-[36px] border border-[#808080]/20 shadow-[0px_0px_24px_0px_rgba(8,23,53,0.16)]">
      <div className="flex gap-16">
        <div className="p-3 bg-[#9D90FA] bg-opacity-25 rounded-full flex justify-center items-center">
          <Image src={pieChart} alt="pie-chart" className="z-20"/>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Image src={arrow} alt="arrow" />
            <p className="text-[#0049C6] text-[14px] font-medium">14%</p>
          </div>
          <p className="text-[#171717] text-[12px] font-light">This week</p>
        </div>
      </div>
      <p className="font-bold text-[#171717] text-[14px] pt-4">Issues Fixed</p>
      <p className="font-bold text-[32px] text-[#081735]">500K+</p>
    </div>
  )
}

export default ContainerTwo;