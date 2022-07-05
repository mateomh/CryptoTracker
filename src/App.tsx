
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Coins from './pages/Coins';
import HomePage from './pages/HomePage';
import {useAppStyles} from './styles/useAppStyles';

function App() {
  const styleClasses = useAppStyles();

  return (
    <div className={styleClasses.App}>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/coin/:id' element={<Coins/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
