import React from 'react';
import { ReactComponent as SVGComplete } from '../../../assets/complete.svg';
import '../../../components/todo-item/todo-item.css';

const TodoItemComplete = ({ onComplete }) => {

  return (
    <button type='button' onClick={onComplete}>
      <div className='icon'>
        {<SVGComplete />}
      </div>
    </button>
  )
}

export default TodoItemComplete;
