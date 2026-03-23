import React, { useContext } from 'react'
import AppContext from "../Context/AppContext.jsx"
import { Navigate } from 'react-router-dom';

const UserProtect = ({  children }) => {
  const { isAuthenticated, role, loading } = useContext(AppContext);
  
  console.log("Role---", role);
  if(loading) return <div>Loading...</div>;
  
  
  if (!isAuthenticated) return <Navigate to="/log" replace />;

  // if (role !== "user") return <Navigate to={`/${role}`} replace />;

  return <>{children}</>;
};

export default UserProtect;