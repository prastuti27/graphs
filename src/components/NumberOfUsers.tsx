import { Typography } from "antd";
import DonutChart from "./DonutChart";
import {
  CountryData,
  SubscriptionData,
  defaultOptions,
} from "./NumberOfUsersData";
import { LuCalendarDays } from "react-icons/lu";

const { Title } = Typography;

const NumberOfUsers = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-screen h-full gap-4 p-3 mx-auto">
      <div className="md:flex-1 h-full p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <Title
            level={5}
            style={{ color: "#585858", fontWeight: "600", marginBottom: "5%" }}
          >
            Number of users by country
          </Title>
          <span className="flex items-center gap-1 text-sm text-gray-600 ">
            <LuCalendarDays color="#FFA500" />
            Today
          </span>
        </div>
        <div className=" flex items-center mb-5 justify-center">
          <DonutChart data={CountryData} options={defaultOptions} />
        </div>
      </div>
      <div className="md:flex-1 h-full p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <Title
            level={5}
            style={{ color: "#585858", fontWeight: "600", marginBottom: "5%" }}
          >
            Number of users by subscription
          </Title>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <LuCalendarDays color="#FFA500" />
            Today
          </span>
        </div>
        <div className=" flex items-center justify-center mb-5">
          <DonutChart data={SubscriptionData} options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default NumberOfUsers;
