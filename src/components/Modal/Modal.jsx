import React from "react";

const Modal = ({ isOpen, onClose, children}) => {
  if (!isOpen) return null;

  // console.log("children",children);
  
  
  const handleOutsideClick = (e) => {
    if (e.target.id === "modalOverlay") {
      onClose();
      
      
    }
  };

  return (
    <div
      id="modalOverlay"
      className="fixed inset-0 min-h-screen bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white border border-gray-300 p-6 rounded-lg w-[90%] max-w-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-slate-800 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
