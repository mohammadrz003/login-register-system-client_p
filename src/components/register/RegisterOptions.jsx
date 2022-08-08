import React from "react";
import { Link } from "react-router-dom";

import emailImage from "../../assets/email.svg";
import twitterImage from "../../assets/twitter.svg";
import facebookImage from "../../assets/facebook.svg";

const RegisterOptions = (props) => {
  const showRegisterFormHandler = () => {
    props.onShowRegisterForm(true);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-evenly md:px-[4vw]">
      <div className="mx-auto w-full max-w-[30vw]">
        <h2 className="font-bold lg:text-[2.6vw] text-palette-luckyPoint">
          Get started
        </h2>
        <ul className="space-y-[1.5vh] mt-[5vh]">
          <li
            onClick={showRegisterFormHandler}
            className="w-full p-[1.7vw] bg-white rounded-lg shadow-md flex space-x-[1.7vw] items-center cursor-pointer"
          >
            <span className="inline-block bg-palette-whiteLilac rounded-lg p-[1.2vw]">
              <img className="w-[1.7vw]" src={emailImage} alt="email" />
            </span>
            <p className="text-[1.3vw]">Sign up with email</p>
          </li>
          <li className="w-full p-[1.7vw] bg-white rounded-lg shadow-md flex space-x-[1.7vw] items-center cursor-pointer">
            <span className="inline-block bg-palette-whiteLilac rounded-lg p-[1.2vw]">
              <img className="w-[1.7vw]" src={twitterImage} alt="twitter" />
            </span>
            <p className="text-[1.3vw]">Sign up with twitter</p>
          </li>
          <li className="w-full p-[1.7vw] bg-white rounded-lg shadow-md flex space-x-[1.7vw] items-center cursor-pointer">
            <span className="inline-block bg-palette-whiteLilac rounded-lg p-[1.2vw] px-[1.6vw]">
              <img className="w-[1vw]" src={facebookImage} alt="facebook" />
            </span>
            <p className="text-[1.3vw]">Sign up with facebook</p>
          </li>
        </ul>
        <p className="text-[1.3vw] mt-[3vh]">
          Already have an account?{" "}
          <Link className="text-palette-dodgerBlue" to="/login">
            Log in
          </Link>
        </p>
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

export default RegisterOptions;
