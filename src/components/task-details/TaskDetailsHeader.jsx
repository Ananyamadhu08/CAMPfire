import React from "react";
import { useTheme } from "../../context";

function TaskDetailsHeader({ title, description, setIsModalOpen }) {
  const { theme } = useTheme();
  return (
    <div
      className={`task-info-box  ${
        theme === "light"
          ? "bg-slate-900 text-orange-200"
          : "text-slate-900 bg-orange-200"
      }`}
    >
      <div className="flex mb-1 justify-between align-items-center">
        <h2 className="">{title}</h2>
        <button
          className={`btn-transparent cursor-pointer ${
            theme === "light" ? "text-orange-200" : "text-slate-900"
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
