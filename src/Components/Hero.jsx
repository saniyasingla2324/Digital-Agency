import WaveOne from "/Wave1.svg";
import ManPhone from "/Home/ManPhone.svg";
import Button from "../Commons/Button";
import HeroTypeWritter from "../Commons/HeroTypeWritter";
import {motion} from "framer-motion"
import { useContext } from "react";
import { RefCon } from "../App";

const Hero = () => {
  const {HeroRef, ServicesRef} = useContext(RefCon)
  const handleClick=(Ref)=>{

    Ref.current.scrollIntoView({ behavior: 'smooth' });

   }
  return (
    <>
      <div className="relative flex items-end justify-end w-full">
        <img
          src={WaveOne}
          className="absolute top-[-5rem] max-lg:top-[1rem] -z-50"
          alt=""
        />
      </div>
      <div ref = {HeroRef} className="relative flex items-center justify-center w-full">
        <div className="flex flex-col lg:flex-row max-w-[1440px] items-center justify-center w-full h-full  px-5 pt-5 pb-20">
          <motion.div
          initial={{x:-50, opacity:0.5}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:0.3}}
          exit={{x:-50, opacity:0.5}}
          className="flex flex-col items-center justify-center w-full h-full px-10 py-24 text-center lg:text-left lg:items-start">
            <h1 className="text-[#314584] font-semibold lg:text-[4rem] text-[3.5rem] pb-2">
              The Spirit of <br /> Digital
              <HeroTypeWritter
                words={[" Agency", " Firm"]}
                speed={200}
              />
            </h1>
            <p className="pt-2 pb-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              ut <br /> dolor iste ad dicta aperiam inventore
            </p>
            <div className="flex gap-2">
              <Button><p onClick={()=>handleClick(ServicesRef)}>About Us</p></Button>
              <button onClick={()=>handleClick(ServicesRef)} className="text-[#314584] text-sm font-bold">
                Get in Touch
              </button>
            </div>
          </motion.div>
          <motion.div
          initial={{x:50, opacity:0.5}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:0.3}}
          exit={{x:50, opacity:0.5}}
          className="flex flex-col items-end justify-center w-full h-full px-10 pt-10 lg:py-24">
            <img src={ManPhone} alt="" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
