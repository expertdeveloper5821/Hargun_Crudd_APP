import React, { useContext } from 'react'
import AppContext from "../Context/AppContext.jsx"
import { Navigate } from 'react-router-dom';
import NoPermission from './NoPermission.jsx';   
const AdminProtect = ({ children }) => {
  const { isAuthenticated, role, loading } = useContext(AppContext);
  
  console.log("Adminrole", {role, isAuthenticated});

  if(loading) return <div>Loading...</div>;   
 
  if (!isAuthenticated) return <Navigate to="/log" replace />;

  if (role !== "admin") return <NoPermission />

  return <>{children}</>;
};

export default AdminProtect;