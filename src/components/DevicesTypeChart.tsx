// import { Typography } from 'antd';
// import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// import { ChartColorList } from '../utils/constants';

// import { data, options } from './data/DevicesTypeData';
// ChartJS.register(ArcElement, Tooltip, Legend);
// const DevicesTypeChart = () => {
//   const { Title } = Typography;
//   return (
//     <div className="py-4">
//       <div className="w-full">
//         <Title
//           level={5}
//           style={{ color: ChartColorList.titleColor, fontWeight: '600' }}
//         >
//           Registered Devices by Type
//         </Title>
//         <div className=" sm:w-[600px] sm:h-[300px] h-[200px] flex justify-center">
//           <Pie data={data} options={options} />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default DevicesTypeChart;
import { Typography } from "antd";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

import { ChartColorList } from "../utils/constants";

import { data, options } from "./data/DevicesTypeData";
import BarChart from "./chart/BarChart"; // Import your BarChart component
import { VersionData, chartOptions3 } from "./data/RegisteredDeviceData"; // Import the required data and options for the BarChart

ChartJS.register(ArcElement, Tooltip, Legend);

const DevicesTypeChart = () => {
  const { Title } = Typography;
  return (
    <div className="py-4">
      <Title
        level={5}
        style={{ color: ChartColorList.titleColor, fontWeight: "600" }}
      >
        Registered Devices by Type
      </Title>
      <div className="flex flex-wrap w-full">
        <div className="w-full sm:w-1/2 flex justify-center">
          <Pie data={data} options={options} />
        </div>
        <div className="w-full sm:w-1/2 flex justify-center">
          <BarChart
            data={VersionData}
            options={chartOptions3}
            title="Registered Devices by Apk Version"
          />
        </div>
      </div>
    </div>
  );
};

export default DevicesTypeChart;
