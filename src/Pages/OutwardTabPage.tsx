import React from "react";
import AuthTemplate from "../Templates/AuthTemplate";
import OutwardInvoiceTabs from "../Layouts/OutwardInvoiceTabs";

const OutwardTabPage: React.FC = () => {
  return (
    <AuthTemplate>
      <OutwardInvoiceTabs/>
    </AuthTemplate>
  );
};

export default OutwardTabPage;