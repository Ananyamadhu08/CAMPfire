import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTasks, useTheme } from "../../context";

export default function Timer() {
  const { theme } = useTheme();
  const { pathColor } = useTasks();

  const percentage = "66%";

  return (
    <div className="timer" style={{ maxWidth: "20rem" }}>
      <div
        className={`timer-display p-5 ${
          theme === "light" ? "bg-orange-200" : "bg-slate-900"
        }`}
      >
        <CircularProgressbar
          value={percentage}
          strokeWidth={6}
          text={percentage}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: `${pathColor}`,
            textColor: `${theme === "light" ? "black" : "white"}`,
            // fontFamily: "var(--font-current)",
            // trailColor: "none"
          })}
        >
          {percentage}
        </CircularProgressbar>
      </div>
    </div>
  );
}