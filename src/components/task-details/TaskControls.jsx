import React from "react";
import { useTheme } from "../../context";

export default function TaskControls() {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-wrap gap-3 p-3 rounded-3xl justify-around mb-12 ${
        theme === "light"
          ? "bg-slate-900 text-slate-900"
          : "bg-orange-100 text-orange-100"
      }`}
    >
      <div
        className={`py-4 px-6 rounded-3xl ${
          theme === "light" ? "bg-orange-100" : "bg-slate-900"
        }`}
      >
        pomodoro
      </div>
      <div
        className={`py-4 px-6 rounded-3xl ${
          theme === "light" ? "bg-orange-100" : "bg-slate-900"
        }`}
      >
        short break
      </div>
      <div
        className={`py-4 px-6 rounded-3xl ${
          theme === "light" ? "bg-orange-100" : "bg-slate-900"
        }`}
      >
        long break
      </div>
    </div>
  );
}
