import UserSignupsChart from "./components/UserSignupsChart";
import Card from "./components/DashboardStats";
import "./App.css";
import { data, options } from "./components/data/DevicesTypeData";
import DevicesTypeChart from "./components/DevicesTypeChart";
import PieChart from "./components/chart/PieChart";

import RegisteredDevices from "./components/RegisteredDevices";

function App() {
  return (
    <>
      <Card />
      <UserSignupsChart />

      <RegisteredDevices />
      {/* <PieChart data={data} options={options} title="oops" /> */}
      <DevicesTypeChart />
    </>
  );
}

export default App;
