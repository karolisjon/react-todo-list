import React, { useState } from 'react';
import AddTodoButton from '../add-todo-button/add-todo-button';
import '../../add-todo/add-todo-form/add-todo-input.css';
import '../../add-todo/add-todo-button/add-todo-button-container.css';

const AddTodoForm = ({ onAddTodoItem, onModalOpen }) => {
  const [enteredValue, setEnteredValue] = useState('');

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
  }

  const handleTodoSubmit = (event) => {
    event.preventDefault();

    if (enteredValue === '' || enteredValue === undefined || enteredValue === undefined) {
      onModalOpen();
      return;
    }

    onAddTodoItem(enteredValue);
    setEnteredValue('');
  };

  return (
      <form onSubmit={handleTodoSubmit} >
        <input
          type="text"
          placeholder='Add your todo...'
          className='add-todo-input'
          onChange={handleInputChange}
          value={enteredValue}
        />
        <div className='add-todo-button-container'>
          <AddTodoButton />
        </div>
      </form>
  )
}

export default AddTodoForm;
