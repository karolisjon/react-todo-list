import React, { useState } from 'react';
import TodoItemComplete from './todo-item-actions/todo-item-complete';
import TodoItemDelete from './todo-item-actions/todo-item-delete';
import './todo-item.css';

const TodoItem = ({ text }) => {
  const [isComplete, setIsComplete] = useState('');

  const handleIsComplete = () => {
    setIsComplete('complete');
  };


  return (
    <div className={`todo-item ${isComplete}`}>
      <p>{text}</p>
      <div>
        <TodoItemComplete onComplete={handleIsComplete} />
        <TodoItemDelete />
      </div>
    </div>
  )
}

export default TodoItem;
