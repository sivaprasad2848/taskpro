import React from "react";
// import Card from "../Atoms/Card";
import Toolbar from "../Molecules/Toolbar";
// import OutwardInvoice from "./OutwardInvoice";
import OutwardInvoiceTabs from "./OutwardInvoiceTabs";

const DashboardWidgets: React.FC = () => {
  return (
    <div>
      <Toolbar />
      <OutwardInvoiceTabs />
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Card title="Total Users" value="1,200" />
        <Card title="Revenue" value="$12,345" />
        <Card title="Orders" value="350" />
      </div> */}
      {/* <OutwardInvoice /> */}
    </div>
  );
};

export default DashboardWidgets;
