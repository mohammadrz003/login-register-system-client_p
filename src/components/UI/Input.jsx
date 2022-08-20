import React from "react";

const Input = (props) => {
  return (
    <div className="flex flex-col space-y-1 lg:space-y-[0.8vh]">
      <label
        htmlFor={props.name}
        className="font-bold text-sm lg:leading-none lg:text-[1.2vw]"
      >
        {props.label}
      </label>
      <input
        className="bg-white px-4 py-3 lg:px-[1.6vw] lg:py-[2.2vh] rounded-md outline-none border border-[#E2DFF2] focus:border-palette-dodgerBlue"
        id={props.name}
        type={props.type || "text"}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
