import CardComponent from "./CardComponent";
import { IconType } from "./iconMap";

interface CardData {
  id: string;
  title: string;
  iconType: IconType;
  value: string;
}

const cardData: CardData[] = [
  { id: "1", title: "Total Customers", iconType: "user", value: "3.93K" },
  { id: "2", title: "Total Devices", iconType: "desktop", value: "406" },
  { id: "3", title: "Active Devices", iconType: "tablet", value: "0" },
];

const Cards = () => {
  return (
    <div className="p-4 flex flex-wrap gap-4 mx-auto">
      {cardData.map((data) => (
        <div key={data.id} className=" w-[calc(25%-1rem)] min-w-[200px]">
          <CardComponent
            title={data.title}
            iconType={data.iconType}
            value={data.value}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
