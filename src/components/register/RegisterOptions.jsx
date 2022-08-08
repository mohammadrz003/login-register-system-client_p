import React from "react";
import { Link } from "react-router-dom";

import emailImage from "../../assets/email.svg";
import twitterImage from "../../assets/twitter.svg";
import facebookImage from "../../assets/facebook.svg";

const RegisterOptions = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-evenly md:px-14">
      <div className="mx-auto w-full max-w-[26rem]">
        <h2 className="font-bold lg:text-4xl text-palette-luckyPoint">
          Get started
        </h2>
        <ul className="space-y-3 mt-12">
          <li className="w-full p-5 bg-white rounded-lg shadow-md flex space-x-5 items-center cursor-pointer">
            <span className="inline-block bg-palette-whiteLilac rounded-lg p-4">
              <img src={emailImage} alt="email" />
            </span>
            <p className="text-lg">Sign up with email</p>
          </li>
          <li className="w-full p-5 bg-white rounded-lg shadow-md flex space-x-5 items-center cursor-pointer">
            <span className="inline-block bg-palette-whiteLilac rounded-lg p-4">
              <img src={twitterImage} alt="twitter" />
            </span>
            <p className="text-lg">Sign up with twitter</p>
          </li>
          <li className="w-full p-5 bg-white rounded-lg shadow-md flex space-x-5 items-center cursor-pointer">
            <span className="inline-block bg-palette-whiteLilac rounded-lg p-4 px-[22px]">
              <img src={facebookImage} alt="facebook" />
            </span>
            <p className="text-lg">Sign up with facebook</p>
          </li>
        </ul>
        <p className="text-lg mt-6">
          Already have an account?{" "}
          <Link className="text-palette-dodgerBlue" to="/login">
            Log in
          </Link>
        </p>
      </div>
      <p className="text-right">
        Having trouble?{" "}
        <Link className="text-palette-dodgerBlue" to="/">
          Get help
        </Link>
      </p>
    </div>
  );
};

export default RegisterOptions;
