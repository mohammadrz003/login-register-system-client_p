import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Input from "../UI/Input";
import { loginUser } from "../../services/userAuthService";
import AuthContext from "../../contexts/auth-context";
import AuthenticateOptions from "./AuthenticateOptions";

const LoginForm = (props) => {
  const AuthCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const validate = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
  });

  const submitHandler = async (values, { resetForm }) => {
    try {
      const { data } = await loginUser(values); // pass input values
      if (!data?.errors) {
        const { user, token } = data;
        AuthCtx.setAccount({ user, token });
        resetForm({ email: "", password: "" });
        return navigate("/", {
          state: {
            toastMessage: {
              type: "success",
              message: data.message,
            },
          },
        });
      } else if (data?.errors) {
        for (let error of data.errors) {
          toast.error(error.msg);
        }
      }
      console.log(data);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      }
    }
    resetForm({ email: "", password: "" });
  };

  return (
    <div className="w-full lg:min-h-screen flex flex-col justify-evenly py-8 md:py-10 lg:py-0 px-6 md:px-[4vw]">
      <div className="mx-auto w-full max-w-screen-sm lg:max-w-[30vw]">
        <div className="space-y-4 lg:space-y-[1.5vh]">
          <h2 className="text-center text-2xl md:text-3xl lg:leading-none lg:text-[2.4vw] font-bold leading-tight text-palette-luckyPoint">
            Enter your account
          </h2>
        </div>
        <AuthenticateOptions className="mt-8 lg:mt-[4.5vh]" />
        <div className="w-full relative flex items-center justify-center py-3 mt-7 lg:py-[2vh] lg:mt-[3.5vh]">
          <span className="block w-full h-[1px] bg-gray-200"></span>
          <span className="absolute bg-palette-whiteLilac text-gray-400 p-3 lg:p-[1vw] text-sm lg:leading-none lg:text-[0.9vw] font-normal">
            or do it via E-mail
          </span>
        </div>
        <div className="mt-10 lg:mt-[4.5vh]">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validate}
            onSubmit={submitHandler}
            validateOnMount={true}
          >
            {(formik) => (
              <Form>
                <div className="space-y-7 lg:space-y-[1vw]">
                  <Input label="Email" name="email" type="email" />
                  <Input label="Password" name="password" type="password" />
                </div>
                <button
                  disabled={!formik.isValid}
                  className="disabled:opacity-75 w-full text-base p-4 lg:p-0 lg:py-[2.2vh] mt-10 lg:leading-none lg:text-[1.2vw] lg:mt-[3vh] rounded-md bg-palette-luckyPoint text-white font-bold"
                  type="submit"
                >
                  Sign In
                </button>
              </Form>
            )}
          </Formik>
          <p className="text-sm md:text-lg lg:text-[1.3vw] mt-6 lg:mt-[3vh]">
            Don't have an account yet?{" "}
            <Link className="text-palette-dodgerBlue" to="/register">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
