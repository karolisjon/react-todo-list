import React from 'react';
import TodoItemComplete from './todo-item-complete';
import TodoItemDelete from './todo-item-delete';

const TodoItem = ({ children }) => {
  return (
    <div className='todo-item'>
      {children}
      <div>
        <TodoItemComplete />
        <TodoItemDelete />
      </div>
    </div>
  )
}

export default TodoItem;
