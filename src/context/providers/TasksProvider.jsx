import React, { createContext, useContext, useEffect, useReducer } from "react";
import { tasksReducer } from "../reducers";

const TasksContext = createContext();

const initState = {
  tasks: JSON.parse(localStorage.getItem("campFireTasks")) ?? [],
};

export const TasksProvider = ({ children }) => {
  const [tasksState, tasksDispatch] = useReducer(tasksReducer, initState);

  useEffect(() => {
    localStorage.setItem("campFireTasks", JSON.stringify(tasksState.tasks));
  }, [tasksState.tasks]);

  return (
    <TasksContext.Provider value={{ tasksState, tasksDispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
