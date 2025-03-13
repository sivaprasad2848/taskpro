import React from "react";
import AuthTemplate from "../Templates/AuthTemplate";
import OutwardInvoice from "../Layouts/OutwardInvoice";

const OutwardPage: React.FC = () => {
  return (
    <AuthTemplate>
      <OutwardInvoice/>
    </AuthTemplate>
  );
};

export default OutwardPage;
