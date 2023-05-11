import React from 'react';

import './ExpenseItem.css';

import ExpsenseDate from './ExpenseDate';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      {console.info(props)}
    </div>
  );
}

export default ExpenseItem;
