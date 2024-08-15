import BarChart from "./BarChart";
import { Typography } from "antd";
import {
  ApkVersionData,
  BrandData,
  chartOptions1,
  chartOptions2,
} from "./RegisteredDeviceData";

const { Title } = Typography;
const RegisteredDevices = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-screen h-full gap-4 p-3 mx-auto">
      <div className=" md:flex-1 h-full p-4 bg-white rounded-lg shadow-md">
        <Title
          level={5}
          style={{ color: "#585858", fontWeight: "600", marginBottom: "5%" }}
        >
          Registered Devices by Apk Version
        </Title>
        <BarChart data={ApkVersionData} options={chartOptions1} />
      </div>

      <div className="md:flex-1 h-full p-4 bg-white rounded-lg shadow-md">
        <Title
          level={5}
          style={{ color: "#585858", fontWeight: "600", marginBottom: "5%" }}
        >
          Registered Devices by Brand
        </Title>
        <BarChart data={BrandData} options={chartOptions2} />
      </div>
    </div>
  );
};

export default RegisteredDevices;
