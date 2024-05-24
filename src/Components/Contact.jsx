import Button from "../Commons/Button";
import {motion } from "framer-motion"
import "./Contact.css";
import { RefCon } from "../App";
import { useContext } from "react";
const Contact = () => {
  const {ContactRef} = useContext(RefCon)

  return (
    <div ref = {ContactRef} className="flex items-center justify-center w-full p-10">
      <div className="max-w-[1440px] w-full p-10">
        <motion.h4 
        initial={{x:50, opacity:0.5}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.3}}
        exit={{x:50, opacity:0.5}}
        className="uppercase w-full text-left font-semibold pb-5 text-[#FF3946]">
          Contact Us
        </motion.h4>
        <motion.h1
        initial={{x:50, opacity:0.5}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.3}}
        exit={{x:50, opacity:0.5}}
        className="text-5xl text-[#314584] font-semibold">Get in Touch</motion.h1>
        <div className="relative z-40 py-10 Inputs">
          <motion.input
            initial={{opacity:0.4, width:"50%"}}

            whileInView={{opacity:1, width:"100%"}}

            exit={{opacity:0.4}}
            transition={{duration:0.3}}

            type="text"
            placeholder="Your Email"
            className="px-4 py-3 Email bg-blue-100 rounded placeholder:font-bold font-bold placeholder:text-[#314484ad] text-[#314584]"
          />
          <motion.input
            initial={{opacity:0.4, width:"50%"}}
            whileInView={{opacity:1, width:"100%"}}
            exit={{opacity:0.4}}
            transition={{duration:0.3}}
          
            type="text"
            placeholder="Subject"
            className="px-4 py-3 Subject bg-blue-100 rounded placeholder:font-bold font-bold placeholder:text-[#314584ad] text-[#314584]"
          />
          <motion.textarea
            initial={{opacity:0.4, width:"50%"}}
            whileInView={{opacity:1, width:"100%"}}
            exit={{opacity:0.4}}
            transition={{duration:0.3}}
          
            type="text"
            placeholder="Message"
            className="px-4 py-3 Message bg-blue-100 rounded placeholder:font-bold font-bold placeholder:text-[#314584ad] text-[#314584]"
          />
        </div>
        <div className="flex items-center justify-center w-full py-5">
            <Button>Send Message</Button>

        </div>
      </div>
    </div>
  );
};

export default Contact;
