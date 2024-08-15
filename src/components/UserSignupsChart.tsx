import { LuCalendarDays } from "react-icons/lu";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { userSignupsData, userSignupsOptions } from "./UserSignupsData";
import { Typography } from "antd";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const { Title } = Typography;
const UserSignupsChart = () => {
  return (
    <div className="p-3">
      <div className="w-full h-auto p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <Title level={5} style={{ color: "#585858", fontWeight: "600" }}>
            No. of user signups
          </Title>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <LuCalendarDays color="#FFA500" />
            Today
          </span>
        </div>
        <div className="w-full h-[50vh] sm:h-[75vh] mt-4">
          <Line
            data={userSignupsData}
            options={userSignupsOptions}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default UserSignupsChart;
