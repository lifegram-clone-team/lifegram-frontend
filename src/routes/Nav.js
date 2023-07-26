import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/common/Header';
import Profile from '../pages/Profile';
import Detail from '../pages/Detail';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Main from '../pages/Main';

const Nav = () => {
  return (
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/' element={<Header />}>
        <Route path='profile' element={<Profile />} />
        <Route path='main' element={<Main />} />
        <Route path='/:id' element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default Nav;
