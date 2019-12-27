import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';

const { Search: UrlInput } = Input;

class HomeContainer extends Component {
  render() {
    return (
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
    );
  }
}

export default HomeContainer;