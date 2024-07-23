import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import History from '../User/ExpenseHistory';
import Chart1 from '../User/Chart1';
import Chart2 from '../User/Chart2';
import Chart3 from '../User/Chart3';
import Chart4 from '../User/Chart4';
import { dollar } from '../../utils/Icons';

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    return (
        <div className="p-8 w-full text-black">
            <h1 className="text-3xl font-bold mb-6">All Transactions</h1>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                    <Chart1 />
                    <Chart2 />
                    <Chart3 />
                    <Chart4 />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                        <div className="col-span-2 bg-pink-50 border-2 border-white shadow-md p-4 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">Total Income</h2>
                            <p className="text-3xl font-bold">
                                {dollar} {totalIncome()}
                            </p>
                        </div>
                        <div className="col-span-2 bg-pink-50 border-2 border-white shadow-md p-4 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">Total Expense</h2>
                            <p className="text-3xl font-bold">
                                {dollar} {totalExpenses()}
                            </p>
                        </div>
                        <div className="col-span-4 bg-pink-50 border-2 border-white shadow-md p-4 rounded-lg flex flex-col justify-center items-center">
                            <h2 className="text-xl font-semibold mb-2">Total Balance</h2>
                            <p className="text-4xl font-bold opacity-60" style={totalBalance()>0 ? {color: "green"} : {color: "red"}}>
                                {dollar} {totalBalance()}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <History />
                    <h2 className="text-lg font-semibold flex items-center justify-between mt-6">
                        Min <span className="text-2xl">Income</span>Max
                    </h2>
                    <div className="bg-pink-50 border-2 border-white shadow-md p-4 rounded-lg flex justify-between items-center mt-4">
                        <p className="font-semibold text-lg">${Math.min(...incomes.map(item => item.amount))}</p>
                        <p className="font-semibold text-lg">${Math.max(...incomes.map(item => item.amount))}</p>
                    </div>
                    <h2 className="text-lg font-semibold flex items-center justify-between mt-6">
                        Min <span className="text-2xl">Expense</span>Max
                    </h2>
                    <div className="bg-pink-50 border-2 border-white shadow-md p-4 rounded-lg flex justify-between items-center mt-4">
                        <p className="font-semibold text-lg">${Math.min(...expenses.map(item => item.amount))}</p>
                        <p className="font-semibold text-lg">${Math.max(...expenses.map(item => item.amount))}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
