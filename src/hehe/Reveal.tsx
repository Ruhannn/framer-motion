import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}
export default function Reveal({ children, width }: Props) {
  const ref = useRef(null);
  const IsInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (IsInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [IsInView]);

  return (
    <div ref={ref} style={{ width }} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute left-0 right-0 z-20 bg-white top-4 bottom-4"
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%",},
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
      />
    </div>
  );
}
