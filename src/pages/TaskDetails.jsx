import React, { useState } from "react";
import { Modal, TaskControls, TaskSettings, Timer } from "../components";

import { useTheme } from "../context";

export default function TaskDetails() {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        modalBody={<TaskSettings />}
      />
    </div>
  );
}
