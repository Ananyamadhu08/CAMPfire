import React from "react";
import { useTheme } from "../../context";

export default function TaskControls({ setControlTab }) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-wrap gap-3 p-3 rounded-3xl justify-around mb-3 ${
        theme === "light"
          ? "bg-slate-900 text-slate-900"
          : "bg-orange-200 text-orange-100"
      }`}
    >
      <div
        className={`py-4 px-6 rounded-3xl cursor-pointer ${
          theme === "light" ? "bg-orange-100" : "bg-slate-900"
        }`}
        onClick={() => setControlTab("pomodoro")}
      >
        pomodoro
      </div>

      <div
        className={`py-4 px-6 rounded-3xl cursor-pointer ${
          theme === "light" ? "bg-orange-100" : "bg-slate-900"
        }`}
        onClick={() => setControlTab("short break")}
      >
        short break
      </div>

      <div
        className={`py-4 px-6 rounded-3xl cursor-pointer ${
          theme === "light" ? "bg-orange-100" : "bg-slate-900"
        }`}
        onClick={() => setControlTab("long break")}
      >
        long break
      </div>
    </div>
  );
}
