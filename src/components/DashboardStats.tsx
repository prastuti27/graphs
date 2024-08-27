import { Card, Typography } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { CARD_DATA } from "../utils/constants";

const DashboardStats = () => {
  const { Title } = Typography;

  return (
    <div className="flex justify-center flex-wrap gap-4 mt-5 mx-auto">
      {CARD_DATA.map(
        ({ id, title, icon, value, userGrowth, useAlternateIcon }) => (
          <Card
            bodyStyle={{ padding: 0 }}
            className="lg:w-[23%] sm:w-[47%] w-[100%]"
            key={id}
            style={{
              borderRadius: "16px",
            }}
          >
            <div className="p-4 border rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none">
              <div className="flex flex-row gap-4 items-center mr-4">
                <div className="text-3xl w-10 h-10 rounded-full border-2 bg-white flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <Title
                    level={5}
                    style={{
                      color: "gray",
                      fontWeight: "normal",
                      margin: "0 8px 0 0",
                    }}
                  >
                    {title}
                  </Title>
                </div>
              </div>

              <Title level={3} style={{ margin: "8px 0 0 0" }}>
                {value}
              </Title>
            </div>
            <div className="flex items-center  border-1 justify-between p-4">
              <div
                className={`flex items-center justify-center w-16 h-8 rounded-full ${
                  useAlternateIcon
                    ? "bg-red-500 text-white"
                    : "bg-green-500  text-white"
                }`}
              >
                <span className="flex items-center">{userGrowth}</span>
                {useAlternateIcon ? (
                  <ArrowDownOutlined style={{ marginLeft: "4px" }} />
                ) : (
                  <ArrowUpOutlined style={{ marginLeft: "4px" }} />
                )}
              </div>
              <span className="ml-2 flex items-center">Since last month</span>
            </div>
          </Card>
        )
      )}
    </div>
  );
};

export default DashboardStats;
