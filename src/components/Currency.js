
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './currency.css';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    function handleBudgetChange(event) {
        const currency = event.target.value

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
    }
    
    return (
        <div className='alert alert-secondary'>
            <div class="input-group mb-3">
            <span class="input-group-text select" id="basic-addon1">Currecy </span>
                <select onChange={handleBudgetChange} class="form-select select">
                    <option value="$">($ Dollar)</option>
                    <option value="£" selected="selected">(£ Pound)</option>
                    <option value="€">(€ Euro)</option>
                    <option value="₹">(₹ Ruppee)</option>
                </select>
            </div>
        </div>
    );
};
export default Currency;