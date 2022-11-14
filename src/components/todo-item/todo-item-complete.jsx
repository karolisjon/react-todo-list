import React from 'react';
import { ReactComponent as SVGComplete } from '../../assets/complete.svg';
import '../../styles/UI/todo-items/todo-item.css';

const TodoItemComplete = () => {
  return (
    <button type='button'>
    <div className='icon'>
      {<SVGComplete />}
    </div>
  </button>
  )
}

export default TodoItemComplete;
