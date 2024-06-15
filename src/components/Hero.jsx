import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 text-center w-full max-w-[800px] mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase">
          Swole<span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledgement that I may become <span className="text-blue-400 font-medium"> unbelievably swolenormous</span> and accept all risks of becoming the local<span className="text-blue-400 font-medium"> mass montrosity</span>,
        afflicted with severe body dismorphia, unable to fit through doors.
      </p>
      <Button  text={"Accept & Begin"} />
    </div>
  );
};

export default Hero;
