import React from "react";
import { useTasks, useTheme } from "../../context";

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
            theme === "light"
              ? "4px dotted var(--slate-900)"
              : "4px dotted var(--orange-100)"
          }`,
        }}
      >
        {category}
      </h3>
      <ul className="task-list" style={{ height: "85vh" }}>
        {tasksState.tasks &&
          tasksState.tasks.map(
            (task) =>
              task.taskPriority === category && (
                <TaskCard key={task._id} task={task} />
              )
          )}
      </ul>
    </div>
  );
}
