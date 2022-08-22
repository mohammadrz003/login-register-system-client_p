import React from "react";

import appleLogoImage from "../../assets/apple-logo.svg";
import twitterLogoImage from "../../assets/twitter.svg";
import googleLogoImage from "../../assets/Google_Logo.svg";

const AuthenticateOptions = (props) => {
  return (
    <div className={`flex justify-center ${props.className}`}>
      <ul className="flex space-x-4 lg:space-x-[1.8vw]">
        <li>
          <button onClick={props.onGoogle} className="w-14 h-14 p-3 lg:w-[3.5vw] lg:h-[3.5vw] lg:p-[0.7vw] flex justify-center items-center bg-white rounded-md shadow">
            <img className="w-full h-auto" src={googleLogoImage} alt="google_logo" />
          </button>
        </li>
        <li>
          <button className="w-14 h-14 p-3 lg:w-[3.5vw] lg:h-[3.5vw] lg:p-[0.7vw] flex justify-center items-center bg-white rounded-md shadow">
            <img className="w-full h-auto" src={appleLogoImage} alt="apple_logo" />
          </button>
        </li>
        <li>
          <button className="w-14 h-14 p-3 lg:w-[3.5vw] lg:h-[3.5vw] lg:p-[0.7vw] flex justify-center items-center bg-white rounded-md shadow">
            <img className="w-full h-auto" src={twitterLogoImage} alt="twitter_logo" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AuthenticateOptions;
