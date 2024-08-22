import BarChart from './chart/BarChart';
import {
  ApkVersionData,
  BrandData,
  chartOptions1,
  chartOptions2,
} from './data/RegisteredDeviceData';
const RegisteredDevices = () => {
  return (
    <div className="flex w-full gap-4 flex-col lg:flex-row max-w-screen">
      <BarChart
        data={ApkVersionData}
        options={chartOptions1}
        title=" Registered Devices by Apk Version"
      />
      <BarChart
        data={BrandData}
        options={chartOptions2}
        title="Registered Devices by Brand"
      />
    </div>
  );
};

export default RegisteredDevices;