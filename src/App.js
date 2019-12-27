import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HomeContainer />
      </div>
    );
  }
}

export default App;
