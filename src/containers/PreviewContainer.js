import React, { Component } from 'react';
import { Radio, Typography, Button, Layout } from 'antd';
import ContentViewer from '../components/ContentViewer';
import Container from '../components/Container';

const { Content } = Layout;
const { Title } = Typography;

class PreviewContainer extends Component {
  state = {
    value: 1
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  
  render() {
    return (
      <Container>
        <Content>
          <Title level={2}>Choose mode</Title>
          <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio value={1}>Text</Radio>
            <Radio value={2}>Formatted Text</Radio>
          </Radio.Group>
          <ContentViewer>
            a
          </ContentViewer>
          <Button type="primary">Submit</Button>
        </Content>
      </Container>
    );
  }
}

export default PreviewContainer;