import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
