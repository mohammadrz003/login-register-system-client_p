import React from "react";
import RegisterOptions from "../../components/register/RegisterOptions";
import AuthenticateLayout from "../../components/UI/AuthenticateLayout";

const Register = () => {
  return (
    <AuthenticateLayout>
      <div className="w-full h-full flex items-center">
        <RegisterOptions />
      </div>
    </AuthenticateLayout>
  );
};

export default Register;
