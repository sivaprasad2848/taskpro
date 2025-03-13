import React from "react";

type HeadingProps = {
  text: string;
  level?: "h1" | "h2" | "h3";
};

const Heading: React.FC<HeadingProps> = ({ text, level = "h2" }) => {
  //const Tag = level as keyof JSX.IntrinsicElements;
  return <h2 className="text-xl font-semibold text-gray-800">{text}</h2>;
};

export default Heading;
