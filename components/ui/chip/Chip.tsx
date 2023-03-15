import React from "react";

export const Chip = ({ label, isSelected, onClick }) => {
  const baseClasses = "rounded-full w-full text-center p-2 text-md font-semibold";
  const selectedClasses = "bg-black text-white";
  const unselectedClasses = "border-2 border-slate-700 text-gray-700 cursor-pointer";

  const classes = `${baseClasses} ${
    isSelected ? selectedClasses : unselectedClasses
  }`;
  return (
    <div className={classes} onClick={onClick}>
      {label}
    </div>
  );
};
