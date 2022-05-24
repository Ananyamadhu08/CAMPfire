import React, { useState } from "react";

import Input from "../global/Input";
import TextArea from "../global/TextArea";

export default function CreateTaskForm() {
  const [taskDetails, setTaskDetails] = useState({
    _id: null,
    title: "",
    description: "",
    "long break": 10,
    "short break": 5,
    pomodoro: 30,
    taskPriority: "none",
    createdAt: "",
  });

  console.log(taskDetails);

  return (
    <form style={{ height: "50vh", overflow: "scroll" }}>
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

      <div className="mb-7" style={{ minHeight: "8rem" }}>
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

      <div className="custom-select m-3">
        <select className="bg-slate-900 text-orange-100 text-xl">
          <option selected disabled>
            Choose a filter
          </option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
      </div>

      <button className="p-3 my-7 bg-slate-900 text-orange-100 w-full text-lg rounded-xl">
        create task
      </button>
    </form>
  );
}
