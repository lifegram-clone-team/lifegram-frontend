import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/common/Header";
import Profile from "../pages/Profile";
import Main from "../pages/Main";

const Nav = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="main" element={<Main />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Nav;
