import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as SVGClose } from '../../assets/close.svg';
import '../modal/modal.css';

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className='modal'>
      <div className='label-container'>
        <p>You cannot add an empty todo item!</p>
        <button type='action' >
          <div className='close-icon' onClick={onClose}>
            {<SVGClose />}
          </div>
        </button>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal;
