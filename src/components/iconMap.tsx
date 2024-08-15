import {
  UserOutlined,
  DesktopOutlined,
  TabletOutlined,
} from "@ant-design/icons";

export const iconMap = {
  user: <UserOutlined className="text-orange-600 text-3xl mr-3" />,
  desktop: <DesktopOutlined className="text-orange-600 text-3xl mr-3" />,
  tablet: <TabletOutlined className="text-orange-600 text-3xl mr-3" />,
};

export type IconType = keyof typeof iconMap;
