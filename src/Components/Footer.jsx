import { NavItems } from "../Constants/Constants";
import Dribble from "/Socials/Dribble.svg"
import FB from "/Socials/FB.svg"
import Twitter from "/Socials/Twitter.svg"
import { motion } from "framer-motion"
import { RefCon } from "../App";
import { useContext } from "react";
//hey
const Footer = () => {
  const { FooterRef } = useContext(RefCon)

  return (
    <footer ref={FooterRef} className="flex items-center justify-center bg-[#314584] w-full relative z-40 p-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center max-w-[1440px] w-full">
        <p className="font-semibold text-white uppercase">Doob</p>
        <h3 className="uppercase pt-5 font-semibold text-5xl text-[#FF3946]">Creativity Above</h3>
        <ul id="navItems" className="flex items-center justify-center w-full gap-12 py-10 max-lg:hidden">

          {NavItems.map((item, index) => {
            return (
              <li
                key={index}
                className="font-semibold text-white transition-all duration-100 hover:underline hover:font-bold"
              >
                <a href={item.href}>{item.name}</a>
              </li>
            );
          })}
        </ul>
        <p className="text-xs text-white">&copy; 2019 - Doob, All Right Reserved</p>
        <div className="flex gap-10 py-8 Socials">
          <a href=""><img src={FB} className="h-10" alt="" /></a>
          <a href=""><img src={Twitter} className="h-10" alt="" /></a>
          <a href=""><img src={Dribble} className="h-9" alt="" /></a>

        </div>
      </motion.div>

    </footer>
  )
}

export default Footer
