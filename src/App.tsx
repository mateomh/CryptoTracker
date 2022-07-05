import { makeStyles } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Coins from './pages/Coins';
import HomePage from './pages/HomePage';

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight:'100vh',
    }
  })

  );

  const styleClasses = useStyles();


  return (
    <BrowserRouter>
      <Routes>
        <div className={styleClasses.App}>
          <Header />
          <Route path='/' element={<HomePage/>} />
          <Route path='/coin/:id' element={<Coins/>} />
        </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
