import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push as pushA } from 'connected-react-router';
import Container from '../components/Container';

class ResultContainer extends Component {

  handleBtn = () => {
    const { push } = this.props;

    push('/');
  }

  render() {
    const { txId } = this.props;
    
    return (
      <Container>
        <div style={{ 
          backgroundColor: '#fff',
          padding: '16px 32px',
          margin: '32px 0' 
        }}>
          <Result
            status="success"
            title="Your page has been successfully archived!"
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
      </Container>
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