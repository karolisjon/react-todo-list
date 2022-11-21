import React, { useState, useEffect } from 'react';
import CardHeader from '../../components/card/card-header/card-header';
import AddTodoForm from '../add-todo/add-todo-form/add-todo-form';
import TodoItemsContainer from '../todo-item/todo-items-container/todo-items-container';
import '../../components/card/card.css';

const Card = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetch('http://localhost:8000/todoItems');
      let data = await response.json();
      setTodoItems(data);
    })();
  }, []);

  const handleAddTodoItem = (enteredText) => {
    setTodoItems(prevTodoItems => {
      const updatedTodoItems = [...prevTodoItems];
      updatedTodoItems.unshift({
        id: Math.random().toString().slice(2, 10),
        text: enteredText
      });

      return updatedTodoItems;
    })
  };

  console.log(todoItems);

  return (
    <div className='card'>
      <CardHeader />
      <AddTodoForm onAddTodoItem={handleAddTodoItem} />
      <TodoItemsContainer todoItems={todoItems} />
    </div>
  )
}

export default Card;
