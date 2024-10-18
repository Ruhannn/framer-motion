import AnimationCont from "./hehe/AnimationCont";
import Basic from "./hehe/Basic";
import Gestures from "./hehe/Gestures";
import ScrollBased from "./hehe/ScrollBased";
import ViweBased from "./hehe/ViweBased";

export default function App() {
  return (
    <div className="min-h-screen grid place-items-center inter bg-[#1a1b26] text-[#c0caf5]">
      {/* <Basic /> */}
      {/* <Gestures /> */}
      {/* <AnimationCont /> */}
      {/* <ViweBased /> */}
      <ScrollBased />
    </div>
  );
}
