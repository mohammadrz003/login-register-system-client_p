import React from "react";
import { Link } from "react-router-dom";
import backArrowImage from "../../assets/backArrow.svg";
import Input from "./Input";

const RegisterForm = (props) => {
  const showRegisterFormHandler = () => {
    props.onShowRegisterForm(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-evenly md:px-[4vw]">
      <div className="mx-auto w-full max-w-[30vw]">
        <div className="space-y-[1.5vh]">
          <button onClick={showRegisterFormHandler}>
            <img
              className="w-[2.2vw] h-auto"
              src={backArrowImage}
              alt="backArrow"
            />
          </button>
          <h2 className="font-bold lg:text-[2.4vw] leading-tight text-palette-luckyPoint">
            Create your
            <br />
            account
          </h2>
        </div>
        <div className="mt-[4.5vh]">
          <form onSubmit={submitHandler}>
            <div className="space-y-[1vw]">
              <Input label="Name" name="name" />
              <Input label="Email" name="email" type="email" />
              <Input label="Password" name="password" type="password" />
            </div>
            <button
              className="w-full text-[1.2vw] mt-[3vh] rounded-md bg-palette-luckyPoint text-white py-[2.2vh] font-bold"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <p className="text-right text-[1.1vw]">
        Having trouble?{" "}
        <Link className="text-palette-dodgerBlue" to="/">
          Get help
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
