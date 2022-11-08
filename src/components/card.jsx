import React from 'react';
import CardHeader from './card-header';
import '../styles/UI/card.css';
import CardButton from './card-button';

const Card = () => {

  return (
    <div className='card'>
      <CardHeader />
      <CardButton />
    </div>
  )
}

export default Card;
