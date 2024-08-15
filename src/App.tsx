import UserSignupsChart from "./components/UserSignupsChart";
import Card from "./components/Cards";
import "./App.css";
import DevicesTypeChart from "./components/DevicesTypeChart";
import NumberOfUsers from "./components/NumberOfUsers";
import RegisteredDevices from "./components/RegisteredDevices";
function App() {
  return (
    <>
      <Card />
      <UserSignupsChart />
      <NumberOfUsers />
      <RegisteredDevices />
      <DevicesTypeChart />
    </>
  );
}

export default App;
