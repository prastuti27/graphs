import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  BarElement,

  Tooltip,
  Legend
);

interface BarChartProps {
  data: ChartData<"bar">;
  options: ChartOptions<"bar">;
}

const BarChart = ({ data, options }: BarChartProps) => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
