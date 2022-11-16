import React, { useState, useEffect } from 'react';
import TodoItem from '../todo-item';
import './todo-items-container.css';

const TodoItemsContainer = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetch('http://localhost:8000/todoItems');
      let data = await response.json();
      setTodoItems(data);
    })();
  }, []);

  return (
    <div className='todo-items-container'>
      {todoItems.map(({ id, text }) => (
        <TodoItem key={id} text={text} />
      ))}
    </div>
  )
}

export default TodoItemsContainer;
