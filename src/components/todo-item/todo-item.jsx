import React, { useState } from 'react';
import TodoItemComplete from './todo-item-actions/todo-item-complete';
import TodoItemDelete from './todo-item-actions/todo-item-delete';
import './todo-item.css';

const TodoItem = ({ id, text, onDelete, onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleIsCompleteById = () => {
    onComplete(id, !isComplete);
    setIsComplete(!isComplete);
  };

  const handleDeleteTodoItemById = () => {
    onDelete(id);
  };

  return (
    <div className={`todo-item ${isComplete ? 'complete' : ''}`} >
      <p>{text}</p>
      <div>
        <TodoItemComplete onComplete={handleIsCompleteById}/>
        <TodoItemDelete onDelete={handleDeleteTodoItemById}/>
      </div>
    </div>
  )
}

export default TodoItem;
