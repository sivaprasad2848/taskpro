import React, { useState } from "react";
import SidebarItem from "../Molecules/SidebarItem";
import logo from "../images/logo1.png";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`bg-slate-950 min-h-screen p-4 w-64 fixed top-0 left-0 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 md:relative md:w-64 z-50`}
      >
         {/* Logo */}
         <div className="flex items-center justify-center mb-4">
          <img src={logo} alt="Company Logo" className="h-12 w-auto" />
        </div>
        <h2 className="text-lg text-white font-semibold mb-4">Dashboard</h2>
        <SidebarItem icon="home" text="Outward Invoice" active />
        <SidebarItem icon="contact" text="Contact" />
        <SidebarItem icon="chart" text="Analytics" />
        <SidebarItem icon="settings" text="Settings" />
      </aside>

      {/* Content Area with Toggle Button */}
      <div className="flex-1 p-4">
        {/* Sidebar Toggle Button for Mobile */}
        <button
          className="md:hidden p-2 bg-gray-600 text-white rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Overlay for Mobile - Click to Close Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
