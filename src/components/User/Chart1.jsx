import React from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/GlobalContext';
import { dateFormat } from '../../utils/dateFormat';

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function Chart() {
    const { incomes, expenses } = useGlobalContext();

    // Combine incomes and expenses, grouping by date
    const combinedData = {};
    incomes.forEach((income) => {
        const date = dateFormat(income.date);
        if (!combinedData[date]) combinedData[date] = { income: 0, expense: 0 };
        combinedData[date].income += income.amount;
    });
    expenses.forEach((expense) => {
        const date = dateFormat(expense.date);
        if (!combinedData[date]) combinedData[date] = { income: 0, expense: 0 };
        combinedData[date].expense += expense.amount;
    });

    // Filter out dates with zero income and expense
    const filteredData = Object.entries(combinedData).filter(([_, values]) => values.income !== 0 || values.expense !== 0);

    const data = {
        labels: filteredData.map(([date]) => date),
        datasets: [
            {
                label: 'Income',
                data: filteredData.map(([_, values]) => values.income),
                backgroundColor: 'green',
                borderColor: 'green',
                fill: false,
                tension: 0.2,
            },
            {
                label: 'Expenses',
                data: filteredData.map(([_, values]) => values.expense),
                backgroundColor: 'red',
                borderColor: 'red',
                fill: false,
                tension: 0.2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Income and Expenses Over Time',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Amount',
                },
            },
        },
    };

    return (
        <div className="bg-pink-50 border-2 border-white shadow-md p-4 rounded-lg">
            <Line data={data} options={options} />
        </div>
    );
}

export default Chart;
