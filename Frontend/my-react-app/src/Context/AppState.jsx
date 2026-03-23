import React from "react";
import AppContext from "./AppContext";
import axios from "axios";
import { useState, useEffect } from "react";
const AppState = (props) => {
  const url = "http://localhost:3000/api";
  const [token, setToken] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  const registration = async (name, email, password, role) => {
    const api = await axios.post(
      `${url}/user/register`,
      { name, email, password, role },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );
    console.log(api);
    return api;
  };

  const login = async (email, password) => {
    const api = await axios.post(
      `${url}/user/login`,
      { email, password },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );
    console.log(api);

    if (api.data.success) {
      const freshToken = api.data.token;

      setToken(freshToken);
      localStorage.setItem("token", freshToken);
      setIsAuthenticated(true);
      localStorage.setItem("role", api.data.role);
      setRole(api.data.role);
      
    }
    return api;
  };

  useEffect(() => {
    let lstoken = localStorage.getItem("token");
    if (lstoken) {
      setToken(lstoken);
      setIsAuthenticated(true);
      setRole(localStorage.getItem("role"));
    }

    setLoading(false);
  }, []);

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AppContext.Provider value={{ registration, login , token, isAuthenticated , logout, role, loading }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
