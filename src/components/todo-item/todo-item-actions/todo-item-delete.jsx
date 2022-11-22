import React from 'react';
import { ReactComponent as SVGDelete } from '../../../assets/delete.svg';
import '../../../components/todo-item/todo-item.css';

const TodoItemDelete = ({ onDelete }) => {

  return (
    <button type='button' onClick={onDelete}>
      <div className='icon'>
        {<SVGDelete />}
      </div>
    </button>
  )
}

export default TodoItemDelete;
