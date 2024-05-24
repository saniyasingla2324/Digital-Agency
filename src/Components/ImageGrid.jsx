import { useState } from "react"
import { Projects, Projects2 } from "../Constants/Constants"
import {motion} from "framer-motion"
const ImageGrid = () => {

  const [select, setSelect] = useState(Projects);
  const [hovered, setHovered] = useState(null)
  
  
  return (
    <>
    <motion.div

    initial={{y:-50, opacity:0.4}}
    whileInView={{y:0, opacity:1}}
    transition={{duration:0.3}}
    exit={{y:-50, opacity:0.4}}
    key={select} className={` relative z-40 grid w-full h-full grid-cols-1 gap-2  p-10 lg:grid-cols-3 md:grid-cols-2 `}>
      {select.map((proj, index)=>{
        return(
          <div onMouseEnter={()=>setHovered(proj)} onMouseLeave={()=>setHovered(null)} key={index} className="">
            <a href={proj.Link}><img src={proj.Image} alt="" className={`relative z-50 duration-200 rounded hover:shadow-lg hover:shadow-black/70 ${hovered===proj?"scale-105":hovered===null?"scale-100":"scale-95 opacity-80"}`}/></a>
          </div>
        )
      })}
    </motion.div>

    {select === Projects && <button onClick={()=>{
      setSelect(Projects2)
    }} className="w-full font-bold text-center text-[#FF3946] cursor-pointer">See More</button>
    }

    {select === Projects2&& <button onClick={()=>{
      setSelect(Projects)
    }} className="w-full font-bold text-center text-[#FF3946] cursor-pointer">See Less</button>
    }
    </>
  )
}

export default ImageGrid
