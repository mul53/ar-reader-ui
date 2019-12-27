import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import HomeContainer from './containers/HomeContainer';
import PreviewContainer from './containers/PreviewContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/preview">
            <PreviewContainer />
          </Route>
          <Route path="/" >
            <HomeContainer />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
