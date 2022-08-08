import React, { useState } from "react";
import RegisterOptions from "../../components/register/RegisterOptions";
import AuthenticateLayout from "../../components/UI/AuthenticateLayout";
import RegisterForm from "../../components/register/RegisterForm";

const Register = () => {
  const [isRegisterWithEmail, setIsRegisterWithEmail] = useState(false);

  const changeRegisterWithEmailHandler = (status) => {
    setIsRegisterWithEmail(status);
  };

  return (
    <AuthenticateLayout>
      <div className="w-full h-full flex items-center">
        {isRegisterWithEmail ? (
          <RegisterForm onShowRegisterForm={changeRegisterWithEmailHandler} />
        ) : (
          <RegisterOptions
            onShowRegisterForm={changeRegisterWithEmailHandler}
          />
        )}
      </div>
    </AuthenticateLayout>
  );
};

export default Register;
