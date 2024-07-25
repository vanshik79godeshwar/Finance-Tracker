import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { Chart, Filler } from 'chart.js'; // Import Chart and Filler plugin

// Register the Filler plugin
Chart.register(Filler);

// Helper function to convert hex color to rgba
const hexToRgba = (hex, alpha) => {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `rgba(${r},${g},${b},${alpha})`;
}

const ChartComponent = ({ data, label, title, lineColor }) => {
  const chartRef = useRef(null);

  // Reverse data for oldest to latest
  const reversedData = [...data].reverse();

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient.addColorStop(0, hexToRgba(lineColor, 0.2)); // Lighter variant
      gradient.addColorStop(1, hexToRgba(lineColor, 0.6)); // Darker variant

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, [chartRef, lineColor]);
  const chartData = {
    labels: reversedData.map(item => item.Date),
    datasets: [
      {
        label: label,
        data: reversedData.map(item => parseFloat(item.Price)),
        fill: true, // Enable filling
        
        borderColor: lineColor, // Use passed lineColor or default color
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-white mb-4 flex justify-center">{title}</h2>
      <div className="shadow-md rounded-lg p-6">
        <Line ref={chartRef} data={chartData} />
      </div>
    </div>
  );
};

export default ChartComponent;
