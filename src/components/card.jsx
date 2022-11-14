import React from 'react';
import CardHeader from './card-header';
import TodoItemsContainer from './todo-items-container';
import '../styles/UI/card.css';
import AddTodoForm from './add-todo-form';

const Card = () => {

  return (
    <div className='card'>
      <CardHeader />
      <AddTodoForm />
      <TodoItemsContainer />
    </div>
  )
}

export default Card;
