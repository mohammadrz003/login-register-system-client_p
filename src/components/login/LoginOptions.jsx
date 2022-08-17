import React from "react";
import { Link } from "react-router-dom";
import emailImage from "../../assets/email.svg";
import twitterImage from "../../assets/twitter.svg";
import facebookImage from "../../assets/facebook.svg";

const LoginOptions = (props) => {
  const showLoginFormHandler = () => {
    props.onShowLoginForm(true);
  };

  return (
    <div className="w-full lg:min-h-screen flex flex-col justify-evenly px-6 py-10 lg:py-0 lg:px-[4vw]">
      <div className="mx-auto w-full max-w-xl lg:max-w-[30vw]">
        <h2 className="font-bold text-2xl md:text-4xl lg:text-[2.6vw] text-palette-luckyPoint">
          Welcome back!
        </h2>
        <ul className="space-y-3 mt-8 md:space-y-5 md:mt-10 lg:space-y-[1.5vh] lg:mt-[5vh]">
          <li
            onClick={showLoginFormHandler}
            className="w-full p-4 md:p-7 lg:p-[1.7vw] bg-white rounded-lg shadow-md flex space-x-3 md:space-x-4 lg:space-x-[1.7vw] items-center cursor-pointer"
          >
            <span className="inline-block bg-palette-whiteLilac rounded-lg p-3 md:p-4 lg:p-[1.2vw]">
              <img className="w-5 md:w-7 lg:w-[1.7vw] h-auto" src={emailImage} alt="email" />
            </span>
            <p className="text-lg md:text-xl lg:text-[1.3vw]">Sign in with email</p>
          </li>
          <li className="w-full p-4 md:p-7 lg:p-[1.7vw] bg-white rounded-lg shadow-md flex space-x-3 md:space-x-4 lg:space-x-[1.7vw] items-center cursor-pointer">
            <span className="inline-block bg-palette-whiteLilac rounded-lg p-3 md:p-4 lg:p-[1.2vw]">
              <img className="w-5 md:w-7 lg:w-[1.7vw] h-auto" src={twitterImage} alt="twitter" />
            </span>
            <p className="text-lg md:text-xl lg:text-[1.3vw]">Sign in with twitter</p>
          </li>
          <li className="w-full p-4 md:p-7 lg:p-[1.7vw] bg-white rounded-lg shadow-md flex space-x-3 md:space-x-4 lg:space-x-[1.7vw] items-center cursor-pointer">
            <span className="inline-block bg-palette-whiteLilac rounded-lg py-3 px-4 md:py-4 md:px-6 lg:p-[1.2vw] lg:px-[1.6vw]">
              <img className="h-5 md:h-7 w-auto lg:w-[1vw] lg:h-auto" src={facebookImage} alt="facebook" />
            </span>
            <p className="text-lg md:text-xl lg:text-[1.3vw]">Sign in with facebook</p>
          </li>
        </ul>
        <p className="text-sm md:text-lg lg:text-[1.3vw] mt-6 lg:mt-[3vh]">
          Don't have an account yet?{" "}
          <Link className="text-palette-dodgerBlue" to="/register">
            Sign up
          </Link>
        </p>
      </div>
      <p className="hidden lg:block text-right text-[1.1vw]">
        Having trouble?{" "}
        <Link className="text-palette-dodgerBlue" to="/">
          Get help
        </Link>
      </p>
    </div>
  );
};

export default LoginOptions;
