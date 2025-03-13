import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Atoms/Button";
import avatar from "../images/avatar.jpeg";

const Topbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove authentication token
    alert("Logged out successfully!");
    navigate("/"); // Redirect to login page
  };

  return (
    <header className="flex flex-wrap justify-between items-center bg-gray-300 p-2 shadow-md w-full">
      {/* Dashboard Title */}
      <h1 className="text-xl font-bold text-gray-800">Outward Invoice</h1>

      {/* User Avatar and Dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-2 focus:outline-none"
          aria-label="User Menu"
        >
          <img
            src={avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-gray-400"
          />
          <span className="text-gray-700 font-medium hidden sm:block">John Doe</span>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
              <li className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer">
                <Button text="Logout" onClick={handleLogout} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
