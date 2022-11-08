import React from 'react';
import '../styles/UI/card.css';

const Card = () => {
  const date = new Date();
  const day = date.toLocaleString('en-US', { day: 'numeric' });
  const weekday = date.toLocaleString('en-US', { weekday: 'long' }).toUpperCase();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-header__date-container'>
          <h3 className='card-header__day'>{day}</h3>
          <div>
            <h3>{month}</h3>
            <h3>{year}</h3>
          </div>
        </div>
        <h3 className='card-header__weekday'>{weekday}</h3>
      </div>
    </div>
  )
}

export default Card;
