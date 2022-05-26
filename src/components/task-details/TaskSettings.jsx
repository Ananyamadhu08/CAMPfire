import React from "react";
export default function TaskSettings() {
  return (
    <form style={{ height: "50vh", overflow: "scroll" }}>
      <h2 className="mb-5">SETTINGS</h2>

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

      <div>
        <h3 className="mb-5">COLOR</h3>
        <div className="flex gap-5">
          <div className="bg-sky-blue w-16 h-16 rounded-full"></div>
          <div className="bg-purple w-16 h-16 rounded-full"></div>
          <div className="bg-crimson w-16 h-16 rounded-full"></div>
        </div>
      </div>

      <button className="p-3 my-7 bg-slate-900 text-orange-100 w-full text-lg rounded-xl">
        update settings
      </button>
    </form>
  );
}
