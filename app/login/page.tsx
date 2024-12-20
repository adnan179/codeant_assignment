import Hero from "@/components/login/Hero"
import Welcome from "@/components/login/Welcome"
import Image from "next/image";
import Subtract from "../../public/Subtract.svg";
import LoginLinks from "@/components/login/LoginLinks";
const Login: React.FC = () => {
  
  return (
     <section className='relative flex w-full h-screen'>
      <div className='h-full md:w-1/2 lg:w-[60%]'>
        <Hero />
      </div>
      <div className='w-full md:w-1/2 lg:w-[40%] h-full px-6 bg-[#FAFAFA] flex flex-col justify-center items-center border-l border-[#808080]/10'>
        <Welcome />
        <LoginLinks />
        <p className="pt-5 text-[14px] sm:text-[16px] font-light text-[#181D27]">By signing up you agree to the <span className="font-bold">Privacy Policy.</span></p>
      </div>
       {/* Subtract Image at Bottom-Left */}
      <div className="absolute md:flex hidden bottom-0 left-0">
        <Image src={Subtract} alt="subtract" />
      </div>
    </section>
  )
}

export default Login;