import React from 'react';
import { ReactComponent as SVGDelete } from '../../assets/delete.svg';
import '../../styles/UI/todo-items/todo-item.css';

const TodoItemDelete = () => {
  return (
    <button type='button'>
      <div className='icon'>
        {<SVGDelete />}
      </div>
    </button>
  )
}

export default TodoItemDelete;
