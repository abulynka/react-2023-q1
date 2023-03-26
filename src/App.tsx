import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Form from './pages/Form';
import HeaderComponent from './components/header/HeaderComponent';

class App extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}

export default App;
