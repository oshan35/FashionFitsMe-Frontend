import React from 'react';
import './ShiningButton.css'

const ShiningButton = ({ children, onClick }) => {
  return (
    <button className="shining-button">
      <span>{children}</span>
    </button>
  );
};

export default ShiningButton;
