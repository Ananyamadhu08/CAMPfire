import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  CreateTaskForm,
  Modal,
  TaskControls,
  TaskDetailsHeader,
  Timer,
} from "../components";

import { useTasks, useTheme } from "../context";

export default function TaskDetails() {
  const { taskId } = useParams();

  const { theme } = useTheme();

  const {
    tasksState: { tasks },
  } = useTasks();

  let task = tasks.find((item) => item._id === taskId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [controlTab, setControlTab] = useState("pomodoro");
  const [time, setTime] = useState(task.pomodoro);
  const [timer, setTimer] = useState(time);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play) {
      let intervalId = setInterval(() => {
        if (timer > 0) {
          setTimer((timer) => timer - 1);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer, play]);

  useEffect(() => {
    switch (controlTab) {
      case "pomodoro":
        setTime(task.pomodoro);
        setTimer(task.pomodoro);
        break;
      case "short break":
        setTime(task["short break"]);
        setTimer(task["short break"]);
        break;
      case "long break":
        setTime(task["long break"]);
        setTimer(task["long break"]);
        break;
      default:
        return;
    }
  }, [controlTab]);

  return (
    <div>
      <div className="p-2 flex flex-col align-items-center mt-1">
        <h3
          className={`mt-3 mb-5 px-5 py-2 rounded-lg text-xl ${
            theme === "light"
              ? "bg-slate-900 text-orange-100"
              : "bg-orange-100 text-slate-900"
          }`}
        >
          {controlTab}
        </h3>
        <TaskDetailsHeader
          setIsModalOpen={setIsModalOpen}
          title={task.title}
          description={task.description}
        />
        <TaskControls
          play={play}
          setPlay={setPlay}
          setControlTab={setControlTab}
        />

        <Timer timer={timer} time={time} />

        <div
          className={`flex text-3xl mt-1 gap-4 ${
            theme === "light" ? "text-slate-900" : "text-orange-100"
          } `}
        >
          {play ? (
            <i
              onClick={() => setPlay(!play)}
              className="fa-solid fa-pause cursor-pointer"
            ></i>
          ) : (
            <i
              onClick={() => setPlay(!play)}
              className="fa-solid fa-play cursor-pointer"
            ></i>
          )}
          <i
            onClick={() => setTimer(time)}
            className="fa-solid fa-arrow-rotate-left cursor-pointer"
          ></i>
        </div>
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
