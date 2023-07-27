import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/common/Header';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Main from '../pages/Main';
import AddPost from '../pages/AddPost';
import ModifyPost from '../pages/ModifyPost';
import NotAuthRoutes from './NotAuthRoutes';
import AuthRoutes from './AuthRoutes';
import Detail from '../pages/Detail';
import Tqtq from '../pages/Tqtq';

const Nav = () => {
  const user = Boolean(localStorage.getItem('accessToken'));

  return (
    <Routes>
      <Route element={<NotAuthRoutes user={user} />}>
        <Route path='/' element={<Signin />} />
        <Route path='/register' element={<Signup />} />
      </Route>

      <Route element={<AuthRoutes user={user} />}>
        <Route element={<Header />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/main' element={<Main />} />
          <Route path='/post/:id' element={<Detail />} />
          <Route path='/tqtq' element={<Tqtq />} />
        </Route>
        <Route path='/add' element={<AddPost />} />
        <Route path='/modify/:id' element={<ModifyPost />} />
      </Route>

      <Route path={'/*'} element={<div>404</div>} />
    </Routes>
  );
};

export default Nav;
