import React from 'react';
import TodoItem from './todo-item';
import '../styles/UI/todo-items-container.css';

const TodoItemsContainer = () => {
  return (
    <div className='todo-items-container'>
      <TodoItem children="get a haircut" />
      <TodoItem children="do laundry" />
      <TodoItem children="wash my car" />
      <TodoItem children="study" />
      <TodoItem children="buy groceries" />
    </div>
  )
}

export default TodoItemsContainer;
