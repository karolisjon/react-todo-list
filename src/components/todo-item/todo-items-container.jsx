import React from 'react';
import TodoItem from '../todo-item/todo-item';
import '../../components/todo-item/todo-items-container.css';

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
