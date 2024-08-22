import { ChartData, ChartOptions } from 'chart.js';

import { ChartColorList } from '../../utils/constants';
export const CountryData: ChartData<'doughnut'> = {
  labels: [
    'Australia',
    'United States',
    'Canada',
    'Singapore',
    'South Africa',
    'Belgium',
    'United Kingdom',
  ],
  datasets: [
    {
      data: [0, 33.3, 0, 0, 66.7, 0, 0],
      backgroundColor: [
        '#ff6384',
        ChartColorList.greenColor,
        '#ffcd56',
        ChartColorList.blueColor,
        ChartColorList.darkBlueColor,
        '#f9a8d4',
        '#c9cbcf',
      ],
    },
  ],
};

export const SubscriptionData: ChartData<'doughnut'> = {
  labels: ['Basic', 'Standard', 'Premium', 'Unpaid', 'Expire'],
  datasets: [
    {
      data: [0, 0, 0, 100.0, 0],
      backgroundColor: [
        '#9966ff',
        '#36a2eb',
        '#ffcd56',
        ChartColorList.greenColor,
        '#4bc0c0',
      ],
    },
  ],
};

export const defaultOptions: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '60%',
  plugins: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
  },
};