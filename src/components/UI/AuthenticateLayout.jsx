import React from "react";
import { Link } from "react-router-dom";

import logoImage from "../../assets/logo.svg";

const AuthenticateLayout = (props) => {
  return (
    <div className="w-full min-h-screen grid grid-cols-12">
      <div className="bg-palette-luckyPoint col-span-12 lg:col-span-4 px-6 py-10 lg:p-[3vw]">
        <Link to="/">
          <img className="w-36 md:w-44 lg:w-[11vw] h-auto" src={logoImage} alt="logo" />
        </Link>
        <div className="mt-12 lg:mt-[17vh] space-y-5 lg:space-y-[5vh]">
          <h2 className="text-white text-2xl lg:text-[2.3vw] lg:leading-normal font-bold">
            Implement user{" "}
            <span
              className="inline-block underline decoration-palette-mediumRedViolet
             decoration-dashed"
            >
              onboarding
            </span>{" "}
            experiences with just a few clicks
          </h2>
          <p className="text-white text-base lg:text-[1.5vw] lg:leading-normal font-thin">
            Guide your customers on a fantastic journey within your web app.
          </p>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8">{props.children}</div>
    </div>
  );
};

export default AuthenticateLayout;
