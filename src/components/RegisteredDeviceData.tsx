import { ChartData, ChartOptions } from "chart.js";

export const ApkVersionData: ChartData<"bar"> = {
  labels: [
    "1.3.0",
    "1.4.0",
    "1.7.1",
    "2.0.0",
    "2.1.0",
    "2.6.0",
    "2.7.0",
    "3.0.0",
    "4.0.0",
    "4.1.1",
  ],
  datasets: [
    {
      data: [0, 0, 0, 29, 11, 3, 37, 40, 90, 16, 65],
      backgroundColor: [
        "#ff6384",
        "#36a2eb",
        "#ff9f40",
        "#ffcd56",
        "#4bc0c0",
        "#9966ff",
        "#c9cbcf",
        "#ff6384",
        "#36a2eb",
        "#ffcd56",
      ],
    },
  ],
};

export const chartOptions1: ChartOptions<"bar"> = {
  responsive: true,
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
    },
    y: {
      grid: {
        display: true,
      },
      ticks: {
        stepSize: 30,
      },
      min: 0,
      max: 90,
    },
  },
};

export const BrandData: ChartData<"bar"> = {
  labels: [
    "Icloud",
    "Google",
    "Oppo",
    "Mototola",
    "Samsung",
    "HMD",
    "Xiaomi",
    "Huawei",
    "Gionee",
    "Vivo",
    "Tecno",
    "Coolpad",
    "Lge",
    "Realme",
    "Oneplus",
    "other",
  ],
  datasets: [
    {
      data: [79, 14, 11, 11, 55, 67, 8, 2, 17, 11, 3, 5, 3, 16, 3, 4],
      backgroundColor: ["#4bc0c0", "#ff6384", "#36a2eb", "#ffcd56", "#9966ff"],
    },
  ],
};

export const chartOptions2: ChartOptions<"bar"> = {
  responsive: true,
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
    },
    y: {
      grid: {
        display: true,
      },
      ticks: {
        stepSize: 50,
      },
      min: 0,
      max: 200,
    },
  },
};
