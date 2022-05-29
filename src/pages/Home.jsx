import React from "react";
import { useTheme } from "../context";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      style={{ minHeight: "100vh", top: "5rem" }}
      className="row flex justify-center align-items-center"
    >
      <div className="col-12-xs col-5-lg  p-2 flex align-items-center justify-center relative">
        <img
          src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1652691617/random%20assets/campfire-bg-8_zjpucq.png"
          alt="campfire"
        />
      </div>
      <div className="col-12-xs col-7-lg text-orange-200 p-2 text-5xl flex justify-center align-items-center p-5 mb-10">
        <div className="m-6">
          <p
            className={`mt-12 mb-14 ${
              theme === "light" ? "text-slate-900" : "text-orange-200"
            }`}
          >
            <span className="text-orange-500 text-6xl ">CAMP</span>
            <span className="text-red-500 text-6xl">fire</span> a smart POMODORO
            app to help increase your productivity
          </p>

          <div
            className={`homepage-links cursor-pointer ${
              theme === "light"
                ? "bg-slate-900 text-orange-200 bg-hover-slate-700"
                : "bg-orange-200 text-slate-900 bg-hover-orange-400"
            }  `}
          >
            <i className="fa-solid fa-clock mr-7"></i>
            START FOCUSING
          </div>
        </div>
      </div>
    </div>
  );
}
