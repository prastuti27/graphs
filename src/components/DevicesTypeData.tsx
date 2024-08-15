import { ChartOptions } from "chart.js";

export const data = {
  labels: ["IOS", "ANDROID", "Deleted"],
  datasets: [
    {
      data: [14.1, 58.3, 27.6],
      backgroundColor: ["#36A2EB", "#4BC0C0", "#7F8C8D"],
      hoverBackgroundColor: ["#36A2EB", "#4BC0C0", "#7F8C8D"],
    },
  ],
};

export const options: ChartOptions<"pie"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      labels: {
        font: {
          size: 14,
          family: "Arial, sans-serif",
          weight: "bold",
        },
        boxWidth: 20,
        padding: 20,
        usePointStyle: true,
        pointStyle: "rounded",
      },
    },
  },
  layout: {
    padding: {
      top: 10,
      bottom: 10,
    },
  },
};
