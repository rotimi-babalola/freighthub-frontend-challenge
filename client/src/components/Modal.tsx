import * as React from 'react';

import '../styles/modal.scss';

const Modal = ({ handleClose, show, children, handleSave, showSaveButton }) => {
  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
      <section className="modal-main">
        {children}
        <div className="actions">
          {showSaveButton && <button onClick={handleSave}>Save</button>}
          <button onClick={handleClose}>Close</button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
