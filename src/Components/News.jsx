import Cardi from "./Cardi";
import Wave5 from "/Wave5.svg";
import { motion } from "framer-motion";
import { RefCon } from "../App";
import { useContext } from "react";

const News = () => {

  const {NewsRef} = useContext(RefCon);
  return (
    <>
      <div className="relative flex items-end justify-end w-full">
        <img
          src={Wave5}
          className="absolute top-[10rem] max-lg:top-[1rem] -z-50"
          alt=""
        />
      </div>
      <div ref={NewsRef} className="flex items-center justify-center w-full h-full p-10">
        <div className="max-w-[1440px] w-full p-10">
          <motion.h5
            initial={{ x: 50, opacity: 0.3 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ x: -50, opacity: 0.3 }}
            className=" uppercase font-semibold pb-4 text-[#FF3946]"
          >
            Blog Stories
          </motion.h5>
          <motion.h1
            initial={{ x: 50, opacity: 0.3 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ x: -50, opacity: 0.3 }}
            className="text-5xl font-semibold text-[#314584]"
          >
            Check Our News
          </motion.h1>
          <div className="relative z-40 grid grid-cols-1 gap-10 pt-10 pb-5 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
            initial={{x:-50, opacity:0.5}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:0.3}}
            exit={{x:-50, opacity:0.5}}
            >
            <Cardi />
            </motion.div>
            <motion.div
            initial={{y:-50, opacity:0.5}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.3}}
            exit={{y:-50, opacity:0.5}}
            >
            <Cardi />
            </motion.div>
            <motion.div
            initial={{x:50, opacity:0.5}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:0.3}}
            exit={{x:50, opacity:0.5}}
            >
            <Cardi />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
