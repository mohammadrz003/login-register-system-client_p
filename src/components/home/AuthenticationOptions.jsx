import React from "react";

import Card from "../../components/UI/Card";
import registerImage from "../../assets/add-user.png";
import loginImage from "../../assets/refer.png";
import { Link } from "react-router-dom";

const AuthenticationOptions = () => {
  return (
    <div className="container m-auto max-w-screen-xl w-full min-h-screen flex justify-center items-center">
      <div className="w-full flex flex-col space-y-12 md:space-y-0 md:flex-row md:justify-evenly px-5 py-8">
        <Card className="flex flex-col justify-center items-center px-11 py-10 bg-white shadow-sm space-y-6">
          <div className="rounded-full">
            <img
              className="w-h-24 h-24"
              src={registerImage}
              alt="user_register"
            />
          </div>
          <Link
            className="md:min-w-[160px] text-center font-medium bg-palette-luckyPoint text-gray-100 px-12 py-2.5 rounded-lg text-lg"
            to="/register"
          >
            Register
          </Link>
        </Card>
        <div className="w-full md:w-auto md:h-64 relative flex items-center justify-center">
          <span className="block w-full h-[1px] md:w-[1px] md:h-full bg-palette-waterloo"></span>
          <span className="rounded-full absolute bg-palette-whiteLilac text-palette-luckyPoint p-3 text-xl font-semibold">
            OR
          </span>
        </div>
        <Card className="flex flex-col justify-center items-center px-11 py-10 bg-white shadow-sm space-y-6">
          <div className="rounded-full">
            <img className="w-h-24 h-24" src={loginImage} alt="user_login" />
          </div>
          <Link
            className="md:min-w-[160px] text-center font-medium bg-palette-luckyPoint text-gray-100 px-12 py-2.5 rounded-lg text-lg"
            to="/login"
          >
            Login
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default AuthenticationOptions;
