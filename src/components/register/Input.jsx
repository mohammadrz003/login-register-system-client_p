import React from "react";

const Input = (props) => {
  return (
    <div className="flex flex-col space-y-[0.8vh]">
      <label htmlFor={props.name} className="font-bold text-[1.2vw]">
        {props.label}
      </label>
      <input
        className="bg-white px-[1.6vw] py-[2.2vh] rounded-md outline-none border border-[#E2DFF2] focus:border-palette-dodgerBlue"
        id={props.name}
        type={props.type || "text"}
        name={props.name}
      />
    </div>
  );
};

export default Input;
