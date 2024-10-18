import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function ViweBased() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // once: true
  });
  console.log(isInView);
  return (
    <>
      <div className="h-[150vh] " />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen w-full !bg-black"
      />
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: "s background" }}
        className="h-screen w-full !bg-red"
      />
    </>
  );
}
