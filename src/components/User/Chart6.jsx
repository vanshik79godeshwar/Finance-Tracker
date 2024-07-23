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
                    color: 'white', // Change legend label color here
                }
            },
            title: {
                display: true,
                text: 'Income by Category',
                color: '#cccccc', // Change title color here
            },
            tooltip: {
                titleColor: 'black', // Change tooltip title color here
                bodyColor: 'black', // Change tooltip text color here
                backgroundColor: 'white', // Change tooltip background color here
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount',
                    color: 'black', // Change Y-axis title color here
                },
                ticks: {
                    color: 'orange', // Change Y-axis ticks color here
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Category',
                    color: 'black', // Change X-axis title color here
                },
                ticks: {
                    color: 'orange', // Change X-axis ticks color here
                },
                
            },
        },
    };

    return (
        <div className="flex flex-col md:flex-row w-full mb-7 border-2 border-orange-500 p-4 shadow-lg justify-center">
            <div style={{height: "24rem"}} className="flex-1 w-6/12 h- text-white   p-4 rounded-lg m-2">
                <h3 className="text-center mb-4">Expense Breakdown by Category (Pie)</h3>
                <Pie data={expenseData} options={options} />
            </div>
            <div className="flex-1 w-6/12 text-white  p-4 rounded-lg m-2">
                <h3 className="text-center mb-4">Expense Breakdown by Category (Bar)</h3>
                <Bar data={barData} options={options} />
            </div>
        </div>
    );
}

export default ExpenseCategoryCharts;
