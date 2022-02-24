import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const styles = {
    noExpenses: {
      color: 'hsl(0deg 100% 70%)',
      backgroundColor: 'hsl(0deg 100% 30% / 20%)',
      textAlign: 'center',
      border: '1px solid',
      paddingBlock: '1em',
      marginInline: '1em',
      borderRadius: '0.25em',
    },
  };
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = filteredExpenses.length ? (
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  ) : (
    <p style={styles.noExpenses}>No expenses found.</p>
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
