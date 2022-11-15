import React from 'react';
import TodoItemComplete from './todo-item-actions/todo-item-complete';
import TodoItemDelete from './todo-item-actions/todo-item-delete';
import './todo-item.css';

const TodoItem = ({ text }) => {
  return (
    <div className='todo-item'>
      <p>{text}</p>
      <div>
        <TodoItemComplete />
        <TodoItemDelete />
      </div>
    </div>
  )
}

export default TodoItem;
