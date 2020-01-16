import React from 'react';
import { Card, Button } from 'antd';
import { connect } from 'react-redux';

function ContentViewer({ children, retryHandler, cardLoading, ...otherProps }) {
  return (
    <Card 
      className="content-viewer"
      type="inner" 
      title="Preview"
      headStyle={{ backgroundColor: '#001529', color: 'rgba(255, 255, 255, 0.65)' }}
      bodyStyle={{ height: '600px', overflowY: 'scroll' }} 
      { ...otherProps }
      extra={ <Button type="primary" onClick={retryHandler}>Retry</Button> }
      loading={cardLoading}
      >
      <div dangerouslySetInnerHTML={{__html: children }}>
      </div>
    </Card>
  )
}

const mapStateToProps = state => {
  const { ui } = state;

  return {
    cardLoading: ui.cardLoading
  }
}

export default connect(mapStateToProps)(ContentViewer);