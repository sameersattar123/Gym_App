import React from "react";

const Button = ({ text, func }) => {
  return (
    <button
      onClick={func}
      className="px-8 py-4 border-[2px] border-blue-400 border-solid blueShadow duration-200 mx-auto bg-slate-950 rounded-md "
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
