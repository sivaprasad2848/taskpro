import React from "react";

type ButtonProps = {
  text: string;
  status?: "approved" | "current" | "rejected" | "pending";
};

const Button1: React.FC<ButtonProps> = ({ text, status = "pending" }) => {
  const getStatusStyle = () => {
    switch (status) {
      case "approved":
        return "bg-green-500 text-white border-green-700";
      case "current":
        return "bg-yellow-300 text-white border-yellow-100";
      case "rejected":
        return "bg-red-500 text-white border-red-700";
      default:
        return "bg-gray-400 text-white border-gray-700";
    }
  };

  return (
    <div className="relative flex items-center">
      <div
        className={`w-25 h-8 px-6 py-2 font-bold uppercase flex items-center justify-center ${getStatusStyle()} relative border-2 border-white`}
        style={{
          clipPath:
            "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%)",
          margin: "0", // Ensures no gap between buttons
        }}
      >
        {text}

      </div>
    </div>

  );
};

export default Button1;
