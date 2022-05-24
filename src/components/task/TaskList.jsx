import React from "react";
import { useTheme } from "../../context";
import { TaskCard } from "./TaskCard";

export default function TaskList({ category }) {
  const { theme } = useTheme();

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
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </ul>
    </div>
  );
}
