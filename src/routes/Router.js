import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/register" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
