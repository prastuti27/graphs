import { Typography } from 'antd';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { ChartColorList } from '../utils/constants';

import { data, options } from './data/DevicesTypeData';
ChartJS.register(ArcElement, Tooltip, Legend);
const DevicesTypeChart = () => {
  const { Title } = Typography;
  return (
    <div className="py-4">
      <div className="w-full">
        <Title
          level={5}
          style={{ color: ChartColorList.titleColor, fontWeight: '600' }}
        >
          Registered Devices by Type
        </Title>
        <div className=" sm:w-[600px] sm:h-[300px] h-[200px] flex justify-center">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
export default DevicesTypeChart;