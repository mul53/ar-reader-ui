import React from 'react';
import { Card, Button } from 'antd';

function ContentViewer({ children, retryHandler,...otherProps }) {
  return (
    <Card 
      type="inner" 
      title="Preview"
      bodyStyle={{ height: '600px', overflowY: 'scroll' }} 
      { ...otherProps }
      extra={ <Button type="primary" onClick={retryHandler}>Retry</Button> }
      >
      <div dangerouslySetInnerHTML={{__html: children }}>
      </div>
    </Card>
  )
}

export default ContentViewer;