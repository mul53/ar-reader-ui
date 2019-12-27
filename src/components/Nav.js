import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

function Nav() {
  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">AR Content</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default Nav;