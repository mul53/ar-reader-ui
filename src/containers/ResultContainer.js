import React, { Component } from 'react';
import { Result, Button, Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push as pushA } from 'connected-react-router';

class ResultContainer extends Component {

  handleBtn = () => {
    const { push } = this.props;

    push('/');
  }

  render() {
    const { txId } = this.props;
    
    return (
      <Row>
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 12, offset: 6 }}  >
            <div style={{ 
              backgroundColor: '#fff',
              padding: '16px',
              margin: '16px 0px'
            }}>
            <Result
              status="success"
              title="Your page has been successfully archived!"
              style={{ wordBreak: 'break-word' }}
              subTitle={(
                <>
                  Txn id: { txId }, Your permaweb link is <a 
                                                            href={`https://arweave.net/${txId}`}  
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            >
                                                              { `https://arweave.net/${txId}` }
                                                          </a>
                </>
              )}
              extra={[
                <Button type="primary" onClick={this.handleBtn}>
                  Archive another page
                </Button>
              ]}
            />
        </div>
      </Col>
    </Row>
    )
  }
}

const mapStateToProps = state => {
  const { content } = state;

  return {
    txId: content.txId
  }
}

const mapDispatchToProps = disptach => {
  return bindActionCreators({ push: pushA }, disptach);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);