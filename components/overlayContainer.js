import React from 'react';
import ReactDOM from 'react-dom';
import SubmitOverlay from './submitOverlay';

const OverlayContainer = ({ visible, toggle }) =>
  visible
    ? ReactDOM.createPortal(
        <section className="p-2.5 w-full absolute top-0 left-0 h-screen bg-light z-10">
          <SubmitOverlay toggle={toggle} />
        </section>,
        document.body
      )
    : null;

export default OverlayContainer;
