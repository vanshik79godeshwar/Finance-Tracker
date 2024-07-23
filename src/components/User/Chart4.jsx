import React from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/GlobalContext';
import { dateFormat } from '../../utils/dateFormat';

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function movingAverage(data, windowSize) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        const start = Math.max(0, i - windowSize + 1);
        const end = i + 1;
        const window = data.slice(start, end);
        const average = window.reduce((acc, val) => acc + val, 0) / window.length;
        result.push(average);
    }
    return result;
}

function TrendAnalysis() {
    const { incomes, expenses } = useGlobalContext();

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

    const sortedDates = Object.keys(combinedData).sort((a, b) => new Date(a) - new Date(b));
    const incomeData = sortedDates.map(date => combinedData[date].income);
    const expenseData = sortedDates.map(date => combinedData[date].expense);

    const incomeMA = movingAverage(incomeData, 7);
    const expenseMA = movingAverage(expenseData, 7);

    const data = {
        labels: sortedDates,
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                backgroundColor: 'green',
                borderColor: 'green',
                fill: false,
                tension: 0.2,
            },
            {
                label: 'Income (7-day MA)',
                data: incomeMA,
                backgroundColor: 'lightgreen',
                borderColor: 'lightgreen',
                fill: false,
                tension: 0.2,
            },
            {
                label: 'Expenses',
                data: expenseData,
                backgroundColor: 'red',
                borderColor: 'red',
                fill: false,
                tension: 0.2,
            },
            {
                label: 'Expenses (7-day MA)',
                data: expenseMA,
                backgroundColor: 'lightcoral',
                borderColor: 'lightcoral',
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
                text: 'Income and Expenses with Moving Averages',
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

export default TrendAnalysis;
