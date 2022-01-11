import React from 'react';

import './Button.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      onClick={props.onClick}
      className={
        props.disabled
          ? 'disabled'
          : props.inverse
          ? 'button inverse'
          : 'button'
      }
    >
      {props.title}
    </button>
  );
};

export default Button;
