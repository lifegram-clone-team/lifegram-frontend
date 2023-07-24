import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/common/Header';
import Profile from '../pages/Profile';
import DetailModal from '../components/detail/DetailModal';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';

const Nav = () => {
  return (
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/" element={<Signin />} />
      <Route path="/" element={<Header />}>
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/detail" element={<DetailModal />} />
    </Routes>
  );
};

export default Nav;
