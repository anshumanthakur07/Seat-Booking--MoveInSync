import React from 'react';
import './button.css';

const Button = ({ text, isoutline }) => {
  return (
    <div>
      <button className={ isoutline? 'outline-btn' : 'primary-btn'}>{text}</button>
    </div>
  );
};

export default Button;
