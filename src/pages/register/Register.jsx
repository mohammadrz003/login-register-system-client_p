import React from "react";
import AuthenticateLayout from "../../components/authenticate/AuthenticateLayout";
import RegisterForm from "../../components/authenticate/RegisterForm";
import Layout from "../../components/layouts/Layout";

const Register = () => {
  return (
    <Layout headerClass="lg:hidden">
      <AuthenticateLayout>
        <div className="w-full h-full flex items-center">
          <RegisterForm />
        </div>
      </AuthenticateLayout>
    </Layout>
  );
};

export default Register;
