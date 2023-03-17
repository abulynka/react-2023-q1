import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}

export default App;
