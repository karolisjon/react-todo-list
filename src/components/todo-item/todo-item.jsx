import React from 'react';
import TodoItemDelete from './todo-item-delete';

const TodoItem = ({ children }) => {
  return (
    <div className='todo-item'>
      {children}
      <TodoItemDelete />
    </div>
  )
}

export default TodoItem;
