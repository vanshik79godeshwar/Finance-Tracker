import React from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/GlobalContext';

ChartJs.register(ArcElement, Tooltip, Legend);

function CategoryBreakdown() {
    const { incomes, expenses } = useGlobalContext();

    const incomeCategories = {};
    incomes.forEach((income) => {
        const { category, amount } = income;
        if (!incomeCategories[category]) incomeCategories[category] = 0;
        incomeCategories[category] += amount;
    });

    const expenseCategories = {};
    expenses.forEach((expense) => {
        const { category, amount } = expense;
        if (!expenseCategories[category]) expenseCategories[category] = 0;
        expenseCategories[category] += amount;
    });

    const incomeData = {
        labels: Object.keys(incomeCategories),
        datasets: [
            {
                label: 'Income',
                data: Object.values(incomeCategories),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
            },
        ],
    };

    const expenseData = {
        labels: Object.keys(expenseCategories),
        datasets: [
            {
                label: 'Expenses',
                data: Object.values(expenseCategories),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
            },
        ],
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex-1 bg-pink-50 border-2 border-white shadow-md p-4 rounded-lg m-2">
                <h3 className="text-center mb-4">Income Breakdown by Category</h3>
                <Pie data={incomeData} />
            </div>
            <div className="flex-1 bg-pink-50 border-2 border-white shadow-md p-4 rounded-lg m-2">
                <h3 className="text-center mb-4">Expense Breakdown by Category</h3>
                <Pie data={expenseData} />
            </div>
        </div>
    );
}

export default CategoryBreakdown;
