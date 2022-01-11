import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = (props) => {
  const element = <div className="backdrop" onClick={props.onClose}></div>;
  return ReactDOM.createPortal(
    element,
    document.getElementById('backdrop-root')
  );
};

export default Backdrop;
