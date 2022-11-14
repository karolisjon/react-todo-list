import React from 'react';
import { ReactComponent as SVGDelete } from '../assets/delete.svg';
import '../styles/UI/todo-item.css';

const TodoItem = ({ children }) => {
  return (
    <div className='todo-item'>
      {children}
      <button type='button'>
        <div className='delete-icon'>
          {<SVGDelete />}
        </div>
      </button>
    </div>
  )
}

export default TodoItem;
