import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  postUrlHtmlPreview as getUrlHtmlPreviewAction
} from '../actions/actionCreators/content';
import {
  parsers
} from '../utils/constants';

const { Search: UrlInput } = Input;

class HomeContainer extends Component {
  handleUrlSubmit = (url) => {
    const { getUrlHtmlPreview } = this.props;
    const [ defaultParser, ] = Object.entries(parsers.html);
    const [ key, parserId ] = defaultParser;
    getUrlHtmlPreview(url, key, parserId);
  }

  render() {
    const { searchLoading } = this.props;

    return (
      <Row>
        <Col span={8} offset={8}>
          <UrlInput
            placeholder="Enter URL"
            enterButton="Submit"
            size="large"
            onSearch={this.handleUrlSubmit}
            loading={searchLoading}
            style={{
              marginTop: '200px'
            }}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  const { ui } = state;
  return { searchLoading: ui.searchLoading }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
      getUrlHtmlPreview: getUrlHtmlPreviewAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);