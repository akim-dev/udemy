import React from 'react';

import './ExpenseItem.css';

function ExpenseItem(props) {
  const expenseDate = new Date(2020, 2, 20);
  const expenseTitle = 'Car insurance';
  const expenseAmout = 326.23;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>

      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">$ {expenseAmout}</div>
      </div>
      {console.info(props)}
    </div>
  );
}

export default ExpenseItem;
