import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.hari.toLocaleString('en-US', { month: 'long' });
  const day = props.hari.toLocaleString('en-US', { day: '2-digit' });
  const year = props.hari.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
