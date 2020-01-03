import React from 'react';
import { Layout, Menu } from 'antd';
import Container from './Container';

function Nav() {
  return (
    <Layout className="layout" style={{ backgroundColor: '#001529' }}>
      <Container>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">AR Content</Menu.Item>
        </Menu>
      </Container>
    </Layout>
  );
}

export default Nav;