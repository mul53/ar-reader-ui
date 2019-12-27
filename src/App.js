import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';

import './App.css';
import Nav from './Nav';

const { Search: UrlInput } = Input;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Row>
          <Col span={8} offset={8}>
            <UrlInput
              placeholder="Enter URL"
              enterButton="Submit"
              size="large"
              onSearch={value => console.log(value)}
              style={{
                marginTop: '200px'
              }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
