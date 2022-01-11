import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';
import Card from '../Card/Card';
import './Modal.css';

const Overlay = (props) => {
  const element = (
    <div className="overlay">
      <Card className="modal-card">
        <header className={`modal-header ${props.headerClass}`}>
          <h3>Oops !!😢</h3>
        </header>
        <main className={`main ${props.mainClass}`}>{props.error}</main>
        <footer className={`footer ${props.footerClass}`}>
          <Button title="Close" onClick={props.onClose} />
        </footer>
      </Card>
    </div>
  );

  return ReactDOM.createPortal(
    element,
    document.getElementById('overlay-root')
  );
};

const Modal = (props) => {
  return (
    <>
      <Backdrop onClose={props.onClose} />
      <Overlay {...props} />
    </>
  );
};

export default Modal;
