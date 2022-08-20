import React from "react";
import AuthenticateLayout from "../../components/authenticate/AuthenticateLayout";
import RegisterForm from "../../components/authenticate/RegisterForm";

const Register = () => {
  return (
    <AuthenticateLayout>
      <div className="w-full h-full flex items-center">
        <RegisterForm />

        {/* <RegisterOptions /> */}
      </div>
    </AuthenticateLayout>
  );
};

export default Register;
