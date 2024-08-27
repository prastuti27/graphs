import { ChartColorList } from "../../utils/constants";
export const userSignupsData = {
  labels: [
    "Jan 1",
    "Jan 3",
    "Jan 5",
    "Jan 7",
    "Jan 9",
    "Jan 11",
    "Jan 13",
    "Jan 15",
    "Jan 17",
    "Jan 19",
    "Jan 21",
    "Jan 23",
    "Jan 25",
    "Jan 27",
    "Jan 29",
  ],
  datasets: [
    {
      label: "No. of user signups",
      data: [40, 55, 65, 25, 70, 35, 67, 24, 55, 25, 15, 30, 45, 50, 55, 45],
      fill: false,
      borderColor: ChartColorList.greenColor,
      tension: 0.4,
      pointRadius: 4,
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
    datalabels: {
      display: false, // Turn off data labels
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        stepSize: 10,
      },
      min: 0,
      max: 70,
    },
  },
};
