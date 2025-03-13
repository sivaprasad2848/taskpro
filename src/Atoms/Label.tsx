import React from "react";

type LabelProps = {
  text: string;
  htmlFor: string;
};

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block text-gray-700 font-medium">
      {text}
    </label>
  );
};

export default Label;
