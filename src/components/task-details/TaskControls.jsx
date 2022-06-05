import React from "react";
import { useTheme } from "../../context";

export default function TaskControls({ play, setPlay, setControlTab }) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-wrap gap-3 p-3 rounded-3xl justify-around mb-3 ${
        theme === "light"
          ? "bg-slate-900 text-slate-900"
          : "bg-orange-200 text-orange-200"
      }`}
    >
      <div
        className={`py-4 px-6 rounded-3xl cursor-pointer ${
          theme === "light" ? "bg-orange-200" : "bg-slate-900"
        }`}
        onClick={() => {
          setControlTab("pomodoro");
          if (play) {
            setPlay(false);
          }
        }}
      >
        pomodoro
      </div>

      <div
        className={`py-4 px-6 rounded-3xl cursor-pointer ${
          theme === "light" ? "bg-orange-200" : "bg-slate-900"
        }`}
        onClick={() => {
          setControlTab("short break");
          if (play) {
            setPlay(false);
          }
        }}
      >
        short break
      </div>

      <div
        className={`py-4 px-6 rounded-3xl cursor-pointer ${
          theme === "light" ? "bg-orange-200" : "bg-slate-900"
        }`}
        onClick={() => {
          setControlTab("long break");
          if (play) {
            setPlay(false);
          }
        }}
      >
        long break
      </div>
    </div>
  );
}
