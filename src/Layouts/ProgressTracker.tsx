import React from "react";
import Button1 from "../Atoms/Button1"; // Ensure the correct import path

const ProgressTracker: React.FC = () => {
  // First set (all "pending")
  const pendingSteps = [
    { text: "S", status: "pending" },
    { text: "DEO", status: "pending" },
    { text: "SE", status: "pending" },
    { text: "SM", status: "pending" },
    { text: "GM", status: "pending" },
    { text: "CEO", status: "pending" },
    { text: "P", status: "pending" },
  ];

  // // Second set (original statuses)
  // const steps = [
  //   { text: "S", status: "pending" },
  //   { text: "DEO", status: "approved" },
  //   { text: "SE", status: "approved" },
  //   { text: "SM", status: "current" },
  //   { text: "GM", status: "rejected" },
  //   { text: "CEO", status: "pending" },
  //   { text: "P", status: "pending" },
  // ];

  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-700 w-full">
      {/* First Set: Full Width, Responsive */}
      <div className="bg-gray-300 p-4 w-full">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full">
          {pendingSteps.map((step, index) => (
            <Button1 key={`pending-${index}`} text={step.text} status={step.status} />
          ))}
          <span className="font-bold text-gray-700 text-sm md:text-base ml-4 whitespace-nowrap">
            Submission Pending
          </span>
        </div>
      </div>

    </div>
  );
};

export default ProgressTracker;
