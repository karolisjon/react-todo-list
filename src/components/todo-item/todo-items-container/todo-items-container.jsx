import React from 'react';
import TodoItem from '../todo-item';
import NoTodoItems from '../../../assets/no-item-found.jpg';
import './todo-items-container.css';

const TodoItemsContainer = ({ todoItems, onDelete, onComplete }) => {

  return (
    <div className='todo-items-container'>
      {todoItems.length === 0 &&
        <div className='empty'>
          <img src={NoTodoItems} alt="" />
        </div>}
      {todoItems.map(({ id, text }) => (
        <TodoItem
          key={id}
          id={id}
          text={text}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TodoItemsContainer;
