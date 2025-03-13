import React from "react";
import DashboardLayout from "../Templates/DashboardLayout";
import DashboardWidgets from "../Layouts/DashboardWidgets";


const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <DashboardWidgets />
    </DashboardLayout>
  );
};

export default DashboardPage;
