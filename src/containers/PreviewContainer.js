import React, { Component } from 'react';
import { Radio, Typography, Button, Layout, Modal } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push as pushA } from 'connected-react-router';
import ContentViewer from '../components/ContentViewer';
import Container from '../components/Container';
import { parsers, contentType } from '../utils/constants';

const { Content } = Layout;
const { Title } = Typography;

class PreviewContainer extends Component {
  state = {
    contentTypeValue: contentType.HTML,
    visible: false,
    confirmLoading: false,
    htmlParser: 0,
    textParser: ""
  }

  onChange = e => {
    this.setState({
      value: e.target.value
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

  retryHandler = () => {
    const { value, htmlParser } = this.state;

    if (value === contentType.HTML) {
      const { html: htmlParsers } = parsers;
      const newValue = htmlParser + 1;
      const nextHtmlParser = newValue % htmlParsers.length;

      this.setState({
        htmlParser: nextHtmlParser
      });
    }
  }
  
  render() {
    const { html } = this.props;
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
              { contentTypeValue === contentType.TEXT ? "" : html}
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
    html: content.html
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ push: pushA }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewContainer);