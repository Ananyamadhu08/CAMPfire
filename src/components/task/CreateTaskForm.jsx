import React from "react";

export default function CreateTaskForm() {
  return (
    <form style={{ height: "50vh", overflow: "scroll" }}>
      <h2 className="mb-5">ADD NEW TASK</h2>
      <div className="input-container mb-7">
        <input
          type="text"
          id="email"
          className="input input-orange-hover input-blue-focus"
          autoComplete="off"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="input-label text-slate-900 bg-orange-100"
        >
          task title
        </label>
      </div>

      <div className="input-container mb-7" style={{ minHeight: "8rem" }}>
        <textarea
          type="text"
          id="email"
          className="input input-orange-hover input-blue-focus"
          autoComplete="off"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="input-label text-slate-900 bg-orange-100"
        >
          task description
        </label>
      </div>

      <div className="modal-inputs">
        <div className="input-container mb-7">
          <input
            type="number"
            id="email"
            className="input input-orange-hover input-blue-focus"
            autoComplete="off"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="input-label text-slate-900 bg-orange-100"
          >
            pomodoro
          </label>
        </div>

        <div className="input-container mb-7">
          <input
            type="number"
            id="email"
            className="input input-orange-hover input-blue-focus"
            autoComplete="off"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="input-label text-slate-900 bg-orange-100"
          >
            short break
          </label>
        </div>

        <div className="input-container mb-7">
          <input
            type="number"
            id="email"
            className="input input-orange-hover input-blue-focus"
            autoComplete="off"
            placeholder=" "
          />
          <label
            htmFor="email"
            className="input-label text-slate-900 bg-orange-100"
          >
            long break
          </label>
        </div>
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

// className="input input-orange-hover input-blue-focus"
