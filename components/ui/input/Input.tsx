import React from "react";

export const Input = ({ label, type, placeholder, value, onChange, icon}) => {
  return (
    <div className="flex flex-col my-3">
      <label htmlFor={label} className="font-semibold mb-1">
        {label}
      </label>
      <div className="relative flex items-center">
        {icon && <div className="absolute left-0 ml-3">{icon}</div>}
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          value={value}
          autoComplete="off"
          onChange={onChange}
          className={`w-full px-4 py-2 rounded-lg border-2 ${
            icon ? "pl-10" : ""
          } focus:border-black focus:outline-none focus:ring-2 focus:ring-gray-500`}
        />
      </div>
    </div>
  );
};
