import React from 'react';
import TodoItem from '../todo-item';
import './todo-items-container.css';

const items = [
  { id: 1, text: 'get a haircut' },
  { id: 2, text: 'wash dishes' },
  { id: 3, text: 'take a shower' },
];

const TodoItemsContainer = () => {

  return (
    <div className='todo-items-container'>
      {items.map(({ id, text }) => (
        <TodoItem key={id} text={text} />
      ))}
    </div>
  )
}

export default TodoItemsContainer;
