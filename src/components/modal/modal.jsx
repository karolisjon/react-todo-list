import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as SVGClose } from '../../assets/close.svg';
import { ReactComponent as SVGError } from '../../assets/error.svg';
import '../modal/modal.css';

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className='modal'>
      <div className='top'>
        {<SVGError className='error-icon'/>}
      </div>
      <div className='bottom'>
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
