import React from "react";
import Icon from "../Atoms/Icon";

type SidebarItemProps = {
  icon: string;
  text: string;
  active?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, active = false }) => {
  const isSpecialItem = text === "Analytics" || text === "Settings" || text === "Contact";

  return (
    <div
      className={`flex items-center p-3 rounded-lg cursor-pointer transition ${
        active ? "bg-gray-300" : ""
      } ${isSpecialItem ? "text-white hover:bg-blue-500" : "hover:bg-gray-300"}`}
    >
      <Icon name={icon} className="w-5 h-5 mr-3" />
      <span>{text}</span>
    </div>
  );
};

export default SidebarItem;
