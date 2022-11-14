import React from 'react';
import CardHeader from './card-header';
import TodoItemsContainer from '../components/todo-item/todo-items-container';
import '../styles/UI/card.css';
import AddTodoForm from '../components/add-todo/add-todo-form';

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
