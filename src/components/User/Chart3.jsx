import React from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
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

    const modernColors = [
        '#FFA726', '#FF7043', '#FFCA28', '#66BB6A', '#29B6F6', '#AB47BC', // Light and modern colors
        '#26C6DA', '#8D6E63', '#FFEB3B', '#D4E157', '#5C6BC0', '#42A5F5'
    ];

    const incomeData = {
        labels: Object.keys(incomeCategories),
        datasets: [
            {
                label: 'Income',
                data: Object.values(incomeCategories),
                backgroundColor: modernColors.slice(0, Object.keys(incomeCategories).length),
                borderColor: modernColors.slice(0, Object.keys(incomeCategories).length).map(color => `${color}B3`), // Adding some opacity to borders
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
                backgroundColor: modernColors.slice(0, Object.keys(expenseCategories).length),
                borderColor: modernColors.slice(0, Object.keys(expenseCategories).length).map(color => `${color}B3`),
                borderWidth: 1,
            },
        ],
    };

    const options = {
        cutout: '70%', // Reducing the width of the doughnut
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
            <div className="flex-1 p-4 rounded-lg m-2">
                <h3 className="text-center mb-4 text-white font-semibold text-lg">Income Breakdown by Category</h3>
                <div className="w-96 h-96 mx-auto">
                    <Doughnut data={incomeData} options={options} />
                </div>
            </div>
            <div className="flex-1 p-4 rounded-lg m-2">
                <h3 className="text-center mb-4 text-white font-semibold text-lg">Expense Breakdown by Category</h3>
                <div className="w-96 h-96 mx-auto">
                    <Doughnut data={expenseData} options={options} />
                </div>
            </div>
        </div>
    );
}

export default CategoryBreakdown;
