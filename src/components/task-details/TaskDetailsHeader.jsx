import React from "react";
import { useTheme } from "../../context";

function TaskDetailsHeader({ title, description, setIsModalOpen }) {
  const { theme } = useTheme();
  return (
    <div
      className={`task-info-box mb-5  ${
        theme === "light"
          ? "bg-slate-900 text-orange-100"
          : "text-slate-900 bg-orange-100"
      }`}
    >
      <div className="flex mb-1 justify-between align-items-center">
        <h2 className="">{title}</h2>
        <button
          className={`btn-transparent cursor-pointer ${
            theme === "light" ? "text-orange-100" : "text-slate-900"
          }`}
          onClick={() => setIsModalOpen(true)}
        >
          <i className="fa-solid fa-gear text-3xl "></i>
        </button>
      </div>
      <p className="flex flex-wrap">{description}</p>
    </div>
  );
}

export default TaskDetailsHeader;
