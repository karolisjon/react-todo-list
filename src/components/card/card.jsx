import React from 'react';
import CardHeader from '../../components/card/card-header/card-header';
import AddTodoForm from '../add-todo/add-todo-form/add-todo-form';
import TodoItemsContainer from '../todo-item/todo-items-container/todo-items-container';
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
