import React, { useState } from 'react';
import TodoItemComplete from './todo-item-actions/todo-item-complete';
import TodoItemDelete from './todo-item-actions/todo-item-delete';
import './todo-item.css';

const TodoItem = ({ text }) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleIsComplete = () => {
    setIsComplete(!isComplete);
  };


  return (
    <div className={`todo-item ${isComplete ? 'complete' : ''}`}>
      <p>{text}</p>
      <div>
        <TodoItemComplete onComplete={handleIsComplete} isComplete={isComplete}/>
        <TodoItemDelete />
      </div>
    </div>
  )
}

export default TodoItem;
