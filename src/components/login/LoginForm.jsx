import React from "react";
import { Link } from "react-router-dom";
import Input from "../UI/Input";
import backArrowImage from "../../assets/backArrow.svg";

const LoginForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const showLoginFormHandler = () => {
    props.onShowLoginForm(false);
  };

  return (
    <div className="w-full lg:min-h-screen flex flex-col justify-evenly py-8 md:py-10 lg:py-0 px-6 md:px-[4vw]">
      <div className="mx-auto w-full max-w-screen-sm lg:max-w-[30vw]">
        <div className="space-y-4 lg:space-y-[1.5vh]">
          <button onClick={showLoginFormHandler}>
            <img
              className="w-7 md:w-8 lg:w-[2.2vw] h-auto"
              src={backArrowImage}
              alt="backArrow"
            />
          </button>
          <h2 className="text-2xl md:text-3xl lg:leading-none lg:text-[2.4vw] font-bold leading-tight text-palette-luckyPoint">
            Enter your
            <br />
            account
          </h2>
        </div>
        <div className="mt-10 lg:mt-[4.5vh]">
          <form onSubmit={submitHandler}>
            <div className="space-y-7 lg:space-y-[1vw]">
              <Input label="Email" name="email" type="email" />
              <Input label="Password" name="password" type="password" />
            </div>
            <button
              className="w-full text-base p-4 lg:p-0 lg:py-[2.2vh] mt-10 lg:leading-none lg:text-[1.2vw] lg:mt-[3vh] rounded-md bg-palette-luckyPoint text-white font-bold"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      <p className="hidden md:block text-right text-sm lg:text-[1.1vw]">
        Having trouble?{" "}
        <Link className="text-palette-dodgerBlue" to="/">
          Get help
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
