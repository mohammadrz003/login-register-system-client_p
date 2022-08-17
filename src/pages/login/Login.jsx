import React, { useState } from "react";
import LoginForm from "../../components/login/LoginForm";
import LoginOptions from "../../components/login/LoginOptions";
import AuthenticateLayout from "../../components/UI/AuthenticateLayout";

const Login = () => {
  const [isLoginWithEmail, setIsLoginWithEmail] = useState(false);

  const changeLoginWithEmailHandler = (status) => {
    setIsLoginWithEmail(status);
  };

  return (
    <AuthenticateLayout>
      <div className="w-full h-full flex items-center">
        {isLoginWithEmail ? (
          <LoginForm onShowLoginForm={changeLoginWithEmailHandler} />
        ) : (
          <LoginOptions onShowLoginForm={changeLoginWithEmailHandler} />
        )}
      </div>
    </AuthenticateLayout>
  );
};

export default Login;
