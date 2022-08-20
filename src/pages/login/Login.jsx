import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

import LoginForm from "../../components/authenticate/LoginForm";
import AuthenticateLayout from "../../components/authenticate/AuthenticateLayout";

const Login = () => {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.toastMessage) {
      toast.success(state.toastMessage.message, {
        duration: 6000,
      });
    }
  }, [state?.toastMessage]);

  return (
    <AuthenticateLayout>
      <div className="w-full h-full flex items-center">
        <LoginForm />
      </div>
    </AuthenticateLayout>
  );
};

export default Login;
