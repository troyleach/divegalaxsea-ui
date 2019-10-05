import React from 'react';
import logo from './logo.svg';

import './App.css';
import { Container } from '@material-ui/core';

import Home from './Home';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Container fixed>
        <Home />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
