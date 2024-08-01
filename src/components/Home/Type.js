import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "FrontEnd Developer",
        
        
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 2,
        cursor: "█"
      }}
    />
  );
}

export default Type;
