import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Button from "../components/ui/button";

export default function Basic() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="grid gap-2 place-items-center">
      <Button onClick={() => setVisible(!visible)}>hehe</Button>
      <AnimatePresence mode="popLayout">
        {visible && (
          <motion.img
            initial={{ rotate: "0deg", scale: 0, y: 0 }}
            animate={{
              rotate: "360deg",
              scale: 1,
              // this keyframe
              y: [0, 150, -150, -150, 0],
            }}
            exit={{ rotate: "0deg", scale: 0, y: 0 }}
            transition={{
              ease: "backOut",
              duration: 1,
              // their transition 0 for 0 s 1 for the duration
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            className="rounded-md aspect-square w-52"
            src="https://cdn.discordapp.com/emojis/1152696704303370371.gif?size=512&quality=lossless"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
