import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
    
    </Container>
  </BrowserRouter>
);

export default App;