import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTasks, useTheme } from "../../context";

export default function Timer({ timer, time }) {
  const { theme } = useTheme();
  const { pathColor } = useTasks();

  const formatTimeLeft = (seconds) => {
    return `${Math.floor(seconds / 60)} : ${
      seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60)
    }`;
  };

  return (
    <div className="timer" style={{ maxWidth: "22rem" }}>
      <div
        className={`timer-display p-5 ${
          theme === "light" ? "bg-orange-200" : "bg-slate-900"
        }`}
      >
        <CircularProgressbarWithChildren
          value={timer}
          strokeWidth={6}
          maxValue={time}
          minValue={0}
          counterClockwise={"true"}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: `${pathColor}`,
            textSize: "30px",
            trailColor: `${theme === "light" ? "#0f172a" : "#fed7aa"}`,
          })}
        >
          <div
            className={`text-6xl ${
              theme === "light" ? "text-slate-900" : "text-orange-200"
            }`}
          >
            {" "}
            {formatTimeLeft(timer)}
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}
