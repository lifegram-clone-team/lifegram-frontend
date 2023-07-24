import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Home from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="home" element={<Home />} />
        <Route path="/register" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
