import React from "react";

export const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`flex items-center bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline shadow hover:shadow-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
