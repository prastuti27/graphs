import {
  UserOutlined,
  DesktopOutlined,
  TabletOutlined,
} from "@ant-design/icons";

export const CARD_DATA = [
  {
    id: "1",
    title: "Total Customers",
    icon: <UserOutlined style={{ fontSize: "16px", fontWeight: "200" }} />,
    value: "3.93K",
    userGrowth: "30% ",

    useAlternateIcon: false,
  },
  {
    id: "2",
    title: "Total Devices",
    icon: <DesktopOutlined style={{ fontSize: "16px", fontWeight: "200" }} />,
    value: "3.93K",
    userGrowth: "30% ",
    useAlternateIcon: false,
  },
  {
    id: "3",
    title: "Active Devices",
    icon: <TabletOutlined style={{ fontSize: "16px", fontWeight: "200" }} />,
    value: "3.93K",
    userGrowth: "30% ",
    useAlternateIcon: true,
  },
  {
    id: "3",
    title: "Active Devices",
    icon: <TabletOutlined style={{ fontSize: "16px", fontWeight: "200" }} />,
    value: "3.93K",
    userGrowth: "30% ",
    useAlternateIcon: true,
  },
];

export const ChartColorList = {
  titleColor: "#585858",
  greenColor: "#159946",
  blueColor: "#3b82f6",
  redColor: "#DD5555",
  yellowColor: "#FFCE5C",
  darkBlueColor: "#1A63F4",
};
