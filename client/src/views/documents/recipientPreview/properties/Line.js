import React from 'react';

export default function Line({ item }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: `${item.width}px`,
        left: `${item.left}px`,
        top: `${item.top}px`
      }}
    >
      <div
        className="box"
        style={{
          width: `${item.width}px`,
          height: `3px`,
          backgroundColor: 'black',
          transform: `scale(${item.formatting / 100})`
        }}
      ></div>
    </div>
  );
}
