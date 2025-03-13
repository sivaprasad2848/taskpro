import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import FormField from "../Molecules/FormField";
import Button from "../Atoms/Button";
import logo from "../images/logo.jpg";
import { loginAPI, LoginData } from "../Services/authService";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginData>({ username: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const response = await loginAPI(formData);
    setLoading(false);

    if (response.success) {
      localStorage.setItem("authToken", response.token!);
      alert("Login Successful!");
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      setError(response.error || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex h-[100vh] items-center justify-center bg-gray-100 p-4">
      <div className="flex w-[1000px] h-[600px] border border-gray-300 bg-white shadow-lg overflow-hidden flex-col md:flex-row">
        {/* Logo Section */}
        <div className="w-full md:w-full flex flex-col items-center justify-center p-6">
          <div className="mb-4">
            <img src={logo} alt="TaskPro Logo" className="w-full h-auto" />
          </div>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block w-[4px] bg-gray-400 mx-auto my-10"></div>

        {/* Login Form */}
        <div className="w-full md:w-full p-4 mt-36">
          <h2 className="text-center font-bold text-purple-900 mb-6" style={{ fontSize: "calc(1.279rem + .348vw)" }}>
            Sign In
          </h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <FormField label="User Name" name="username" type="text" value={formData.username} onChange={handleChange} />
            <FormField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
            
            {error && <p className="text-red-600 text-sm">{error}</p>}
            
            <Button text={loading ? "Logging in..." : "Login"} type="submit" disabled={loading} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
