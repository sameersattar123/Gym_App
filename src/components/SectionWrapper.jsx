import React from "react";

const SectionWrapper = ({ title , id, header, children }) => {
  return (
    <section className=" flex flex-col gap-10 min-h-screen">
      <div
        id={id}
        className=" bg-slate-950 py-10 justify-center items-center p-4 flex flex-col gap-4"
      >
        <p className="uppercase font-medium">{header}</p>
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
          {title} 
        </h2>
      </div>
      <div className="flex flex-col mx-auto mx-w-[800px] w-full gap-10 p-4  ">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
