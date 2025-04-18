import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desarrollador Web",
          "Entusiasta de la IA",
          "Mentalidad Analítica",
          "Responsable y Proactivo",
          "Apasionado por los retos"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
