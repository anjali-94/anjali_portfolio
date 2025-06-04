import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Creative Problem Solver",
          "Freelancer & Collaborator",
          "Full-Stack Developer",
          "Bold. Curious. Code-Driven. "
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
