import ChartTitle from './chart/ChartTitle';
import DonutChart from './chart/DonutChart';
import {
  CountryData,
  defaultOptions,
  SubscriptionData,
} from './data/NumberOfUsersData';
const NumberOfUsers = () => {
  return (
    <div className="flex w-full gap-4 py-4 mx-auto flex-col lg:flex-row max-w-screen">
      <div className="bg-white rounded-lg shadow-sm md:flex-1">
        <ChartTitle title="Number of users by country" />
        <div className="flex items-center justify-center mb-5  h-48 px-4">
          <DonutChart data={CountryData} options={defaultOptions} />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm md:flex-1">
        <ChartTitle title="Number of users by subscription" />
        <div className="flex items-center justify-center  mb-5 h-48 px-4">
          <DonutChart data={SubscriptionData} options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default NumberOfUsers;