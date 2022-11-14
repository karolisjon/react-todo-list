import React from 'react';
import CardHeader from './card-header';
import CardButtonContainer from './card-button-container';
import TodoItemsContainer from './todo-items-container';
import '../styles/UI/card.css';
import CardInput from './card-input';

const Card = () => {

  return (
    <div className='card'>
      <CardHeader />
      <CardInput />
      <CardButtonContainer />
      <TodoItemsContainer />
    </div>
  )
}

export default Card;
