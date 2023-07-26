import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const NotAuthRoutes = ({ user }) => {
  return user ? <Navigate to="/main" /> : <Outlet />;
};

export default NotAuthRoutes;
