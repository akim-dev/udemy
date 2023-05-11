import React from 'react';
import './style.css';
import ExpenseItem from './components/ExpenseItem';

export default function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Isurance',
      amount: '261.46',
      date: new Date(2023, 2, 15),
    },
    {
      id: 'e2',
      title: 'Car ',
      amount: '261.6',
      date: new Date(2023, 2, 15),
    },
    {
      id: 'e3',
      title: 'Isurance',
      amount: '26.6',
      date: new Date(2023, 2, 15),
    },
  ];

  return (
    <>
      <ExpenseItem
        id={expenses[0].id}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </>
  );
}
