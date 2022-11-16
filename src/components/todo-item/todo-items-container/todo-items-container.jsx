import React from 'react';
import TodoItem from '../todo-item';
import './todo-items-container.css';

const TodoItemsContainer = ({ todoItems }) => {
  return (
    <div className='todo-items-container'>
      {todoItems.map(({ id, text }) => (
        <TodoItem key={id} text={text} />
      ))}
    </div>
  )
}

export default TodoItemsContainer;
