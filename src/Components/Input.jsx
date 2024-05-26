import { forwardRef } from "react";

 function Input({ label, ...props }, ref) {
  return (
    <div className="flex flex-col mb-2">
      {label && <label className=" text-sm font-semibold">{label}</label>}
      <input
        type="text"
        className="rounded py-1 px-2 w-full outline-none"
        ref={ref}
        {...props}
      />
    </div>
  );
}

export default forwardRef(Input)