import React, { Component } from 'react';
import { Radio, Typography, Button, Layout, Modal } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push as pushA } from 'connected-react-router';
import ContentViewer from '../components/ContentViewer';
import Container from '../components/Container';
import { parsers, contentType } from '../utils/constants';
import {
  getUrlHtmlPreview as getUrlHtmlPreviewAction,
  getUrlTextPreview as getUrlTextPreviewAction
} from '../actions/actionCreators/content/index';

const { Content } = Layout;
const { Title } = Typography;

class PreviewContainer extends Component {
  state = {
    contentTypeValue: contentType.HTML,
    visible: false,
    confirmLoading: false,
    textParser: ""
  }

  onChange = e => {
    this.setState({
      contentTypeValue: e.target.value
    })
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  retryHandler = async () => {
    const { getUrlHtmlPreview, url, htmlParser, textParser, getUrlTextPreview } = this.props;
    const { contentTypeValue } = this.state;

    if (contentTypeValue === contentType.HTML) {
      const { html: htmlParsers } = parsers;
      const newValue = htmlParser + 1;
      const nextHtmlParser = newValue % Object.keys(htmlParsers).length;

      getUrlHtmlPreview(url, nextHtmlParser, htmlParsers[nextHtmlParser]);
    } else if (contentTypeValue === contentType.TEXT) {
      const { text: textParsers } = parsers;
      const newValue = textParser + 1;
      const nextTextParser = newValue % Object.keys(textParsers).length;

      getUrlTextPreview(url, nextTextParser, textParsers[nextTextParser]);
    }
  }
  
  render() {
    const { html, text } = this.props;
    // TODO: rename value type
    const { contentTypeValue, visible, confirmLoading } = this.state; 

    return (
      <Container>
        <div style={{ 
          backgroundColor: '#fff',
          padding: '16px 32px',
          margin: '32px 0' 
        }}>
          <Content>
            <Title level={3} style={{ margin: '16px 0px' }}>Choose Content type</Title>
            <Radio.Group onChange={this.onChange} value={contentTypeValue} style={{ marginBottom: '16px' }}>
              <Radio value={contentType.HTML}>Html</Radio>
              <Radio value={contentType.TEXT}>Text</Radio>
            </Radio.Group>
            <ContentViewer style={{ marginBottom: '16px' }} retryHandler={this.retryHandler}>
              { contentTypeValue === contentType.TEXT ? text : html}
            </ContentViewer>
            <Button type="primary" onClick={this.showModal}>Submit</Button>
            <Modal
              title="Confirm"
              visible={visible}
              onOk={this.handleOk}
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
            >
              <p>Hey yo</p>
            </Modal>
          </Content>

        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { content } = state;

  return {
    html: content.html,
    text: content.text,
    url: content.currentUrl,
    htmlParser: content.htmlParser,
    textParser: content.textParser,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    push: pushA,
    getUrlHtmlPreview: getUrlHtmlPreviewAction,
    getUrlTextPreview: getUrlTextPreviewAction
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewContainer);