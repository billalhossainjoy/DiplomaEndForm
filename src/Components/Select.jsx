import React, { forwardRef } from "react";

const Select = ({ options = [], label, ...props }, ref) => {
  return (
    <div className="flex flex-col my-2">
      {label && <label className="">{label}</label>}
      <select name="" id="" className="rounded py-1 px-2" ref={ref} {...props}>
        {options.map((option, index) => (
          <option key={index} value={option} className="">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default forwardRef(Select);
