import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        id={props.data[0].id}
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
      <ExpenseItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      />
      <ExpenseItem
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      />
    </div>
  );
}

export default Expenses;
