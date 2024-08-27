import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Standard (31%)",
    "Basic (20%)",
    "Premium (19%)",
    "Expire (14%)",
    "Unpaid (16%)",
  ],
  datasets: [
    {
      data: [31, 20, 19, 14, 16],
      backgroundColor: ["#ff6384", "#4bc0c0", "#ffcd56", "#9966ff", "#36a2eb"],
      hoverBackgroundColor: [
        "#ff6384",
        "#4bc0c0",
        "#ffcd56",
        "#9966ff",
        "#36a2eb",
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        boxWidth: 10,
        padding: 5,
      },
      display: true,
      fullSize: true,
    },
    title: {
      display: true,
      text: "Number of users by subscription",
    },
  },
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
  },
};
