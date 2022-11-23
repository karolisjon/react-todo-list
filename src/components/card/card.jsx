import React, { useState, useEffect } from 'react';
import CardHeader from '../../components/card/card-header/card-header';
import AddTodoForm from '../add-todo/add-todo-form/add-todo-form';
import TodoItemsContainer from '../todo-item/todo-items-container/todo-items-container';
import '../../components/card/card.css';
import TodoItemsService from '../../services/todo-item-service';

const Card = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedTodoItems = await TodoItemsService.fetchAll();
      setTodoItems(fetchedTodoItems);
    })();
  }, []);

  // const handleAddTodoItem = (enteredText) => {
  //   setTodoItems(prevTodoItems => {
  //     const updatedTodoItems = [...prevTodoItems];
  //     updatedTodoItems.unshift({
  //       id: Math.random().toString().slice(2, 10),
  //       text: enteredText
  //     });

  //     return updatedTodoItems;
  //   })
  // };

  const fetchAllTodoItems = async () => {
    const fetchedTodoItems = await TodoItemsService.fetchAll();
    setTodoItems(fetchedTodoItems);
  }

  const handleAddTodoItem = async (enteredText) => {
    const newTodoItem = await TodoItemsService.create({
      id: Math.random().toString().slice(2, 10),
      text: enteredText
    });

    setTodoItems(prevTodoItems => {
      const updatedTodoItems = [...prevTodoItems];
      updatedTodoItems.unshift(newTodoItem);
    })

    await fetchAllTodoItems();
  }

  const handleDelete = (todoItemId) => {
    setTodoItems(prevTodoItems => {
      const updatedTodoItems = prevTodoItems.filter((todoItem) => todoItem.id !== todoItemId);
      return updatedTodoItems;
    });
  };

  return (
    <div className='card'>
      <CardHeader />
      <AddTodoForm onAddTodoItem={handleAddTodoItem} />
      <TodoItemsContainer
        todoItems={todoItems}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default Card;
