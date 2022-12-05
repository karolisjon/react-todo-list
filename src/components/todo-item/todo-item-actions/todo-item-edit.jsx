import React from 'react';
import { ReactComponent as SVGEdit } from '../../../assets/edit.svg';

const TodoItemEdit = ({ onEdit }) => {
  
  return (
    <button type='button' onClick={onEdit}>
    <div className='icon'>
      {<SVGEdit />}
    </div>
  </button>
  )
}

export default TodoItemEdit;
