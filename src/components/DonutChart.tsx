import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  data: ChartData<"doughnut">;
  options?: ChartOptions<"doughnut">;
}

const DonutChart = ({ data, options }: DonutChartProps) => {
  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
