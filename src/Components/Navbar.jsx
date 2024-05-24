import { Lang, NavItems } from "../Constants/Constants";
import Logo from "/Nav/Logo.svg";
import NavbarRes from "./NavbarRes";
import Ham from "/Icons/ham.svg";
import Right from "/Icons/Right.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { RefCon } from "../App";
import { useContext } from "react";

const Navbar = () => {
  const { HomeRef, ServicesRef, NewsRef, ContactRef, FooterRef } =
    useContext(RefCon);

  const arr = [HomeRef, ServicesRef, NewsRef, ContactRef, FooterRef];

  const [show, isShow] = useState(false);

  const handleClick = (index) => {
    arr[index].current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <motion.div
      initial={{ y: -50, opacity: 0.4 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ y: -50, opacity: 0.4 }}
      className="max-w-[1500px] h-full sticky top-0 bg-white/40 backdrop-blur-xl z-50 w-full max-lg:px-10 py-6 flex items-center justify-between"
    >
      <div id="logo" className="w-1/2">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
      </div>
      <ul
        id="navItems"
        className="flex items-center w-full gap-12 max-lg:hidden"
      >
        {NavItems.map((item, index) => {
          return (
            <li
              key={index}
              className="text-[#314584] hover:underline duration-100 cursor-pointer font-semibold hover:font-bold transition-all"
            >
              <p onClick={() => handleClick(index)} href={item.href}>
                {item.name}
              </p>
            </li>
          );
        })}
      </ul>
      <div
        id="LangCont"
        className="flex items-center justify-center w-full h-full gap-5 max-md:hidden max-lg:justify-start"
      >
        <select
          name="lang"
          className="mb-1 hover:cursor-pointer rounded text-[#314584] font-semibold outline-none focus:outline-none"
          id="lang"
        >
          {Lang.map((lang, index) => {
            return (
              <option key={index} className="text-[#314584]" value={lang.name}>
                {lang.value.toUpperCase()}
              </option>
            );
          })}
        </select>
        <button
          onClick={() => handleClick(3)}
          className="px-4 py-2 flex items-center duration-150 gap-4 rounded shadow-lg hover:scale-[1.01] text-[#FF3946] mb-2 font-semibold hover:shadow-black/40 shadow-black/20 "
        >
          Contact Us <img src={Right} className="w-5 h-5" alt="" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={Ham}
          className="w-16 h-10 cursor-pointer lg:hidden"
          onClick={() => isShow(true)}
          alt=""
        />
      </div>

      {show && (
        <NavbarRes
          isShow={isShow}
          show={show}
          Logo={Logo}
          NavItems={NavItems}
          Lang={Lang}
        />
      )}
    </motion.div>
  );
};

export default Navbar;
