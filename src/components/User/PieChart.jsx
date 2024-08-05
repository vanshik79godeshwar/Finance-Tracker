import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Savings', 'Groceries', 'Utilities', 'Personal Expenses'],
    datasets: [
      {
        label: 'Budget Allocation',
        data: [20, 20, 30, 30],
        backgroundColor: ['#788E8A', '#A0DEE3', '#266076', '#09111C'],
        borderColor: '#333',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const dataset = tooltipItem.dataset;
            const total = dataset.data.reduce((acc, curr) => acc + curr, 0);
            const value = dataset.data[tooltipItem.dataIndex];
            const percentage = ((value / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${value} (${percentage}%)`;
          },
        },
        backgroundColor: '#333',
        titleColor: '#FFD54F',
        titleAlign: 'center',
        bodyAlign: 'center',
        bodyColor: '#ffffff',
      },
      legend: {
        labels: {
          color: '#ffffff',
        },
        position: 'top',
      },
    },
    layout: {
      padding: 20,
    },
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: '#121212',
      },
    },
    animation: {
      duration: 3000, // Duration of the animation in milliseconds
       
    },
  };

  return (
    <div className="pie-chart-container p-4 rounded-lg shadow-lg">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
