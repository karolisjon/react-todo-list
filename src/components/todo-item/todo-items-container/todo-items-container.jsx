import React from 'react';
import TodoItem from '../todo-item';
import './todo-items-container.css';

const TodoItemsContainer = ({ todoItems, onDelete }) => {

  return (
    <div className='todo-items-container'>
      {todoItems.map(({ id, text }) => (
        <TodoItem 
        key={id} 
        id={id}
        text={text}
        onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TodoItemsContainer;
