import React, { useState } from "react";
import { CreateTaskForm, Modal, TaskList } from "../components";
import { useTheme } from "../context";

export default function Tasks() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        style={{ minHeight: "100vh", top: "5rem" }}
        className="relative mb-22"
      >
        <div className="flex align-items-center justify-center">
          <button
            onClick={() => setIsOpen(true)}
            id="modal-btn"
            className={`p-4 cursor-pointer text-3xl task-btn m-auto text-center open-modal-btn ${
              theme === "light"
                ? "bg-slate-900 text-orange-200"
                : "bg-orange-200 text-slate-900"
            }`}
          >
            <i className="fa-solid fa-plus mr-4"></i>
            CREATE NEW TASK
          </button>
        </div>

        <div>
          <div className="task-page-container">
            <TaskList category={"Important & Urgent"} />
            <TaskList category={"Important & Not Urgent"} />
            <TaskList category={"Not Important & Urgent"} />
            <TaskList category={"Not Important & Not Urgent"} />
          </div>
        </div>

        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
      </div>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalBody={<CreateTaskForm setIsOpen={setIsOpen} />}
      />
    </>
  );
}
