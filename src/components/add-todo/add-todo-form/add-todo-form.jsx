import React, { useState } from 'react';
import AddTodoButton from '../add-todo-button/add-todo-button';
import '../../add-todo/add-todo-form/add-todo-input.css';
import '../../add-todo/add-todo-button/add-todo-button-container.css';

const AddTodoForm = ({ onAddTodoItem }) => {
  const [enteredValue, setEnteredValue] = useState('');

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
  }

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    onAddTodoItem(enteredValue);
  }

  return (
    <form onSubmit={handleTodoSubmit}>
      <input
        type="text"
        placeholder='Add your todo...'
        className='add-todo-input'
        onChange={handleInputChange}
      />
      <div className='add-todo-button-container'>
        <AddTodoButton />
      </div>
    </form>
  )
}

export default AddTodoForm;
