import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import ExpenseForm from '../ExpenseForm';
import IncomeItem from './IncomeItem';
import Chart6 from './Chart6';

function Expenses({user}) {
    const { expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext();

    useEffect(() => {
        getExpenses(user);
    }, []);

    return (
        <div className="flex flex-col overflow-auto p-6 w-full">
            <h2 className="text-2xl flex justify-center mt-7 mb-7">
                Total Expense: <span className="text-3xl font-extrabold text-red-600">-${totalExpenses()}</span>
            </h2>
            <div className='flex text-black flex-auto'>
                <Chart6 />
            </div>
            <div className="flex flex-col md:flex-row h-screen gap-4 justify-center items-start mt-5">
                <div className="w-full md:w-1/2 border-White border-2 p-4 rounded-md">
                    <h2 className="text-2xl flex justify-center mt-7 mb-7 text-E">Add Expense</h2>
                    <ExpenseForm user={user}/>
                </div>
                <div className="w-full md:w-1/2 h-4/5 overflow-y-auto sidebar flex flex-col gap-1 border p-7 rounded-lg backdrop-blur-sm text-E">
                    <h2 className="text-2xl flex justify-center mt-7 mb-7">Expense List</h2>
                    {expenses.map((expense) => {
                        const { _id, title, amount, date, category, description, type } = expense;
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
                                indicatorColor="text-red-500"
                                deleteItem={deleteExpense}
                                user={user}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Expenses;
