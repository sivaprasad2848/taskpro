import React from "react";
import AuthTemplate from "../Templates/AuthTemplate";
import ProgressTracker from "../Layouts/ProgressTracker";

const ProgressPage: React.FC = () => {
  return (
    <AuthTemplate>
      {/* Correct component usage */}
      <ProgressTracker />
    </AuthTemplate>
  );
};

export default ProgressPage;
