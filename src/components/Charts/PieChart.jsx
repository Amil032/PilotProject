import React from "react";
import { Pie } from "react-chartjs-2";

export const PieChart = ({ data }) => {
  const statusCounts = data?.reduce((countMap, item) => {
    const status = item.status;
    countMap[status] = (countMap[status] || 0) + 1;
    return countMap;
  }, {});
  const total = Object.values(statusCounts).reduce(
    (acc, count) => acc + count,
    0
  );
  const tooltipOptions = {
    callbacks: {
      label: function (tooltipItem, data) {
        const dataIndex = tooltipItem.index;
        const dataset = data.datasets[tooltipItem.datasetIndex];
        const currentValue = dataset.data[dataIndex];
        const percentage = ((currentValue / total) * 100).toFixed(1) + "%";
        return `${data.labels[dataIndex]}: ${currentValue} (${percentage})`;
      },
    },
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Analiz 1",
      },
    },
  };
  const chartData = {
    labels: Object.entries(statusCounts).map(
      (status) =>
        `Status ${status[0]} (${Math.round((status[1] / total) * 1000) / 10})%`
    ),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          // Add more colors as needed
        ],
      },
    ],
  };

  return (
    <div style={{ width: "80%" }}>
      <Pie
        data={chartData}
        options={options}
        style={{ backgroundColor: "white" }}
      />
    </div>
  );
};
