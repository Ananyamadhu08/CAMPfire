import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [userDB, setUserDB] = useState(
    JSON.parse(localStorage.getItem("usersInfo")) || []
  );

  const [authenticated, setAuthenticated] = useState(
    JSON.parse(localStorage.getItem("authenticated")) || false
  );

  useEffect(() => {
    localStorage.setItem("usersInfo", JSON.stringify(userDB));
  }, [userDB]);

  useEffect(() => {
    localStorage.setItem("authenticated", JSON.stringify(authenticated));
    navigate("/");
  }, [authenticated]);

  return (
    <AuthContext.Provider
      value={{ userDB, setUserDB, authenticated, setAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
