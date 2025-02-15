import React from "react";

function Input({
  placeholder,
  label,
}: {
  placeholder?: string;
  label?: string;
}) {
  return (
    <div className="space-y-3">
      {label && <label htmlFor="">{label}</label>}
      <input
        type="text"
        className="w-full rounded-md bg-primary px-4 py-2"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
