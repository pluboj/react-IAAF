import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/Home';
import Sprints from './components/Sprints';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Header />
        <Route exact path="/" component={Home} />   
        <Route exact path="/sprints" component={Sprints} />  
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
