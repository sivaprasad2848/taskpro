import React from "react";

type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  status?: "approved/submitted" | "current user" | "rejected" | "pending"; // ✅ Added status prop
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, status }) => {
  const getStatusStyle = () => {
    switch (status) {
      case "approved/submitted":
        return "bg-green-500 text-white border-green-700";
      case "current user":
        return "bg-yellow-300 text-white border-yellow-500";
      case "rejected":
        return "bg-red-500 text-white border-red-700";
      default:
        return "bg-gray-400 text-white border-gray-700";
    }
  };

  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 transition duration-300"
      >
        {text}
      </button>

      {status && ( // ✅ Ensures the arrow button only shows when `status` is provided
        <div className="relative flex items-center mt-2">
          <div
            className={`w-32 h-8 px-6 py-2 font-bold uppercase flex items-center justify-center ${getStatusStyle()} border-2 border-white`}
            style={{
              clipPath:
                "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%)",
              margin: "0",
            }}
          >
            {text}
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
