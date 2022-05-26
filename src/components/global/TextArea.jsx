import React from "react";

function TextArea({ errorMessage, label, value, onChange, ...rest }) {
  return (
    <div className="input-container mb-7">
      <textarea
        value={value}
        style={{ height: "6rem" }}
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
      <small className="error text-red-500 text-sm" style={{ top: "6.5rem" }}>
        {" "}
        {errorMessage}{" "}
      </small>
    </div>
  );
}

export default TextArea;
