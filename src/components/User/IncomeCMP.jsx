import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import IncomeForm from '../IncomeForm';
import IncomeItem from './IncomeItem';
import Chart from './Chart5';

function Income({user}) {
    const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();


    useEffect(() => {
        getIncomes(user);
    }, []);

    return (
        <div className="flex flex-col overflow-auto p-6 w-full">
            <h2 className="text-2xl flex justify-center mt-7 mb-7">
                Total Income: <span className="text-3xl font-extrabold text-green-500">${totalIncome()}</span>
            </h2>
            <div className='flex text-black flex-auto'>
                <Chart />
            </div>
            <div className="flex flex-col md:flex-row h-screen gap-4 justify-center items-start mt-5">
                <div className="w-full md:w-1/2 border-white border-2 p-4 rounded-md">
                    <h2 className="text-2xl flex justify-center mt-7 mb-7 text-E">Add Income</h2>
                    <IncomeForm type={'Income'} user={user}/>
                </div>
                <div className="w-full md:w-1/2 h-4/5 overflow-y-auto sidebar flex flex-col gap-1 border p-7 rounded-lg backdrop-blur-sm text-E">
                    <h2 className="text-2xl flex justify-center mt-7 mb-7">Income List</h2>
                    {incomes.map((income) => {
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
                                indicatorColor="text-green-500"
                                deleteItem={deleteIncome}
                                user={user}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Income;
