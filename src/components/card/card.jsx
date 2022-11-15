import React from 'react';
import CardHeader from '../../components/card/card-header/card-header';
import TodoItemsContainer from '../../components/todo-item/todo-items-container';
import AddTodoForm from '../add-todo/add-todo-form/add-todo-form';
import '../../components/card/card.css';

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
