"use client";

import { Typewriter } from "react-simple-typewriter";

const HeroTypeWriter = () => {
  return (
    <>
      <Typewriter
        words={[
          "< Web Developer />",
          "< Software Engineer />",
          "Financial Advisor",
          "Lifelong Learner",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </>
  );
};

export default HeroTypeWriter;
