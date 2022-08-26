import React, { useState, useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/auth-context";

const Header = (props) => {
  const AuthCtx = useContext(AuthContext);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const changeHeaderVisibilityHandler = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  return (
    <div
      className={`${props.className} bg-white sticky top-0 left-0 right-0 z-[999]`}
    >
      <header className="mx-auto px-4 py-4 lg:px-10 lg:py-3">
        <div className="flex justify-between items-center lg:space-x-5">
          <div>
            <h1 className="font-bold text-lg lg:text-xl">
              <Link to="/">Logoname</Link>
            </h1>
          </div>
          <div className="lg:hidden" onClick={changeHeaderVisibilityHandler}>
            {isHeaderVisible ? <GrClose size="1.5rem" /> : <AiOutlineMenu size="1.5rem" />}
          </div>
          <div
            className={`${
              isHeaderVisible ? "bg-slate-800 left-0" : "-left-3/4"
            } py-5 px-3 lg:px-0 lg:py-0 fixed top-0 h-[100vh] lg:h-auto overflow-scroll lg:overflow-auto w-3/4 lg:w-auto lg:static z-[999] lg:bg-transparent transition-all duration-300 ease-in lg:flex lg:items-center space-y-5 lg:space-y-0 lg:space-x-20`}
          >
            <nav>
              <ul className="flex flex-col items-center lg:flex-row lg:space-x-9">
                <li className="cursor-pointer font-semibold py-5 text-lg text-white lg:text-gray-700">
                  Portfolio
                </li>
                <li className="cursor-pointer font-semibold py-5 text-lg text-white lg:text-gray-700">
                  Resources
                </li>
                <li className="cursor-pointer font-semibold py-5 text-lg text-white lg:text-gray-700">
                  News
                </li>
                <li className="cursor-pointer font-semibold py-5 text-lg text-white lg:text-gray-700">
                  Jobs
                </li>
              </ul>
            </nav>
            <div className="flex flex-col-reverse lg:flex-row lg:space-x-4">
              {AuthCtx.account ? (
                <Link
                  to="/"
                  className="text-center font-semibold text-lg text-[#1CD6CE] lg:text-gray-800 px-6 py-3 border border-[#1CD6CE] lg:border-gray-800 rounded-sm"
                >
                  Profile
                </Link>
              ) : (
                <>
                  <Link to="/login" className="text-center font-semibold text-lg text-[#1CD6CE] lg:text-gray-800 px-6 py-3">
                    Sign In
                  </Link>
                  <Link to="/register" className="text-center font-semibold text-lg text-[#1CD6CE] lg:text-gray-800 px-6 py-3 border border-[#1CD6CE] lg:border-gray-800 rounded-sm">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
