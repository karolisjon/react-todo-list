import React, { useState, useEffect } from 'react';
import CardHeader from '../../components/card/card-header/card-header';
import AddTodoForm from '../add-todo/add-todo-form/add-todo-form';
import TodoItemsContainer from '../todo-item/todo-items-container/todo-items-container';
import TodoItemsService from '../../services/todo-item-service';
import Modal from '../modal/modal';
import '../../components/card/card.css';

const Card = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleIsOpen = () => {
    setModalOpen(!modalOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const fetchAllTodoItems = async () => {
    const fetchedTodoItems = await TodoItemsService.fetchAll();
    setTodoItems(fetchedTodoItems);
  };

  useEffect(() => {
    (async () => {
      fetchAllTodoItems();
    })();
  }, []);

  const handleAddTodoItem = async (enteredText) => {
    const newTodoItem = await TodoItemsService.create({
      id: Math.random().toString().slice(2, 10),
      text: enteredText,
      isComplete: false
    });

    setTodoItems(prevTodoItems => {
      const updatedTodoItems = [...prevTodoItems];
      updatedTodoItems.push(newTodoItem);

      return updatedTodoItems;
    });
  };

  const handleDelete = async (id) => {
    await TodoItemsService.remove(id);
    fetchAllTodoItems();
  };

  const handleComplete = async (id, state) => {
    await TodoItemsService.complete(id, state);
  };

  return (
    <div className='card'>
      <CardHeader />
      <AddTodoForm onAddTodoItem={handleAddTodoItem} />
      <TodoItemsContainer
        todoItems={todoItems}
        onEdit={handleIsOpen}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default Card;
