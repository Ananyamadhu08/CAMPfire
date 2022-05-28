import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CreateTaskForm, Modal, TaskControls, Timer } from "../components";

import { useTasks, useTheme } from "../context";

export default function TaskDetails() {
  const { taskId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    tasksState: { tasks },
  } = useTasks();

  let task = tasks.find((item) => item._id === taskId);

  const { theme } = useTheme();

  return (
    <div className="p-2 flex flex-col align-items-center">
      <h1
        className={`mt-6 ${
          theme === "light" ? "text-slate-900" : "text-orange-100"
        }`}
      >
        POMODORO
      </h1>

      <div className="p-2 flex flex-col align-items-center mt-8">
        <TaskControls />

        <Timer />

        <button
          className={`btn-transparent mt-8  ${
            theme === "light" ? "text-slate-900" : "text-orange-100"
          }`}
          onClick={() => setIsModalOpen(true)}
        >
          <i className="fa-solid fa-gear text-4xl "></i>
        </button>
      </div>

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        modalBody={<CreateTaskForm setIsOpen={setIsModalOpen} task={task} />}
      />
    </div>
  );
}
