import React from "react";
import { useTheme } from "../../context";

export const TaskCard = () => {
  const { theme } = useTheme();
  return (
    <div>
      <div
        className={`rounded-2xl mb-4  p-5 ${
          theme === "light"
            ? "bg-slate-900 text-orange-200"
            : "bg-orange-200 text-slate-900"
        }`}
      >
        <div className="flex justify-between">
          <h3 className="task-card-description">
            This is a taskThis This is a taskThis This is a taskThis This is a
            taskThis This is a taskThis This is a taskThis This is a taskThis
            This is a taskThis This is a taskThis This is a taskThis This is a
            taskThis This is a taskThis
          </h3>
          <i className="fa-solid fa-pen-to-square text-xl"></i>
        </div>
        <div className="text-xs mt-3 mb-5">created at: 10/2/3</div>

        <div className="flex justify-between gap-7 mt-2">
          <button
            className={`rounded-lg py-1 px-2 text-md ${
              theme === "light"
                ? "bg-orange-200 text-slate-900"
                : "text-orange-200 bg-slate-900"
            }`}
          >
            start focusing
          </button>
          <i className="fa-solid fa-trash-can text-xl relative"></i>
        </div>
      </div>
    </div>
  );
};
