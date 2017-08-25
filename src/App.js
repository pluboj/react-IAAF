import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/Home';
import Sprints from './components/Sprints';
import Jumps from './components/Jumps';
import Throws from './components/Throws';
import Combined from './components/Combined';
import Error404 from './components/Error404';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />   
          <Route path="/sprints" component={Sprints} />
          <Route path="/jumps" component={Jumps} />
          <Route path="/throws" component={Throws} />
          <Route path="/combined" component={Combined} />
          <Route component={Error404} /> 
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
