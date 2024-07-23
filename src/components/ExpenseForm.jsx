import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../context/GlobalContext';
import Button from './Button';
import { plus } from '../utils/Icons';

function ExpenseForm({ user }) {
    const { addExpense, error, setError } = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = (name) => (e) => {
        setInputState({ ...inputState, [name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting: ", inputState); // Debug log to check state before submission
        try {
            await addExpense(inputState, user);

            setInputState({
                title: '',
                amount: '',
                date: '',
                category: '',
                description: '',
            });
        } catch (error) {
            console.error("Error: ", error);
            setError('Failed to add expense. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && <p className='text-red-500'>{error}</p>}
            <div className="flex flex-col">
                <input 
                    type="text" 
                    value={title}
                    name="title" 
                    placeholder="Expense Title"
                    onChange={handleInput('title')}
                    className="p-3 rounded-md outline-none"
                />
            </div>
            <div className="flex flex-col">
                <input 
                    type="text" 
                    value={amount}  
                    name="amount" 
                    placeholder="Expense Amount"
                    onChange={handleInput('amount')}
                    className="p-3 rounded-md outline-none"
                />
            </div>
            <div className="flex flex-col">
                <DatePicker 
                    id="date"
                    placeholderText="Enter A Date"
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => setInputState({ ...inputState, date })}
                    className="p-3 rounded-md outline-none"
                />
            </div>
            <div className="flex flex-col">
                <select 
                    required 
                    value={category} 
                    name="category" 
                    id="category" 
                    onChange={handleInput('category')}
                    className="p-3 rounded-md outline-none"
                >
                    <option value="" disabled>Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>
                    <option value="travelling">Travelling</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="flex flex-col">
                <textarea 
                    name="description" 
                    value={description} 
                    placeholder="Add A Reference" 
                    id="description" 
                    cols="30" 
                    rows="4" 
                    onChange={handleInput('description')}
                    className="p-3 rounded-md outline-none"
                ></textarea>
            </div>
            <div className="flex justify-end">
                <Button 
                    name="Add Expense"
                    icon={plus}
                    bPad=".8rem 1.6rem"
                    bRad="30px"
                    bg="bg-green-500 hover:bg-green-600 text-white rounded-3xl cursor-pointer transition-all ease-in-out duration-300 ease-in-out shadow p-4 text-center text-sm font-semibold"
                    color="#fff"
                />
            </div>
        </form>
    );
}

export default ExpenseForm;
