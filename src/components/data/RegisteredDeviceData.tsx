import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart, ChartData, ChartOptions } from "chart.js";
import { ChartColorList } from "../../utils/constants";

Chart.register(ChartDataLabels);

export const ApkVersionData: ChartData<"bar"> = {
  labels: ["Standard", "Basic", "Premium", "Expire", "Unpaid"],
  datasets: [
    {
      data: [82, 52, 57, 21, 11],
      backgroundColor: [
        "#D09D3E",
        ChartColorList.darkBlueColor,
        ChartColorList.greenColor,
        "#36a2eb",
        ChartColorList.blueColor,
      ],
      borderRadius: 10,
      barPercentage: 1,
      categoryPercentage: 0.5,
    },
  ],
};
export const VersionData: ChartData<"bar"> = {
  labels: [
    "Icloud",
    "Samsung",
    "Google",
    "Oppo",
    "Motorola",
    "HMD",
    "Xiaomi",
    "Huawei",
    "Gionee",
    "Vivo",
    "Tecno",
  ],
  datasets: [
    {
      data: [142, 233, 175, 57, 143, 211, 239, 122, 157, 38, 16],
      backgroundColor: [
        "#D09D3E",
        ChartColorList.darkBlueColor,
        ChartColorList.greenColor,
        "#36a2eb",
        ChartColorList.blueColor,
        "#D09D3E",
        ChartColorList.darkBlueColor,
        ChartColorList.greenColor,
        "#36a2eb",
        ChartColorList.blueColor,
        ChartColorList.blueColor,
      ],
      borderRadius: 10,
      barPercentage: 1,
      categoryPercentage: 0.5,
    },
  ],
};
export const chartOptions1: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        generateLabels: (chart) => {
          const dataset = chart.data.datasets[0];
          const data = dataset.data as number[];
          const backgroundColor = dataset.backgroundColor as string;

          const sortedData = [...data].sort((a, b) => b - a);

          const highestValue = sortedData[0];
          const mediumValue = sortedData[Math.floor(sortedData.length / 2)];
          const lowestValue = sortedData[sortedData.length - 1];

          const highIndex = data.indexOf(highestValue);
          const mediumIndex = data.indexOf(mediumValue);
          const lowIndex = data.indexOf(lowestValue);

          return [
            {
              text: "High",
              fillStyle: backgroundColor[highIndex],
            },
            {
              text: "Medium",
              fillStyle: backgroundColor[mediumIndex],
            },
            {
              text: "Low",
              fillStyle: backgroundColor[lowIndex],
            },
          ];
        },
        boxWidth: 10,
        boxHeight: 10,
      },
    },

    datalabels: {
      anchor: "end",
      align: "end",
      formatter: (value) => `${value}`,
      color: "#000",
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
        stepSize: 10,
      },
      min: 0,
      max: 100,
      title: {
        display: true,
        text: "Users",
        align: "center",
        color: "#000",
        font: {
          size: 14,
        },
      },
    },
  },
};
export const chartOptions3: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        generateLabels: (chart) => {
          const dataset = chart.data.datasets[0];
          const data = dataset.data as number[];
          const backgroundColor = dataset.backgroundColor as string;

          const sortedData = [...data].sort((a, b) => b - a);

          const highestValue = sortedData[0];
          const mediumValue = sortedData[Math.floor(sortedData.length / 2)];
          const lowestValue = sortedData[sortedData.length - 1];

          const highIndex = data.indexOf(highestValue);
          const mediumIndex = data.indexOf(mediumValue);
          const lowIndex = data.indexOf(lowestValue);

          return [
            {
              text: "High",
              fillStyle: backgroundColor[highIndex],
            },
            {
              text: "Medium",
              fillStyle: backgroundColor[mediumIndex],
            },
            {
              text: "Low",
              fillStyle: backgroundColor[lowIndex],
            },
          ];
        },
        boxWidth: 10,
        boxHeight: 10,
      },
    },

    datalabels: {
      anchor: "end",
      align: "end",
      formatter: (value) => `${value}`,
      color: "#000",
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
      max: 250,
      title: {
        display: true,
        text: "Users",
        align: "center",
        color: "#000",
        font: {
          size: 14,
        },
      },
    },
  },
};

export const BrandData: ChartData<"bar"> = {
  labels: ["Chrome", "Safari", "Firefox", "Edge", "Safari", "Firefox", "other"],
  datasets: [
    {
      data: [79, 14, 11, 11, 55, 67, 8],
      backgroundColor: [
        ChartColorList.greenColor,
        "#ff6384",
        "#36a2eb",
        "#ffcd56",
        ChartColorList.darkBlueColor,
      ],
      borderRadius: 5,
      barPercentage: 1,
      categoryPercentage: 0.75,
      barThickness: 40,
    },
  ],
};

export const chartOptions2: ChartOptions<"bar"> = {
  responsive: true,
  indexAxis: "y",
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      min: 0,
      max: 200,
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: true,
      },
    },
  },
};
