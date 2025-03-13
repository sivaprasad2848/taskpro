import React, { useState } from "react";
import FormField from "../Molecules/FormField";
import Button from "../Atoms/Button";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Register Data:", formData);
  };

  return (
    <div className="p-6 border rounded-md shadow-md w-96 bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
      <FormField label="Name" name="name" type="text" value={formData.name} onChange={handleChange} />
      <FormField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
      <FormField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
      <Button text="Register" onClick={handleSubmit} />
    </div>
  );
};

export default RegisterForm;
