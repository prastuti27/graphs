import UserSignupsChart from "./components/UserSignupsChart";
import Card from "./components/DashboardStats";
import "./App.css";
import DevicesTypeChart from "./components/DevicesTypeChart";

import RegisteredDevices from "./components/RegisteredDevices";


function App() {
  return (
    <>
      <Card />
      <UserSignupsChart />
    
      <RegisteredDevices />
      <DevicesTypeChart />
       
    </>
  );
}

export default App;
