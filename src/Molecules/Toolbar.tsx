import React, { useState } from "react";
import { 
  RefreshCw, Upload, Printer, FilePlus, Copy, Eye, Repeat, Edit, 
  XCircle, Save, Trash, Paperclip, ChevronsLeft, ChevronLeft, ChevronRight, 
  ChevronsRight, Send, Check, X, MessageSquare, Filter, Settings, 
  FileMinus, ClipboardList, Menu 
} from "lucide-react"; 

const Toolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const icons = [
    { icon: RefreshCw, label: "Refresh" },
    { icon: RefreshCw, label: "Sync" }, // Using RefreshCw as Sync alternative
    { icon: Upload, label: "Export" },
    { icon: Printer, label: "Print" },
    { icon: FilePlus, label: "New" },
    { icon: Copy, label: "Copy" },
    { icon: Eye, label: "View" },
    { icon: Repeat, label: "Switch Mode" },
    { icon: Edit, label: "Edit" },
    { icon: XCircle, label: "Cancel" },
    { icon: Save, label: "Save" },
    { icon: Trash, label: "Delete" },
    { icon: Paperclip, label: "Attach" },
    { icon: ChevronsLeft, label: "First" },
    { icon: ChevronLeft, label: "Previous" },
    { icon: ChevronRight, label: "Next" },
    { icon: ChevronsRight, label: "Last" },
    { icon: Send, label: "Submit" },
    { icon: Check, label: "Approve" },
    { icon: X, label: "Reject" },
    { icon: MessageSquare, label: "Post" },
    { icon: FileMinus, label: "Setoff" }, 
    { icon: Filter, label: "Toggle Filter" },
    { icon: ClipboardList, label: "Audit" }, 
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="relative">
      {/* Menu Button for Small Screens */}
      <button 
        className="md:hidden p-3 bg-gray-700 text-white rounded-full fixed bottom-4 right-4 shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Toolbar - Responsive */}
      <div className={`
        ${isOpen ? "flex" : "hidden"} 
        md:flex flex-wrap md:flex-row flex-col gap-3 bg-gray-100 p-2 rounded-lg shadow-md border 
        overflow-x-auto max-w-full fixed bottom-12 right-4 md:relative md:bottom-auto md:right-auto md:block
      `}>
        {icons.map(({ icon: Icon, label }, index) => (
          <span 
            key={index} 
            title={label} 
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-md transition-all flex items-center"
          >
            <Icon size={24} className="text-gray-700 hover:text-blue-500 transition-colors duration-200" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;