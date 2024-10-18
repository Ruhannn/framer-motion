import { motion, useAnimationControls } from "framer-motion";
import Button from "../components/ui/button";
export default function AnimationCont() {
  const c = useAnimationControls();
  const handelClick = () => {
    c.start("banana");
  };
  return (
    <div className="grid gap-2 place-items-center">
      <Button onClick={handelClick}>Flip it</Button>
      <motion.img
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
          banana: {
            rotate: "3600deg",
          },
        }}
        initial="initial"
        transition={{ ease: "circInOut", duration: 2 }}
        animate={c}
        className="rounded-md aspect-square w-52"
        src="https://cdn.discordapp.com/emojis/1152696704303370371.gif?size=512&quality=lossless"
      />
    </div>
  );
}
