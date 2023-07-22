import React from 'react';
import './App.css';
import ModalAdd from "./pages/modalAdd";
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
     <ModalAdd/>
    </BrowserRouter>
  );
};

export default App;
