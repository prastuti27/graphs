import { ChartData, ChartOptions } from "chart.js";

export const CountryData: ChartData<"doughnut"> = {
  labels: [
    "Australia",
    "United States",
    "Canada",
    "Singapore",
    "South Africa",
    "Belgium",
    "United Kingdom",
  ],
  datasets: [
    {
      data: [0, 33.3, 0, 0, 66.7, 0, 0],
      backgroundColor: [
        "#ff6384",
        "#9966ff",
        "#ffcd56",
        "#9966ff",
        "#4bc0c0",
        "#f9a8d4",
        "#c9cbcf",
      ],
    },
  ],
};

export const SubscriptionData: ChartData<"doughnut"> = {
  labels: ["Basic", "Standard", "Premium", "Unpaid", "Expire"],
  datasets: [
    {
      data: [0, 0, 0, 100.0, 0],
      backgroundColor: ["#9966ff", "#36a2eb", "#ffcd56", "#ff6384", "#4bc0c0"],
    },
  ],
};

export const defaultOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "60%",
  plugins: {
    legend: {
      display: true,
      position: "right",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
};
