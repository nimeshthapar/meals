import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from '../../Shared/UI/Backdrop/Backdrop';
import './SideDrawer.css';

const Overlay = (props) => {
  const element = <aside className="side">{props.children}</aside>;

  return ReactDOM.createPortal(
    element,
    document.getElementById('overlay-root')
  );
};

const SideDrawer = (props) => {
  return (
    <>
      <Backdrop onClose={props.onClose} />
      <Overlay {...props} />
    </>
  );
};

export default SideDrawer;
