import Image from "next/image";
import Logo from "../../public/codeant-ai_logo.svg";

const Welcome: React.FC = () => {
  
  return (
    <div className="bg-white flex flex-col w-full gap-4 justify-center items-center p-6 border border-[#D5D7DA] rounded-md rounded-b-none">
      <div className="flex gap-3">
        <Image src={Logo} alt="CodeAnt AI logo"/>
        <h1 className="text-[#181D27] text-[24px] lg:text-[30px]">CodeAnt AI</h1>
      </div>
      <h1 className="font-semibold text-[#181D27] text-[20px] sm:text-[24px] xl:text-[32px] pt-2">Welcome to CodeAnt AI</h1>
      <div className="flex gap-3 w-full border border-[#E9EAEB] rounded">
        <button className="flex w-1/2 justify-center items-center bg-[#1570EF] xl:px-8 xl:py-4 px-4 py-2 font-medium text-white text-[16px] sm:text-[20px] rounded shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3),inset_0_-2px_0_0_rgba(0,0,0,0.3),0_1px_2px_0_rgba(0,0,0,0.3)]"
        >
          SAAS
        </button>

        <button className="flex w-1/2 justify-center items-center bg-transparent xl:px-8 xl:py-4 px-4 py-2 font-medium text-[#414651] text-[16px] sm:text-[20px]">Self Hosted</button>
      </div>
    </div>
  )
}

export default Welcome;