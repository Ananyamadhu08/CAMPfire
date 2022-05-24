import React, { createContext, useContext, useEffect, useReducer } from "react";
import { tasksReducer } from "../reducers";

const TasksContext = createContext();

function TasksProvider({ children }) {
  const [tasksState, tasksDispatch] = useReducer(tasksReducer, {
    tasks: JSON.parse(localStorage.getItem("campFireTasks")) ?? [],
  });

  useEffect(() => {
    localStorage.setItem("campFireTasks", JSON.stringify(tasksState.tasks));
  }, [tasksState.tasks]);

  console.log(tasksState.tasks);

  return (
    <TasksContext.Provider value={{ tasksState, tasksDispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => useContext(TasksContext);
export default TasksProvider;
