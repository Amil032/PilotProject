import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Analiz 2",
    },
  },
};

export const BarChart = ({ data }) => {
  const statusSum = data.reduce((sumMap, item) => {
    const status = item.status;
    sumMap[status] = (sumMap[status] || 0) + item.len;
    return sumMap;
  }, {});

  const chartData = {
    labels: Object.keys(statusSum).map((status) => `Status ${status}`),
    datasets: [
      {
        label: "Sum of Lengths",
        data: Object.values(statusSum),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };
  return (
    <div style={{ width: "100%", backgroundColor: "white" }}>
      <Bar
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        options={options}
        data={chartData}
      />
    </div>
  );
};
