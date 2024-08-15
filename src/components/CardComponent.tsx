import { Card, Typography } from "antd";
import { iconMap, IconType } from "./iconMap";

const { Title } = Typography;

interface CardComponentProps {
  title: string;
  iconType: IconType;
  value: string;
  typographyLevel?: 1 | 2 | 3 | 4 | 5;
  titleClassName?: string;
  valueClassName?: string;
}

const CardComponent = ({ title, iconType, value }: CardComponentProps) => {
  return (
    <Card className="shadow-lg max-w-xs relative">
      <div className="absolute top-10 right-2">{iconMap[iconType]}</div>
      <Title
        level={5}
        style={{ color: "gray", fontWeight: "normal", margin: "0px" }}
      >
        {title}
      </Title>
      <Title level={3} style={{ margin: "0px" }}>
        {value}
      </Title>
    </Card>
  );
};

export default CardComponent;
