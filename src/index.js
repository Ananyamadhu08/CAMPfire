import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, TasksProvider, ThemeProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <TasksProvider>
            <App />
          </TasksProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.querySelector("#root")
);
