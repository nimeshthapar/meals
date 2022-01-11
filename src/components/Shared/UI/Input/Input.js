import React from 'react';

import './Input.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="form-control">
      <label htmlFor={props.for}>{props.label}</label>
      {!props.textarea && (
        <input type="text" placeholder={props.placeholder} ref={ref} />
      )}
      {props.textarea && (
        <textarea
          rows={props.rows || 3}
          placeholder={props.placeholder}
          ref={ref}
        />
      )}
    </div>
  );
});

export default Input;
