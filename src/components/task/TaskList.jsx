import React from "react";
import { useTheme } from "../../context";
import { useTasks } from "../../context/providers/TasksProvider";
import { TaskCard } from "./TaskCard";

export default function TaskList({ category }) {
  const { theme } = useTheme();
  const { tasksState } = useTasks();

  return (
    <div className="mt-7">
      <h3
        className={`text-center mb-10 pb-3 ${
          theme === "light" ? "text-slate-900" : "text-orange-100"
        } `}
        style={{
          borderBottom: `${
            theme === "light" ? "3px dotted black" : "3px dotted white"
          }`,
        }}
      >
        {category}
      </h3>
      <ul className="task-list" style={{ height: "89vh" }}>
        {tasksState.tasks &&
          tasksState.tasks.map(
            (task) =>
              task.taskPriority === category && (
                <TaskCard key={task._id} task={task} />
              )
          )}

        {!tasksState.tasks.length && (
          <h4
            className={
              theme === "light"
                ? "text-black text-center"
                : "text-white text-center"
            }
          >
            Please add tasks to start focusing
          </h4>
        )}
      </ul>
    </div>
  );
}
