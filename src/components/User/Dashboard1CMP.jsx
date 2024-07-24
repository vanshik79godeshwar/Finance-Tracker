import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import History from '../User/ExpenseHistory';
import Chart1 from '../User/Chart1';
import Chart2 from '../User/Chart2';
import Chart3 from '../User/Chart3';
import Chart4 from '../User/Chart4';
import { dollar } from '../../utils/Icons';

function Dashboard({ user }) {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext();


    useEffect(() => {
        getIncomes(user);
        getExpenses(user);
    }, []);

    return (
        <div className="p-8 w-full text-black">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                    <Chart1 />
                    <Chart2 />
                </div>
                <div className="lg:col-span-2 ">
                    <History />
                    <div className='border-2 border-orange-500 mt-7 p-5 rounded-lg'>
                        <h2 className="text-lg font-semibold flex items-center justify-between  text-White">
                            Min <span className="text-2xl text-green-500">Income</span>Max
                        </h2>
                        <div className=" border-2 border-white shadow-md p-4 rounded-lg flex justify-between items-center mt-4">
                            <p className="font-semibold text-lg">${Math.min(...incomes.map(item => item.amount))}</p>
                            <p className="font-semibold text-lg">${Math.max(...incomes.map(item => item.amount))}</p>
                        </div>
                        <h2 className="text-lg font-semibold flex items-center justify-between mt-6 text-White">
                            Min <span className="text-2xl text-red-600">Expense</span>Max
                        </h2>
                        <div className=" border-2 border-white shadow-md p-4 rounded-lg flex justify-between items-center mt-4">
                            <p className="font-semibold text-lg">${Math.min(...expenses.map(item => item.amount))}</p>
                            <p className="font-semibold text-lg">${Math.max(...expenses.map(item => item.amount))}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Chart3 />
                <Chart4 />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    <div className="col-span-2 bg-pink-200 border-2 border-white shadow-md p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2 flex justify-center">Total Income</h2>
                        <p className="text-3xl font-bold flex justify-center ">
                            {dollar} {totalIncome()}
                        </p>
                    </div>
                    <div className="col-span-2 bg-pink-200 border-2 border-white shadow-md p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2 flex justify-center">Total Expense</h2>
                        <p className="text-3xl font-bold flex justify-center">
                            {dollar} {totalExpenses()}
                        </p>
                    </div>
                    <div className="col-span-4 bg-orange-100 border-2 border-white shadow-md p-4 rounded-lg flex flex-col justify-center items-center">
                        <h2 className="text-xl font-semibold mb-2 flex justify-center">Total Balance</h2>
                        <p className="text-4xl font-bold opacity-60 flex justify-center" style={totalBalance() > 0 ? { color: "green" } : { color: "red" }}>
                            {dollar} {totalBalance()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
