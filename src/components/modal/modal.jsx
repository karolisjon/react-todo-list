import React from 'react';
import '../modal/modal.css';

const Modal = ({ open }) => {

  if(!open) return null;

  return (
    <form action="submit" className='modal'>
      <label for='edit-input'>Edit your todo item</label>
      <div className='input-container'>
        <input type="text" id='edit-input' />
        <button className='edit-button'>Done</button>
      </div>
    </form>
  )
}

export default Modal;
