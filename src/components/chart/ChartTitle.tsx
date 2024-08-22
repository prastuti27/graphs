import { Typography } from 'antd';

import { TitleType } from '../../types/types'
import { LuCalendarDays } from "react-icons/lu";

const ChartTitle = ({ title }: TitleType) => {
  const { Title } = Typography;
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <Title level={5} className="font-semibold text-start sm:text-left">
        {title}
      </Title>
      <span className="flex items-center gap-1 text-sm text-gray-600 mt-2 sm:mt-0">
        <LuCalendarDays/>
        Today
      </span>
    </div>
  );
};
export default ChartTitle;