import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

      // check if the budget value < total expenses
      if (newBudget < totalExpenses) {
        alert(
          "The value of the buget can't be lower than spending"
        );
      } 

    return (
    <div className='alert alert-secondary'>
        <span>Budget: {currency}&nbsp;</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
    );
};

export default Budget;
