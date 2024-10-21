import AnimationCont from "./hehe/AnimationCont";
import Basic from "./hehe/Basic";
import Gestures from "./hehe/Gestures";
import HorizontalScroll from "./hehe/HorizontalScroll";
import Reveal from "./hehe/Reveal";
import ScrollBased from "./hehe/ScrollBased";
import Test from "./hehe/Test";
import ViweBased from "./hehe/ViweBased";

export default function App() {
  return (
    // <div className="min-h-screen inter bg-[#1a1b26] text-[#c0caf5] gap-5 ">
    <div className="min-h-screen grid place-items-center inter bg-[#1a1b26] text-[#c0caf5] gap-5 ">
      {/* <Reveal> */}
      {/* <Basic /> */}
      {/* </Reveal> */}
      {/* <Reveal>
        <Gestures />
      </Reveal>
      <Reveal>
        <AnimationCont />
      </Reveal>
      <Reveal>
        <ViweBased />
      </Reveal>
      <Reveal>
        <ScrollBased />
      </Reveal> */}
      {/* <Reveal> */}
        <Test />
      {/* </Reveal> */}
      {/* <HorizontalScroll /> */}
    </div>
  );
}
