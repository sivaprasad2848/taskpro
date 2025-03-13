import React from "react";

type AuthTemplateProps = {
  // title: string;
  children: React.ReactNode;
};

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* <h1 className="text-3xl font-bold mb-6">{title}</h1> */}
      {children}
    </div>
  );
};

export default AuthTemplate;
