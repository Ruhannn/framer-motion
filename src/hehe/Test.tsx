import { useState } from "react";
import { motion } from "framer-motion";
const Test = () => {
  const [isHover, setIsHover] = useState(false);
  console.log(isHover);
  return (
    <motion.button
      layout
      className="flex items-center justify-center overflow-hidden p-[12px_36px] bg-white relative rounded-3xl flex-col text-white cursor-pointer inter"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      {/* circle */}
      <motion.div
        initial={{
          y: 125,
        }}
        animate={{
          y: isHover ? 55 : 125,
          width: isHover ? "200px" : "100px",
        }}
        transition={{
          duration: isHover ? 0.3 : 0.2,
          ease: "easeInOut",
        }}
        className="absolute bg-[#c9ff18] rounded-full h-[200px]"
      />
      <motion.div
        animate={{
          y: isHover ? -30 : 0,
        }}
        transition={{
          duration: isHover ? 0.2 : 0.3,
          ease: "easeInOut",
        }}
        className="[font_size:16px] [latter-spacing:-0.5px] font-medium uppercase text-[#000000]"
      >
        children
      </motion.div>
      <motion.div
        initial={{
          y: 30,
        }}
        animate={{
          y: isHover ? 0 : 30,
        }}
        transition={{
          duration: isHover ? 0.3 : 0.2,
          ease: "easeInOut",
        }}
        className="[font_size:16px] absolute [latter-spacing:-0.5px] font-medium uppercase text-[#000000]"
      >
        children
      </motion.div>
    </motion.button>
  );
};
export default Test;
