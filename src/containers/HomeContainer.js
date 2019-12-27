import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import { withRouter } from 'react-router-dom';
import readerService from '../api/readerService';

const { Search: UrlInput } = Input;

class HomeContainer extends Component {
  state = {
    loading: false,
  }
  
  handleUrlSubmit = async (url) => {
    this.toggleLoading();
    const content = await readerService.postUrlPreview(url);
    this.props.history.push('/preview')
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

export default withRouter(HomeContainer);