import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

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
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "60%" }}>
        <Pie data={chartData} />
      </div>
    </div>
  );
};
