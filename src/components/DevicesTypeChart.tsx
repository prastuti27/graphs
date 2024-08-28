import { data, options } from "./data/DevicesTypeData";
import { VersionData, chartOptions3 } from "./data/RegisteredDeviceData";
import BarChart from "./chart/BarChart";
import PieChart from "./chart/PieChart";

const DevicesTypeChart = () => {
  return (
    <div className="flex gap-3 p-4 ">
      <div className=" flex flex-col justify-center">
        <PieChart options={options} title="hello world" data={data} />
      </div>

      <div className=" flex justify-center">
        <BarChart
          data={VersionData}
          options={chartOptions3}
          title="Registered Devices by Apk Version"
        />
      </div>
    </div>
  );
};

export default DevicesTypeChart;
