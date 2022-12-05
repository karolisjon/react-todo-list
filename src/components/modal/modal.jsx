import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as SVGClose } from '../../assets/close.svg';
import '../modal/modal.css';

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('edited todo')
  };

  return ReactDOM.createPortal(
    <div className='modal'>
      <div className='label-container'>
        <label htmlFor='edit-input'>Edit your todo item</label>
        <button type='action' onClick={onClose}>
          <div className='close-icon'>
            {<SVGClose />}
          </div>
        </button>
      </div>
      <form action="submit" onSubmit={handleSubmit}>
        <div className='input-container'>
          <input type="text" id='edit-input' />
          <button className='edit-button'>Done</button>
        </div>
      </form>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal;
