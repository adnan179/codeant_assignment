import ContainerOne from "./ContainerOne";
import ContainerTwo from "./ContainerTwo";

const Hero: React.FC = () => {
  return (
    <section className="hidden md:flex w-full h-full justify-center items-center">
      <div className="relative flex flex-col">
        <ContainerOne />
        <div className=" z-20 absolute -bottom-[8.2rem] right-10 translate-x-[20%] translate-y-[20%]">
          <ContainerTwo />
        </div>
      </div>
     
    </section>
  );
}

export default Hero;
