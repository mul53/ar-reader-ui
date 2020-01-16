import React, { Component } from 'react';
import { Radio, Typography, Button, Layout, Modal, Checkbox, PageHeader, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push as pushA } from 'connected-react-router';
import ContentViewer from '../components/ContentViewer';
import { parsers, contentType } from '../utils/constants';
import {
  postUrlHtmlPreview as getUrlHtmlPreviewAction,
  postUrlTextPreview as getUrlTextPreviewAction,
  postUrlExtractSubmit as postUrlExtractSubmitAction
} from '../actions/actionCreators/content/index';

const { Content } = Layout;
const { Title } = Typography;

class PreviewContainer extends Component {
  state = {
    contentTypeValue: contentType.HTML,
    visible: false,
    confirmLoading: false,
    checkedConsent: false,
    consentValidationErrorMessage: ''
  }

  onChange = e => {
    
    const { text, getUrlTextPreview, url } = this.props;
    
    this.setState({
      contentTypeValue: e.target.value
    }, () => {
      if (this.state.contentTypeValue === contentType.TEXT && !text.length) {
          getUrlTextPreview(url, 0);
      }
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
    } 
    else if (contentTypeValue === contentType.TEXT) {
      const { text: textParsers } = parsers;
      const newValue = textParser + 1;
      const nextTextParser = newValue % Object.keys(textParsers).length;

      getUrlTextPreview(url, nextTextParser, textParsers[nextTextParser]);
    }
  }

  handleConsent = () => {
    const { checkedConsent, consentValidationErrorMessage } = this.state;

    this.setState({
      checkedConsent: !checkedConsent
    }, () => {
      if (!checkedConsent && consentValidationErrorMessage.length) {
        this.setState({
          consentValidationErrorMessage: ''
        });
      } 
    });
  }

  handleSubmit = () => {
    const { checkedConsent, contentTypeValue } = this.state;
    const { url, htmlParser, textParser, postUrlExtractSubmit } = this.props;
    
    if (!checkedConsent) {
      this.setState({
        consentValidationErrorMessage: "Please check the field before submitting content."
      })
      return;
    }

    if (contentTypeValue === contentType.HTML) {
      postUrlExtractSubmit(url, "html", htmlParser);
    } else if (contentTypeValue === contentType.TEXT) {
      postUrlExtractSubmit(url, "text", textParser);
    }
  }
  
  render() {
    const { html, text, push, submitLoading } = this.props;
    // TODO: rename value type
    const { contentTypeValue, visible, confirmLoading, checkedConsent, consentValidationErrorMessage } = this.state; 

    return (
      <Row>
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 12, offset: 6 }}  >
            <div style={{ 
              backgroundColor: '#fff',
              padding: '16px',
              margin: '16px 0px'
            }}>
              <Content>
                <PageHeader
                  style={{
                    padding: "16px 0px 0px 0px"
                  }}
                  onBack={() => push('/')}
                  title="Preview"
                />
                <Title level={4} style={{ margin: '16px 0px' }}>Choose Content type</Title>
                <Radio.Group onChange={this.onChange} value={contentTypeValue} style={{ marginBottom: '16px' }}>
                  <Radio value={contentType.HTML}>Html</Radio>
                  <Radio value={contentType.TEXT}>Text</Radio>
                </Radio.Group>
                <ContentViewer className="content-viewer" style={{ marginBottom: '16px' }} retryHandler={this.retryHandler}>
                  { contentTypeValue === contentType.TEXT ? text : html}
                </ContentViewer>
                <div
                  style={{
                    marginBottom: "16px"
                  }}
                >
                  <Checkbox
                    checked={checkedConsent}
                    onChange={this.handleConsent}
                  >
                    Yes, I'm responsible for the archived content and the content is not copyright protected.
                  </Checkbox>
                  { consentValidationErrorMessage.length ?
                    <div style={{ color: 'red' }}>{ consentValidationErrorMessage }</div> : null
                  }
                </div>
                <Button type="primary" loading={submitLoading} onClick={this.handleSubmit}>Submit</Button>
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
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  const { content, ui } = state;

  return {
    html: content.html,
    text: content.text,
    url: content.currentUrl,
    htmlParser: content.htmlParser,
    textParser: content.textParser,
    submitLoading: ui.submitLoading
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    push: pushA,
    getUrlHtmlPreview: getUrlHtmlPreviewAction,
    getUrlTextPreview: getUrlTextPreviewAction,
    postUrlExtractSubmit: postUrlExtractSubmitAction
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewContainer);