import React from "react";
import { ErrorMessage, useField } from "formik";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col space-y-1 lg:space-y-[0.8vh]">
      <label
        htmlFor={field.name}
        className="font-bold text-sm lg:leading-none lg:text-[1.2vw]"
      >
        {label}
      </label>

      <input
        className={`border ${
          meta.touched && meta.error
            ? "border-red-500"
            : "border-[#E2DFF2] focus:border-palette-dodgerBlue"
        } bg-white px-4 py-3 lg:px-[1.6vw] lg:py-[2.2vh] rounded-md outline-none`}
        id={field.name}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500 text-sm lg:leading-none lg:text-[1.2vw]"
      />
    </div>
  );
};

export default Input;
