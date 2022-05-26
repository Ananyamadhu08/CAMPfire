import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context";
import TasksProvider from "./context/providers/TasksProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <TasksProvider>
          <App />
        </TasksProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.querySelector("#root")
);
