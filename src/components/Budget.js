
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);

    function handleBudgetChange(event) {
        const budget = parseInt(event.target.value)

        if (budget > 20000) {
            return window.alert("Budget can't be more than {state.currency}20,000")
        }

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (budget < totalExpenses) {
            return window.alert("Budget can't be less than total expenses")
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });
    }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input type='number' value={budget} step={10} onChange={handleBudgetChange} style={{ width: 100 }}></input></span>
        </div>
    );
};
export default Budget;