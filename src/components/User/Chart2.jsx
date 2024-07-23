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

    // Sort dates
    const sortedDates = Object.keys(combinedData).sort((a, b) => new Date(a) - new Date(b));

    // Calculate cumulative values
    let cumulativeIncome = 0;
    let cumulativeExpense = 0;
    const cumulativeData = sortedDates.map((date) => {
        cumulativeIncome += combinedData[date].income;
        cumulativeExpense += combinedData[date].expense;
        return {
            date,
            cumulativeIncome,
            cumulativeExpense,
        };
    });

    const data = {
        labels: cumulativeData.map(({ date }) => date),
        datasets: [
            {
                label: 'Cumulative Income',
                data: cumulativeData.map(({ cumulativeIncome }) => cumulativeIncome),
                backgroundColor: 'green',
                borderColor: 'green',
                fill: false,
                tension: 0.2,
            },
            {
                label: 'Cumulative Expenses',
                data: cumulativeData.map(({ cumulativeExpense }) => cumulativeExpense),
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
                text: 'Cumulative Income and Expenses Over Time',
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
                    text: 'Cumulative Amount',
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
