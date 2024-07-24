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
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1,
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
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'rgba(255, 255, 255, 0.7)',
                    font: {
                        size: 14,
                        family: 'Arial, sans-serif',
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    },
                },
            },
        },
    };

    return (
        <div className="flex flex-col md:flex-row shadow-2xl mb-7 mt-2 ">
            <div className="flex-1   p-4 rounded-lg m-2">
                <h3 className="text-center mb-4 text-white font-semibold text-lg">Income Breakdown by Category</h3>
                <div className="w-96 h-96 mx-auto">
                    <Pie data={incomeData} options={options} />
                </div>
            </div>
            <div className="flex-1   p-4 rounded-lg m-2">
                <h3 className="text-center mb-4 text-white font-semibold text-lg">Expense Breakdown by Category</h3>
                <div className="w-96 h-96 mx-auto">
                    <Pie data={expenseData} options={options} />
                </div>
            </div>
        </div>
    );
}

export default CategoryBreakdown;
