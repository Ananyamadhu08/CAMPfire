import { Navigate, useLocation } from "react-router-dom";

import React from "react";

const PrivateRouter = ({ children }) => {
  const authenticated = localStorage.getItem("authenticated");

  let location = useLocation();

  return authenticated ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivateRouter;
