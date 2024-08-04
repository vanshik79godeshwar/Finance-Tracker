import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTenure, setLoanTenure] = useState(0);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const emiChartRef = React.createRef();
  let emiChart;

  useEffect(() => {
    updateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  const calculateEMI = (loanAmount, interestRate, loanTenure) => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfMonths = loanTenure * 12;
    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
    return emi;
  };

  const updateChart = (principal, interest) => {
    if (emiChart) {
      emiChart.destroy();
    }

    emiChart = new Chart(emiChartRef.current.getContext('2d'), {
      type: 'pie',
      data: {
        labels: ['Principal', 'Interest'],
        datasets: [{
          data: [principal, interest],
          backgroundColor: ['#007bff', '#ffc107']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'EMI Breakdown'
          }
        }
      }
    });
  };

  const updateEMI = () => {
    if (loanAmount > 0 && interestRate > 0 && loanTenure > 0) {
      const emi = calculateEMI(loanAmount, interestRate, loanTenure);
      setEmi(emi.toFixed(2));

      const totalPayment = emi * loanTenure * 12;
      const totalInterest = totalPayment - loanAmount;
      setTotalInterest(totalInterest.toFixed(2));

      updateChart(loanAmount, totalInterest);
    } else {
      setEmi(0);
      setTotalInterest(0);
      if (emiChart) {
        emiChart.destroy();
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#27292b] text-white">
      <div className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg w-full max-w-4xl flex">
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-6">EMI Calculator</h1>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col items-start">
              <label htmlFor="loan-amount" className="mb-1">Loan Amount:</label>
              <input
                type="number"
                id="loan-amount"
                className="p-2 rounded-md bg-[#2a2a2a] text-white border border-gray-700"
                placeholder="Enter loan amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="interest-rate" className="mb-1">Interest Rate (%):</label>
              <input
                type="number"
                id="interest-rate"
                step="0.01"
                className="p-2 rounded-md bg-[#2a2a2a] text-white border border-gray-700"
                placeholder="Enter interest rate"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="loan-tenure" className="mb-1">Loan Tenure (Years):</label>
              <input
                type="number"
                id="loan-tenure"
                className="p-2 rounded-md bg-[#2a2a2a] text-white border border-gray-700"
                placeholder="Enter loan tenure"
                value={loanTenure}
                onChange={(e) => setLoanTenure(parseFloat(e.target.value))}
              />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold">Monthly EMI: <span>{emi}</span></h2>
              <h2 className="text-xl font-bold mt-2">Total Interest: <span>{totalInterest}</span></h2>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 flex items-center justify-center">
          <canvas ref={emiChartRef} id="emiChart"></canvas>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
