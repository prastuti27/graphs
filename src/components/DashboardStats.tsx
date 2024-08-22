import { Card, Typography } from 'antd';

import { CARD_DATA } from '../utils/constants';
const DashboardStats = () => {
  const { Title } = Typography;
  return (
    <div className="flex flex-wrap gap-4 mt-5 mx-auto">
      {CARD_DATA.map(({ id, title, icon, value }) => (
        <Card
          className="lg:w-[25%] sm:w-[47%] w-[100%] shadow-sm pb-3"
          key={id}
        >
          <div className="absolute mr-3 text-3xl text-orange-600 top-10 right-2">
            {icon}
          </div>
          <Title
            level={5}
            style={{ color: 'gray', fontWeight: 'normal', margin: '0px' }}
          >
            {title}
          </Title>
          <Title level={3} style={{ margin: '0px' }}>
            {value}
          </Title>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;