
import { BarElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
import { BarChartProps } from "../../types/types";
import ChartTitle from "./ChartTitle";

ChartJS.register(BarElement, Tooltip, Legend);
const BarChart = ({ data, options, title }: BarChartProps) => {
  return (
    <div className="py-4  border rounded-lg shadow-sm md:flex-1">
      <ChartTitle title={title} />
      <Bar data={data} options={options} />
    </div>
  );
};
export default BarChart;
