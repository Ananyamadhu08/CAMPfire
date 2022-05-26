import React, { useState, useEffect } from "react";
import { taskActions } from "../../context/constants";
import { useTasks } from "../../context/providers/TasksProvider";

import Input from "../global/Input";
import TextArea from "../global/TextArea";
import TaskDropdown from "./TaskDropdown";
import { v4 as uuidv4 } from "uuid";

export default function CreateTaskForm({ task }) {
  const [taskDetails, setTaskDetails] = useState({
    _id: null,
    title: "",
    description: "",
    "long break": 10,
    "short break": 5,
    pomodoro: 30,
    taskPriority: "",
    createdAt: "",
  });

  const { tasksDispatch } = useTasks();

  useEffect(() => {
    if (task) {
      setTaskDetails({
        ...task,
        "long break": task["long break"] / 60,
        "short break": task["short break"] / 60,
        pomodoro: task.pomodoro / 60,
      });
    }
  }, []);

  const handleCreateTaskHandler = (e) => {
    e.preventDefault();

    if (taskDetails.title.length < 6)
      return "Title needs to be at least 6 characters long.";

    if (taskDetails.description.length < 10)
      return "Description needs to be at least 10 characters long.";

    if (taskDetails.pomodoro <= 0)
      return "Pomodoro timer can't be zero or less";

    if (taskDetails["long break"] > 30)
      return "Long break can't be more than 30";

    if (taskDetails["short break"] > 15)
      return "Short break can't be more than 15";

    if (taskDetails.taskPriority === "none")
      return "Please select the task priority";

    if (task) {
      tasksDispatch({
        type: taskActions.DELETE_TASK,
        payload: {
          ...taskDetails,
          _id: task._id,
          "long break": taskDetails["long break"] * 60,
          "short break": taskDetails["short break"] * 60,
          pomodoro: taskDetails.pomodoro * 60,
          createdAt: new Date().toISOString(),
        },
      });
    }

    tasksDispatch({
      type: taskActions.CREATE_TASK,
      payload: {
        ...taskDetails,
        _id: uuidv4(),
        "long break": taskDetails["long break"] * 60,
        "short break": taskDetails["short break"] * 60,
        pomodoro: taskDetails.pomodoro * 60,
        createdAt: new Date().toISOString(),
      },
    });

    setTaskDetails({
      _id: null,
      title: "",
      description: "",
      "long break": 10,
      "short break": 5,
      pomodoro: 30,
      taskPriority: "none",
      createdAt: "",
    });
  };

  const handleUpdateTaskHandler = (e) => {
    e.preventDefault();

    if (taskDetails.title.length < 6)
      return "0/6 \nTitle needs to be at least 6 characters long.";

    if (taskDetails.description.length < 10)
      return "0/10 \nDescription needs to be at least 10 characters long.";

    if (taskDetails.pomodoro <= 0)
      return "Pomodoro timer can't be zero or less";

    if (taskDetails["long break"] > 30)
      return "Long break can't be more than 30";

    if (taskDetails["short break"] > 15)
      return "Short break can't be more than 15";

    if (taskDetails.taskPriority === "none")
      return "Please select the task priority";

    if (task) {
      tasksDispatch({
        type: taskActions.UPDATE_TASK,
        payload: {
          ...taskDetails,
          _id: task._id,
          "long break": taskDetails["long break"] * 60,
          "short break": taskDetails["short break"] * 60,
          pomodoro: taskDetails.pomodoro * 60,
          createdAt: new Date().toISOString(),
        },
      });
    }

    setTaskDetails({
      _id: null,
      title: "",
      description: "",
      "long break": 10,
      "short break": 5,
      pomodoro: 30,
      taskPriority: "none",
      createdAt: "",
    });
  };

  return (
    <form
      style={{ height: "50vh", overflow: "scroll" }}
      onSubmit={handleCreateTaskHandler}
    >
      <h2 className="mb-5">ADD NEW TASK</h2>
      <Input
        type={"text"}
        value={taskDetails.title}
        name="title"
        onChange={(e) => {
          const { name, value } = e.target;
          setTaskDetails({ ...taskDetails, [name]: value });
        }}
        label={"task title"}
        errorMessage={
          taskDetails.title.length < 6
            ? "title needs to be at least 6 characters long."
            : ""
        }
        required
      />
      <div className="p-1"></div>

      <div className="mb-7 mt-4" style={{ minHeight: "8rem" }}>
        <TextArea
          label="task description"
          value={taskDetails.description}
          name="description"
          autoComplete="off"
          placeholder=" "
          onChange={(e) => {
            const { name, value } = e.target;

            setTaskDetails({ ...taskDetails, [name]: value });
          }}
          errorMessage={
            taskDetails.description.length < 10
              ? "Description needs to be at least 10 characters long."
              : ""
          }
          required
        />
      </div>

      <div className="modal-inputs">
        <Input
          type={"number"}
          value={taskDetails.pomodoro}
          name="pomodoro"
          onChange={(e) => {
            const { name, value } = e.target;

            setTaskDetails({ ...taskDetails, [name]: parseInt(value) });
          }}
          label={"pomodoro"}
          errorMessage={
            taskDetails.pomodoro <= 0 && "Pomodoro timer can't be zero or less"
          }
          required
        />

        <Input
          type={"number"}
          value={taskDetails["short break"]}
          name="short break"
          onChange={(e) => {
            const { name, value } = e.target;

            setTaskDetails({ ...taskDetails, [name]: parseInt(value) });
          }}
          label={"short break"}
          errorMessage={
            taskDetails["short break"] > 15 &&
            "Short break can't be more than 15"
          }
          required
        />

        <Input
          type={"number"}
          value={taskDetails["long break"]}
          name="long break"
          onChange={(e) => {
            const { name, value } = e.target;

            setTaskDetails({ ...taskDetails, [name]: parseInt(value) });
          }}
          label={"long break"}
          errorMessage={
            taskDetails["long break"] > 30 &&
            "Short break can't be more than 30"
          }
          required
        />
      </div>

      <TaskDropdown
        value={taskDetails.taskPriority}
        onChange={(e) => {
          const { name, value } = e.target;

          setTaskDetails({ ...taskDetails, [name]: value });
        }}
        errorMessage={
          taskDetails.taskPriority === "none" &&
          "Please select the task priority"
        }
      />

      <button
        className="p-3 my-7 bg-slate-900 text-orange-100 w-full text-lg rounded-xl"
        type="submit"
        onClick={(e) =>
          task ? handleUpdateTaskHandler(e) : handleCreateTaskHandler(e)
        }
      >
        {task ? "edit task" : "create task"}
      </button>
    </form>
  );
}
