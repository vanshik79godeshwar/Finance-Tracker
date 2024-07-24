import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Savings', 'Groceries', 'Utilities', 'Personal Expenses'],
    datasets: [
      {
        label: '# of Votes',
        data: [20, 20, 30, 30],
        backgroundColor: ['#A0DEE3', '#266076', '#788E8A', '#48819C'],
         
        borderWidth: 1,
      },
    ],
  };

  const options = {
    animation: {
      duration: 5000, // Set the animation duration to 3000 milliseconds (3 seconds)
    },
  };

  return (
    <div>
       
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
