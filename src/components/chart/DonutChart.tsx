import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { DonutChartProps } from '../../types/types';
ChartJS.register(ArcElement, Tooltip, Legend);
const DonutChart = ({ data, options }: DonutChartProps) => {
  return data &&  <Doughnut data={data} options={options} />;
};
export default DonutChart;