import { Typography } from "antd";
import { BarElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

import { BarChartProps } from "../../types/types";
import { ChartColorList } from "../../utils/constants";
ChartJS.register(BarElement, Tooltip, Legend);
const BarChart = ({ data, options, title }: BarChartProps) => {
  const { Title } = Typography;
  return (
    <div className="py-4 bg-white rounded-lg shadow-sm md:flex-1">
      <Title
        level={5}
        style={{
          color: ChartColorList.titleColor,
          fontWeight: "600",
          marginBottom: "5%",
        }}
      >
        {title}
      </Title>
      <Bar data={data} options={options} />
    </div>
  );
};
export default BarChart;
