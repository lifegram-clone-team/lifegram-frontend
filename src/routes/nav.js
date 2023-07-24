import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/common/Header';
import Profile from '../pages/Profile';
import DetailModal from '../components/detail/DetailModal';
import ModalAdd from '../components/add/ModalAdd';



const Nav = () => {
  //네비게이션
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='profile' element={<Profile />} />
      </Route>
      <Route path='/detail' element={<DetailModal />} />
      <Route path='/add' element={<ModalAdd />} />
    </Routes>
  );
};

export default Nav;
