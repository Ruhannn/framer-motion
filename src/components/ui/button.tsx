import { ButtonHTMLAttributes, FC, useState } from "react";
import { motion, MotionProps } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
const Button: FC<ButtonHTMLAttributes<HTMLButtonElement> & MotionProps> = ({
  children,
  ...props
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.button
      layout
      className="flex items-center justify-center p-[12px_36px] bg-white relative rounded-3xl text-white overflow-hidden cursor-pointer inter"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      {...(props as MotionProps)}
    >
      {/* circle */}
      <motion.div
        animate={{
          scale: isHover ? 100 : 1,
          background: isHover ? "#7abef8" : "#241d28",
        }}
        transition={{
          ease: "easeIn",
          duration: 0.2,
        }}
        className="size-[6px] bg-[#000000] rounded-[50%] absolute left-[22px]"
      ></motion.div>
      <motion.div
        animate={{
          x: isHover ? -8 : 8,
          color: isHover ? "#ffffff" : "#1a1b26",
        }}
        className="[font_size:16px] [latter-spacing:-0.5px] font-medium uppercase"
      >
        {children}
      </motion.div>
      <motion.div
        animate={{
          x: isHover ? 0 : 24,
        }}
        className="absolute flex items-center justify-center right-[22px]"
      >
        <FiArrowRight className="stroke-2 size-4" />
      </motion.div>
    </motion.button>
  );
};
export default Button;
