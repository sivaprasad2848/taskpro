import React from "react";
import AuthTemplate from "../Templates/AuthTemplate";
import LoginForm from "../Layouts/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
