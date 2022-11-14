import React from 'react';
import '../styles/UI/todo-item.css';

const TodoItem = (props) => {
  return (
    <div className='todo-item'>{props.children}</div>
  )
}

export default TodoItem;
