import React from "react";
import { Link } from "react-router-dom";
import { useAuth, useTheme } from "../../context";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { setAuthenticated } = useAuth();

  return (
    <div className="App">
      <nav
        style={{ position: "relative" }}
        className={`top-nav flex align-items-center justify-between ${
          theme === "light" ? "bg-slate-900" : "bg-orange-100"
        }`}
      >
        <input id="top-nav-toggle" type="checkbox" />
        <Link to="/" className="text-red-500 flex align-items-center gap-2">
          <i className="fa-solid fa-fire text-4xl "></i>
          <h2 className="text-3xl">
            <span className="text-orange-600 text-4xl">CAMP</span>fire
          </h2>
        </Link>

        <ul
          className="links gap-6 text-2xl flex align-items-center justify-center"
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
              className="theme-btn text-3xl w-full text-orange-600 mr-10 text-hover-orange-700"
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
              className="text-orange-600 text-hover-orange-700 flex justify-center align-items-center text-3xl"
              to="/tasks"
            >
              <i className="fa-solid fa-list-check mr-2"></i>
            </Link>
          </li>
          <li>
            <button
              className="btn btn-square-solid btn-md bg-orange-600 text-slate-900"
              onClick={() => setAuthenticated(false)}
            >
              Logout
            </button>
          </li>
        </ul>

        <label htmlFor="top-nav-toggle" className="icon-burger">
          <div className="line bg-orange-600"></div>
          <div className="line bg-orange-600"></div>
          <div className="line bg-orange-600"></div>
        </label>
      </nav>
    </div>
  );
}
