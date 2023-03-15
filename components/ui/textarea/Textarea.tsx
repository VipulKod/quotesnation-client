import React from "react";

export const TextArea = ({ label, name, value, onChange, placeholder, rows }) => {
  return (
    <div>
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        style={{ resize: "none" }}
        rows={rows}
        placeholder={placeholder}
      />
    </div>
  );
};
