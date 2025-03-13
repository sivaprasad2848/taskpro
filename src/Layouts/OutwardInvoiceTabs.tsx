import React, { useState } from "react";
import { X, Pin } from "lucide-react"; // Import Pin and Close icons
import OutwardInvoice from "./OutwardInvoice";

type Tab = {
  id: number;
  title: string;
  pinned?: boolean; // Flag for pinned tab
};

const OutwardInvoiceTabs: React.FC = () => {
  // Ensure the first tab is always pinned
  const [tabs, setTabs] = useState<Tab[]>([{ id: 1, title: "Outward Invoice (1)", pinned: true }]);
  const [activeTab, setActiveTab] = useState(1);

  // Function to add a new tab
  const addNewTab = () => {
    const newTabId = tabs.length + 1;
    setTabs([...tabs, { id: newTabId, title: `Outward Invoice (${newTabId})` }]);
    setActiveTab(newTabId);
  };

  // Function to remove a tab
  const removeTab = (id: number) => {
    const updatedTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(updatedTabs);

    if (activeTab === id) {
      setActiveTab(updatedTabs.length > 0 ? updatedTabs[updatedTabs.length - 1].id : 0);
    }
  };

  return (
    <div className="p-4">
      {/* Tab Headers */}
      <div className="flex space-x-2 border-b">
        {tabs.map((tab) => (
          <div key={tab.id} className="flex items-center space-x-1 px-2 py-2 border-b-2 cursor-pointer">
            <button
              className={`flex items-center px-4 py-2 text-sm font-semibold ${
                activeTab === tab.id ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.pinned && <Pin size={16} className="text-yellow-500 mr-1" />} {/* Pin Icon */}
              {tab.title}
            </button>
            <button onClick={() => removeTab(tab.id)} className="text-red-600 hover:text-red-800">
              <X size={16} /> {/* Close Icon */}
            </button>
          </div>
        ))}
        <button className="px-3 py-2 bg-blue-500 text-white rounded-md" onClick={addNewTab}>
          +
        </button>
      </div>

      {/* Tab Content */}
      {tabs.length > 0 && <OutwardInvoice />}
    </div>
  );
};

export default OutwardInvoiceTabs;
