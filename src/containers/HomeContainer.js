import React, { Component } from 'react';
import { Row, Col, Input, Card } from 'antd';
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
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 10, offset: 7 }}  >
          <Card style={{ marginTop: '200px' }}>
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '24px', 
              fontSize: '1rem' }}
            >
              Enter URL to archive content
            </div>
            <UrlInput
              placeholder="e.g www.bbc.com/sport/football/51093972"
              enterButton="Submit"
              size="large"
              onSearch={this.handleUrlSubmit}
              loading={searchLoading}
            />
          </Card>
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