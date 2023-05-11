import React from 'react';
import './style.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

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
      <Expenses data={expenses} />
    </>
  );
}
