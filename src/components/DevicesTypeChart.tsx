// DevicesTypeChart.tsx
import { Pie } from "react-chartjs-2";
import { Typography } from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { data, options } from "./DevicesTypeData";

ChartJS.register(ArcElement, Tooltip, Legend);
const { Title } = Typography;
const DevicesTypeChart = () => {
  return (
    <div className="p-3">
      <div className="flex flex-col items-start w-full md:w-1/2 h-full p-4 bg-white rounded-xl shadow-md">
        <Title level={5} style={{ color: "#585858", fontWeight: "600" }}>
          Registered Devices by Type
        </Title>
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-48 h-48 sm:w-72 sm:h-72">
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicesTypeChart;
