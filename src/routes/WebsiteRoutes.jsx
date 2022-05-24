import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, TaskDetails, Tasks } from "../pages";

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tasks/:taskId" element={<TaskDetails />} />
    </Routes>
  );
};

export default WebsiteRoutes;
