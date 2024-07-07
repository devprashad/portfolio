import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Under Graduate Student"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
  );
}

export default Type;
