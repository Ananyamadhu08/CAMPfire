import React from "react";

function Input({ type, value, onChange, label, errorMessage, ...rest }) {
  return (
    <div className="input-container mb-7">
      <input
        type={type}
        value={value}
        className="input input-orange-hover input-blue-focus"
        autoComplete="off"
        placeholder=" "
        onChange={onChange}
        {...rest}
      />
      <label
        htmlFor="email"
        className="input-label text-slate-900 bg-orange-100"
      >
        {label}
      </label>
      <small className="error text-red-500 text-sm"> {errorMessage} </small>
    </div>
  );
}

export default Input;
