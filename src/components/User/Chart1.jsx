import React from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/GlobalContext';
import { dateFormat } from '../../utils/dateFormat';

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
}

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

    // Sort the filteredData by date in ascending order
    filteredData.sort(([dateA], [dateB]) => parseDate(dateA) - parseDate(dateB));

    const data = {
        labels: filteredData.map(([date]) => date),
        datasets: [
            {
                label: 'Income',
                data: filteredData.map(([_, values]) => values.income),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
                tension: 0.4,
            },
            {
                label: 'Expenses',
                data: filteredData.map(([_, values]) => values.expense),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                fill: false,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
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
            title: {
                display: true,
                text: 'Income and Expenses Over Time',
                color: 'rgba(255, 255, 255, 0.7)',
                font: {
                    size: 20,
                    family: 'Arial, sans-serif',
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                    color: 'rgba(255, 255, 255, 0.7)',
                    font: {
                        size: 16,
                        family: 'Arial, sans-serif',
                    },
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.7)',
                },
                grid: {
                    display: false,
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Amount',
                    color: 'rgba(255, 255, 255, 0.7)',
                    font: {
                        size: 16,
                        family: 'Arial, sans-serif',
                    },
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.7)',
                },
                grid: {
                    color: 'rgba(200, 200, 200, 0.2)',
                },
            },
        },
    };

    return (
        <div className="shadow-2xl p-4 mb-5 rounded-lg">
            <Line data={data} options={options} />
        </div>
    );
}

export default Chart;
