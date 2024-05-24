import PropTypes from 'prop-types';
import {motion} from "framer-motion"

const Card = ({content, image, heading}) => {
  return (  
    <motion.div
    initial={{x:50, opacity:0.4}}
    whileInView={{x:0, opacity:1}}
    transition={{duration:0.3}}
    exit={{x:50, opacity:0.4}}
    className="w-full h-full py-12 px-14">
      <div className="relative z-40 flex flex-col items-start justify-start w-full h-full px-6 duration-150 hover:bg-[#f5f5f5] shadow-lg py-14 bg-white hover:shadow-black/70 shadow-black/60">
        <div className="pb-6">
          <img src={image} alt="" />
        </div>
        <div className="pb-4">
          <h1 className="text-[#314584] font-semibold text-[1.9rem] pt-4">{heading}</h1>
        </div>
        <div className="">
          <p className="pt-2 text-sm text-gray-500">{content}</p>
        </div>
      </div>
    </motion.div>
  );
}

Card.propTypes = {
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default Card;
