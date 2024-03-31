import React from 'react';

const ColorChanger = ({ color }) => {
  const squareStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: color,
    margin: '5px'
  };

  return (
    <div className="color-changer-square" style={squareStyle}></div>
  );
};

export default ColorChanger;
