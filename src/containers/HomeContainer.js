import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';

import readerService from '../api/readerService';

const { Search: UrlInput } = Input;

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    }
  }
  
  handleUrlSubmit = async (url) => {
    this.toggleLoading();
    const content = await readerService.postUrlPreview(url);
    this.toggleLoading();
  }

  toggleLoading() {
    this.setState({
      loading: !this.state.loading 
    })
  }

  render() {
    const { loading } = this.state;

    return (
      <Row>
          <Col span={8} offset={8}>
            <UrlInput
              placeholder="Enter URL"
              enterButton="Submit"
              size="large"
              onSearch={this.handleUrlSubmit}
              loading={loading}
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