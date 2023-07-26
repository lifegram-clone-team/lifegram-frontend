import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoutes;
