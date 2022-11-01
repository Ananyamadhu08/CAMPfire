import React from "react";
import { useTheme } from "../../context";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <div>
      <footer
        className={`relative flex flex-col h-22 justify-center align-items-center w-full p-6 z-50 ${
          theme === "light" ? "bg-slate-900" : "bg-orange-100"
        }`}
      >
        <div
          className={` flex ${
            theme === "light" ? "text-orange-100" : "text-slate-900"
          }`}
        >
          Made with
          <span className="text-orange-600 font-bold ml-1 mr-1">
            &lt;/&gt;
          </span>{" "}
          by
          <div className="ml-1">Ananya</div>
        </div>
        <div className="flex gap-2 mt-3 align-items-center justify-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Ananyamadhu08"
          >
            <i className="fab fa-github mr-2 text-orange-600 h5"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/AnanyaMadhu27"
          >
            <i className="fab fa-twitter mr-2 text-orange-600 h5"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/ananya-madhu-74479b206/"
            target="_blank"
          >
            <i className="fab fa-linkedin mr-2 text-orange-600 h5"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
