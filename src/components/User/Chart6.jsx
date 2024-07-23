import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/GlobalContext';

function ExpenseCategoryCharts() {
    const { expenses } = useGlobalContext();

    // Group expenses by category
    const expenseCategories = {};
    expenses.forEach((expense) => {
        const { category, amount } = expense;
        if (!expenseCategories[category]) expenseCategories[category] = 0;
        expenseCategories[category] += amount;
    });

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

    const barData = {
        labels: Object.keys(expenseCategories),
        datasets: [
            {
                label: 'Expenses',
                data: Object.values(expenseCategories),
                backgroundColor: '#FF6384',
                borderColor: '#FF6384',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'blue', // Change legend label color here
                }
            },
            title: {
                display: true,
                text: 'Expenses by Category',
                color: 'green', // Change title color here
            },
            tooltip: {
                bodyColor: 'purple', // Change tooltip text color here
                backgroundColor: 'yellow', // Change tooltip background color here
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount',
                    color: 'red', // Change Y-axis title color here
                },
                ticks: {
                    color: 'black', // Change Y-axis ticks color here
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Category',
                    color: 'red', // Change X-axis title color here
                },
                ticks: {
                    color: 'black', // Change X-axis ticks color here
                }
            },
        },
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex-1 bg-pink-50 border-2 border-white shadow-md p-4 rounded-lg m-2">
                <h3 className="text-center mb-4">Expense Breakdown by Category (Pie)</h3>
                <Pie data={expenseData} options={options} />
            </div>
            <div className="flex-1 bg-pink-50 border-2 border-white shadow-md p-4 rounded-lg m-2">
                <h3 className="text-center mb-4">Expense Breakdown by Category (Bar)</h3>
                <Bar data={barData} options={options} />
            </div>
        </div>
    );
}

export default ExpenseCategoryCharts;
