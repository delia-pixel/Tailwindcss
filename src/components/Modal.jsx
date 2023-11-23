import React from "react";

const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors 
    ${open ? "visible bg-black/20" : "invisible"}
    `}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`bg-white rounded-3xl shadow  transition-all ${
          open ? `scale-100 opacity-100` : `scale-125 opacity-0`
        }`}
      >
        <button className="absolute top-0 right-2 p-2 rounded-full text-gray-400 hover:text-black" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
