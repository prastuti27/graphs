import { data, options } from "./data/newData";
import { Doughnut } from "react-chartjs-2";
import { Typography } from "antd";
import { ChartColorList } from "../utils/constants";

const NewChart = () => {
  const { Title } = Typography;
  return (
    <div className="py-4">
      <div className="w-full">
        <Title
          level={5}
          style={{ color: ChartColorList.titleColor, fontWeight: "600" }}
        >
          Number of user by subscription
        </Title>

        <div style={{ width: "300px", height: "300px" }}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default NewChart;
