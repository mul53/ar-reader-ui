import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import './App.css';
import Nav from './components/Nav';
import HomeContainer from './containers/HomeContainer';
import PreviewContainer from './containers/PreviewContainer';
import ResultContainer from './containers/ResultContainer';

const { Content } = Layout;

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Layout>
          <Content>
            <Switch>
              <Route path="/submit/success">
                <ResultContainer />
              </Route>
              <Route path="/submit/preview">
                <PreviewContainer />
              </Route>
              <Route path="/" >
                <HomeContainer />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default connect()(App);
