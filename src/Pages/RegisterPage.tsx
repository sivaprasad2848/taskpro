import React from "react";
import AuthTemplate from "../Templates/AuthTemplate";
import RegisterForm from "../Layouts/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <AuthTemplate title="Create an Account">
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
