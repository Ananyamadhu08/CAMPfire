import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../context";
import { Home, Login, Signup, TaskDetails, Tasks } from "../pages";
import PrivateRouter from "./PrivateRouter";

const WebsiteRoutes = () => {
  const { authenticated } = useAuth();

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={authenticated ? <Home /> : <Login />} />
      <Route
        path="/tasks"
        element={
          <PrivateRouter>
            <Tasks />
          </PrivateRouter>
        }
      />
      <Route
        path="/tasks/:taskId"
        element={
          <PrivateRouter>
            <TaskDetails />
          </PrivateRouter>
        }
      />
    </Routes>
  );
};

export default WebsiteRoutes;
