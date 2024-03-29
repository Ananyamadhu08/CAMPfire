import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { tasksReducer } from "../reducers";

const TasksContext = createContext();

const initState = {
  tasks: JSON.parse(localStorage.getItem("campFireTasks")) ?? [],
};

export const TasksProvider = ({ children }) => {
  const [tasksState, tasksDispatch] = useReducer(tasksReducer, initState);

  const [pathColor, setPathColor] = useState("darkcyan");

  useEffect(() => {
    localStorage.setItem("campFireTasks", JSON.stringify(tasksState.tasks));
  }, [tasksState.tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasksState,
        tasksDispatch,
        pathColor,
        setPathColor,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
