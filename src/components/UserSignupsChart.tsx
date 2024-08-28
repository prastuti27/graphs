import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import ChartTitle from './chart/ChartTitle';
import { userSignupsData, userSignupsOptions } from './data/UserSignupsData';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);
const UserSignUpChart = () => {
  return (
    <div className="w-full py-4  rounded-lg shadow-sm">
    <ChartTitle title="No. of user signups" />
    <div className="w-full mt-4 mb-7 h-64 sm:h-80 md:h-96 ">
      <Line
        data={userSignupsData}
        options={userSignupsOptions}
        className="w-full"
      />
    </div>
  </div>
  );
};

export default UserSignUpChart;