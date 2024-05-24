import ImageGrid from "./ImageGrid"
import Wave4 from "/Wave4.svg"
import {motion} from "framer-motion"
const Projects = () => {
  return (
    <>
    <div className="relative flex items-start justify-start w-full">
        <img src={Wave4} className="absolute top-72 -left-72 -z-50" alt="" />
      </div>
      <div className="flex items-center justify-center w-full py-10">
        <div className="max-w-[1440px] w-full flex flex-col items-center justify-center p-5">
            <motion.div
            initial={{x:-50, opacity:0.5}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:0.3}}
            exit={{x:-50, opacity:0.5}}
            
            className="w-full p-10">
                <h1 className="text-[#314584] font-semibold text-5xl pb-4 text-left leading-normal">See Some of our <br /> Creative Work</h1>
            </motion.div>
            <ImageGrid/>
            
        </div>
      </div>
      
    </>
  )
}

export default Projects
