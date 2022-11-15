import React from 'react';
import AddTodoButton from '../add-todo-button/add-todo-button';
import '../../add-todo/add-todo-form/add-todo-input.css';
import '../../add-todo/add-todo-button/add-todo-button-container.css';

const AddTodoForm = () => {
  return (
    <form>
      <input
        type="text"
        placeholder='Add your todo...'
        className='add-todo-input'
      />
      <div className='add-todo-button-container'>
        <AddTodoButton />
      </div>
    </form>
  )
}

export default AddTodoForm;
