import React from "react";
import { Link } from "react-router-dom";

import logoImage from "../../assets/logo.svg";

const AuthenticateLayout = (props) => {
  return (
    <div className="w-full min-h-screen grid grid-cols-12">
      <div className="bg-palette-luckyPoint col-span-4 p-[3vw]">
        <Link to="/">
          <img className="w-[11vw] h-auto" src={logoImage} alt="logo" />
        </Link>
        <div className="mt-[17vh] space-y-[5vh]">
          <h2 className="text-white text-[2.3vw] font-bold">
            Implement user{" "}
            <span
              className="inline-block underline decoration-palette-mediumRedViolet
             decoration-dashed"
            >
              onboarding
            </span>{" "}
            experiences with just a few clicks
          </h2>
          <p className="text-white text-[1.5vw] font-thin">
            Guide your customers on a fantastic journey within your web app.
          </p>
        </div>
      </div>
      <div className="col-span-8">{props.children}</div>
    </div>
  );
};

export default AuthenticateLayout;
