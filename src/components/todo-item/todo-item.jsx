import React, { useState } from 'react';
import TodoItemComplete from './todo-item-actions/todo-item-complete';
import TodoItemDelete from './todo-item-actions/todo-item-delete';
import './todo-item.css';

const TodoItem = (props) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleIsComplete = () => {
    setIsComplete(!isComplete);
  };

  const deleteHandler = () => {
    props.onDelete(props.id);
  }

  return (
    <div className={`todo-item ${isComplete ? 'complete' : ''}`}>
      <p>{props.text}</p>
      <div>
        <TodoItemComplete onComplete={handleIsComplete}/>
        <TodoItemDelete onDelete={deleteHandler}/>
      </div>
    </div>
  )
}

export default TodoItem;
