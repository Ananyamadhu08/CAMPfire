import React from "react";

export default function Modal({ isOpen, setIsOpen, modalBody }) {
  return (
    <div
      id="modal"
      className="modal relative"
      style={{ display: ` ${isOpen ? "block" : "none"} ` }}
    >
      <div className="modal-cont bg-orange-100 text-slate-900">
        <span
          className="modal-close-btn close-btn text-slate-900 text-hover-orange-500 fas fa-times"
          onClick={() => setIsOpen(false)}
        ></span>
        {modalBody}
      </div>
    </div>
  );
}
