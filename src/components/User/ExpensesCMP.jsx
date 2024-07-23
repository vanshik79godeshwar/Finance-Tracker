import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import ExpenseForm from '../ExpenseForm';
import IncomeItem from './IncomeItem';
import Chart6 from './Chart6';

function Expenses() {
    const { expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext();

    useEffect(() => {
        getExpenses();
    }, []);

    return (
        <div className="flex flex-col overflow-auto p-6 w-full">
            <h1 className="text-4xl font-bold mb-4">Expenses</h1>
            <h2 className="text-black flex justify-center items-center bg-pink-50 border-2 border-white shadow-md rounded-lg p-4 mb-4 text-2xl gap-2">
                Total Expense: <span className="text-3xl font-extrabold text-red-600">-${totalExpenses()}</span>
            </h2>
            <div className='flex text-black flex-auto'>
                <Chart6 />
            </div>
            <div className="flex gap-8">
                <div className="w-full max-w-md">
                    <ExpenseForm />
                </div>
                <div className="flex-1">
                    {expenses.map((income) => {
                        const { _id, title, amount, date, category, description, type } = income;
                        return (
                            <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                type={type}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Expenses;
