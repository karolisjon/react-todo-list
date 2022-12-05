import React from 'react';
import ReactDOM from 'react-dom';
import '../modal/modal.css';

const Modal = ({ open }) => {
  if(!open) return null;

  return ReactDOM.createPortal(
    <form action="submit" className='modal'>
      <label for='edit-input'>Edit your todo item</label>
      <div className='input-container'>
        <input type="text" id='edit-input' />
        <button className='edit-button'>Done</button>
      </div>
    </form>,
    document.getElementById('portal')
  )
}

export default Modal;
