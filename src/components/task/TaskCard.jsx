import React from "react";
import { useTasks, useTheme } from "../../context";
import moment from "moment";
import { Link } from "react-router-dom";
import { taskActions } from "../../context/constants";

export const TaskCard = ({ task }) => {
  const { theme } = useTheme();
  const { tasksDispatch } = useTasks();

  return (
    <div>
      <div
        className={`rounded-2xl mb-4  p-5 ${
          theme === "light"
            ? "bg-slate-900 text-orange-100"
            : "bg-orange-100 text-slate-900"
        }`}
      >
        <h3 className="task-card-title">{task.title}</h3>

        <div className="text-xs mb-5">
          <span className="text-grey-600">
            {moment(task.createdAt).fromNow()}
          </span>
        </div>

        <div className="flex justify-between gap-7 mt-2">
          <button
            className={`rounded-lg py-1 px-2 text-md no-border ${
              theme === "light"
                ? "bg-orange-100 text-slate-900"
                : "text-orange-100 bg-slate-900"
            }`}
          >
            <Link to={`/tasks/${task._id}`}>Start Focusing</Link>
          </button>
          <i
            onClick={() =>
              tasksDispatch({
                type: taskActions.DELETE_TASK,
                payload: {
                  ...task,
                },
              })
            }
            className="fa-solid fa-trash-can text-xl relative"
          ></i>
        </div>
      </div>
    </div>
  );
};
