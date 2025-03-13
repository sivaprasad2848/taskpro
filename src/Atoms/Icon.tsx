import React from "react";

type IconProps = {
  name: string;
};

const Icon: React.FC<IconProps> = ({ name }) => {
  return <i className={`text-xl ${name}`} />;
};

export default Icon;
