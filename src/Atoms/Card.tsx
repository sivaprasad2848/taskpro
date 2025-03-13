import React from "react";

type CardProps = {
  title: string;
  value: string;
};

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <p className="text-gray-500">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default Card;
