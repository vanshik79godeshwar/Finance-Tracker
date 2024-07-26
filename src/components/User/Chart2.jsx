import React from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/GlobalContext';
import { dateFormat } from '../../utils/dateFormat';
//import { duration } from 'moment';

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
                label: 'Cumulative Expenses',
                data: cumulativeData.map(({ cumulativeExpense }) => cumulativeExpense),
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
                text: 'Cumulative Income and Expenses Over Time',
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
                    text: 'Cumulative Amount',
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
        <div className="  shadow-2xl p-4 rounded-lg">
            <Line data={data} options={options} />
        </div>
    );
}

export default Chart;
