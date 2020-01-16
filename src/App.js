import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import Navbar from './components/Navbar';

import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/rooms" component={Rooms}/>
          <Route exact path="/rooms/:slug" component={SingleRoom}/>
          <Route component={Error}/>
        </Switch>
      </div>
    );
  }
}

export default App;
