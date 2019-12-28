import React from 'react';
import { Card } from 'antd';

function ContentViewer({ children, ...otherProps }) {
  return (
    <Card 
      type="inner" 
      title="Preview"
      bodyStyle={{ height: '600px', overflowY: 'scroll' }} 
      { ...otherProps }>
      <div dangerouslySetInnerHTML={{__html: children }}>
      </div>
    </Card>
  )
}

export default ContentViewer;