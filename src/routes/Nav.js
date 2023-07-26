import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/common/Header";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Main from "../pages/Main";
import NotAuthRoutes from "./NotAuthRoutes";
import AuthRoutes from "./AuthRoutes";

const Nav = () => {
  const user = Boolean(localStorage.getItem("accessToken"));

  return (
    <Routes>
      <Route element={<NotAuthRoutes user={user} />}>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/*" element={<div>404</div>} />
      </Route>

      <Route element={<AuthRoutes user={user} />}>
        <Route element={<Header />}>
          <Route path="/main" element={<Main />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>

      <Route path={"/*"} element={<div>404</div>} />
    </Routes>
  );
};

export default Nav;
