import React from 'react';
import AddTodoButton from '../add-todo/add-todo-button';
import '../../styles/UI/add-todo/add-todo-input.css';
import '../../styles/UI/add-todo/add-todo-button-container.css';

const AddTodoForm = () => {
  return (
    <form action="submit">
      <input type="text" placeholder='Add your todo...' className='add-todo-input' />
      <div className='add-todo-button-container'>
        <AddTodoButton />
      </div>
    </form>
  )
}

export default AddTodoForm;
