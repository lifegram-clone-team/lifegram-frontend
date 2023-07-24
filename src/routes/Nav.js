import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/common/Header";
import Profile from "../pages/Profile";
import Main from "../pages/Main";
import DetailModal from "../components/detail/DetailModal";

const Nav = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="main" element={<Main />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/detail" element={<DetailModal />} />
    </Routes>
  );
};

export default Nav;
