import React from 'react';
import TodoItem from '../todo-item';
import './todo-items-container.css';

const TodoItemsContainer = (props) => {

  return (
    <div className='todo-items-container'>
      {props.todoItems.map((item) => (
        <TodoItem 
        key={item.id} 
        id={item.id}
        text={item.text}
        onDelete={props.onDelete}
        />
      ))}
    </div>
  )
}

export default TodoItemsContainer;
