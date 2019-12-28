import React, { Component } from 'react';
import { Radio, Typography, Button, Layout, Modal } from 'antd';
import { connect } from 'react-redux';
import ContentViewer from '../components/ContentViewer';
import Container from '../components/Container';

const { Content } = Layout;
const { Title } = Typography;

class PreviewContainer extends Component {
  state = {
    value: 1,
    visible: false,
    confirmLoading: false
  };

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
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };
  
  render() {
    const { content } = this.props;
    const { value: mode, visible, confirmLoading } = this.state; 

    return (
      <Container>
        <div style={{ 
          backgroundColor: '#fff',
          padding: '16px 32px',
          margin: '32px 0' 
        }}>
          <Content>
            <Title level={3} style={{ margin: '16px 0px' }}>Choose Content type</Title>
            <Radio.Group onChange={this.onChange} value={this.state.value} style={{ marginBottom: '16px' }}>
              <Radio value={1}>Text</Radio>
              <Radio value={2}>Formatted Text</Radio>
            </Radio.Group>
            <ContentViewer style={{ marginBottom: '16px' }}>
              { mode === 1 ? content.text : content.formatted_text }
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
  const { preview } = state;

  return {
    content: preview.content
  }
}

export default connect(mapStateToProps)(PreviewContainer);