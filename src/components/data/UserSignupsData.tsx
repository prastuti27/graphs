export const userSignupsData = {
  labels: [
    "Jul 04",
    "Jul 06",
    "Jul 08",
    "Jul 10",
    "Jul 12",
    "Jul 14",
    "Jul 16",
    "Jul 18",
    "Jul 20",
    "Jul 22",
    "Jul 24",
    "Jul 26",
    "Jul 28",
    "Jul 30",
    "Aug 01",
  ],
  datasets: [
    {
      label: "No. of user signups",
      data: [
        1, 0, 1, 1, 2, 2, 1, 4, 0, 1, 1, 0, 1, 1, 2, 1, 1, 0, 2, 1, 3, 0, 0, 1,
        0, 2, 0, 3, 3, 0,
      ],
      fill: false,
      borderColor: "orange",
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

export const userSignupsOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 0.25,
        maxRotation: 45,
        minRotation: 45,
      },
    },
    y: {
      ticks: {
        stepSize: 1,
      },
    },
  },
};
