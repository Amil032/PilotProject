import React from 'react';
import { Bar } from 'react-chartjs-2';

export const BarChart = ({ data }) => {
  const statusSum = data.reduce((sumMap, item) => {
    const status = item.status;
    sumMap[status] = (sumMap[status] || 0) + item.len;
    return sumMap;
  }, {});

  const chartData = {
    labels: Object.keys(statusSum).map(status => `Status ${status}`),
    datasets: [
      {
        label: 'Sum of Lengths',
        data: Object.values(statusSum),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sum of Lengths',
        },
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

