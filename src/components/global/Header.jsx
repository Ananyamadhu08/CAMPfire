import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="App">
      <nav
        style={{ position: "relative" }}
        className={`top-nav flex align-items-center justify-between ${
          theme === "light" ? "bg-slate-900" : "bg-orange-200"
        }`}
      >
        <input id="top-nav-toggle" type="checkbox" />
        <Link to="/" className="text-red-500 flex align-items-center gap-2">
          <i className="fa-solid fa-fire text-4xl "></i>
          <h2 className="text-3xl">
            <span className="text-orange-500 text-4xl">CAMP</span>fire
          </h2>
        </Link>

        <ul
          className="links gap-10 text-2xl flex align-items-center justify-center"
          style={{ opacity: 1 }}
        >
          <li>
            <button
              onClick={() => {
                if (theme === "light") {
                  setTheme("dark");
                }
                if (theme === "dark") {
                  setTheme("light");
                }
              }}
              className="theme-btn text-3xl w-full text-orange-500 mr-10 text-hover-orange-700"
            >
              {theme === "light" ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i className="fa-solid fa-sun  "></i>
              )}
            </button>
          </li>
          <li>
            <Link
              className="text-orange-500 text-hover-orange-700 flex justify-center align-items-center "
              to="/tasks"
            >
              <i className="fa-solid fa-list-check mr-2"></i>
              Tasks
            </Link>
          </li>

          <li>
            <a
              className="text-orange-500 text-hover-orange-700 flex justify-center align-items-center"
              href="https://github.com/Ananyamadhu08/fusion"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github mr-2"></i>
              Github
            </a>
          </li>
        </ul>

        <label htmlFor="top-nav-toggle" className="icon-burger">
          <div className="line bg-orange-500"></div>
          <div className="line bg-orange-500"></div>
          <div className="line bg-orange-500"></div>
        </label>
      </nav>
    </div>
  );
}
