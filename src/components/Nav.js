import React from 'react';
import { Layout, Row, Col } from 'antd';

function Nav() {
  return (
    <Layout className="layout" style={{ backgroundColor: '#001529' }}>
      <Row>
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 12, offset: 6 }}  >
            <div className="logo" style={{ padding: '18px 0', color: 'white', fontSize: '1rem' }}>Content Archiver</div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Nav;