import React from "react";
import Sidebar from "../Layouts/Sidebar";
import Topbar from "../Layouts/TopBar";
import ProgressTracker from "../Layouts/ProgressTracker";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Topbar />
        <main className="p-6 flex-grow">{children}</main>
        {/* Progress Tracker Below Main */}
        <div className="mt-4">
          <ProgressTracker />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
