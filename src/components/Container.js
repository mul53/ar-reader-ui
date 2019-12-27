import React from 'react';

function Container({ children }) {
  return (
    <div style={{
      width: '1120px',
      margin: '0 auto',
      maxWidth: '80%'
    }}>
      { children }
    </div>
  )
}

export default Container;