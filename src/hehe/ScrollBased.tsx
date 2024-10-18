import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import React from "react";

const ScrollBased = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#c0caf5", "#7abef8"]
  );

  return (
    <div>
      <motion.div
        className="sticky top-0 w-full h-5 origin-left"
        style={{
          // scaleX: scrollYProgress,
          scaleX,
          background,
        }}
      />

      <div className="w-full p-5 [&>p]:my-3 [&>p]:w-[700px]">
        <p>
          Did i say something wrong? did you hear what i was thinking? did i
          talk way too long when i told you all my feelings that night? is it
          you? is it me? did you find somebody better? someone who isnt me cause
          i know that i was never your.
        </p>
        <p>
          Type. never really your type overthinkings got me drinking messing
          with my head, woah tell me what you hate about me whatever it is, im
          sorry yeah, yeah, yeah yeah, yeah, yeah i know i can be dramatic but
          everybody said we had it yeah, yeah, yeah yeah, yeah, yeah. im.
        </p>
        <p>
          Coming. to terms with a broken heart i guess that sometimes good
          things fall apart when you said it was real guess i really did believe
          you did you fake how you feel when we parked down by the river that
          night? that night, that night when we fogged. up the.
        </p>
        <p>
          Windows. in your best friends car cause we couldnt leave the windows
          down in december woah tell me what you hate about me whatever it is,
          im sorry yeah, yeah, yeah yeah, yeah, yeah i know i can be dramatic
          but everybody said we had it yeah, yeah. yeah yeah, yeah.
        </p>
        <p>
          I. say something wrong? did you hear what i was thinking? did i talk
          way too long when i told you all my feelings that night? is it you? is
          it me? did you find somebody better? someone who isnt me cause i know
          that i was i. say. say something.
        </p>
        <p>
          Wrong. did you hear what i was thinking? did i talk way too long when
          i told you all my feelings that night? is it you? is it me? did you
          find somebody better? someone who isnt me cause i know that i was
          never your. i say i. i say. something.
        </p>
        <p>
          Wrong? did you hear what i was thinking? did i talk way too long when
          i told you all my feelings that night? is it you? is it me? did you
          find somebody better? someone who isnt me cause i know that i was
          never your. type. i. i say.
        </p>
        <p>
          Something. wrong? did you hear what i was thinking? did i talk way too
          long when i told you all my feelings that night? is it you? is it me?
          did you find somebody better? someone who isnt me cause i know that i
          was never your. type. i. i say. something.
        </p>
        <p>
          Wrong? did you hear what i was thinking? did i talk way too long when
          i told you all my feelings that night? is it you? is it me? did you
          find somebody better? someone who isnt me cause i know that i was
          never your. type. i. i say.
        </p>
        <p>
          Something. wrong? did you hear what i was thinking? did i talk way too
          long when i told you all my feelings that night? is it you? is it me?
          did you find somebody better? someone who isnt me cause i know that i
          was never your. type. i. i say something.
        </p>
        <p>
          Wrong? did you hear what i was thinking? did i talk way too long when
          i told you all my feelings that night? is it you? is it me? did you
          find somebody better? someone who isnt me cause i know that i was
          never your. type. i.
        </p>
        <p>
          I say something wrong? did you hear what i was thinking? did i talk
          way too long when i told you all my feelings that night? is it you? is
          it me? did you find somebody better? someone who isnt me cause i know
          that i was never your. type. never.
        </p>
      </div>
    </div>
  );
};

export default ScrollBased;
