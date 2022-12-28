import Icon from "../components/atoms/Icon";
import BaseLayout from "../components/templates/BaseLayout";
import { myIconType } from "../type";
interface MonitoringDataInterface {
  id: number;
  name: string | number;
  value: string | number;
  icon: myIconType;
  color?: string;
}
const MonitoringData: MonitoringDataInterface[] = [
  { id: 1, name: "Items Count", value: "120", icon: "AiOutlineDatabase", color: "red" },
  {
    id: 2,
    name: "Today's Transactions",
    value: "50",
    icon: "AiOutlineDatabase",
    color: "green",
  },
  { id: 3, name: "Today's Income", value: "10000K", icon: "AiOutlineDatabase", color: "blue" },
  {
    id: 4,
    name: "Today's Incoming Items",
    value: "20",
    icon: "AiOutlineDatabase",
    color: "amber",
  },
  { id: 5, name: "Users", value: "10", icon: "AiOutlineDatabase", color: "violet" },
];

export default function Home() {
  return (
    <BaseLayout PageTitle="Dashboard">
      <p className="tracking-wide">Overview of all shop transaction and data flow</p>
      <div className="bg-slate-200">
        <div className="grid grid-cols-5 gap-5 mt-16">
          {MonitoringData.map((el) => {
            return (
              <div className="homeCard" key={el.id}>
                <div className={`homeCard-icon ${el.color}`}>
                  <Icon icon={el.icon} color="primary" size="xl" />
                </div>
                <span className="homeCard-value">{el.value}</span>
                <h1 className="homeCard-title">{el.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </BaseLayout>
  );
}
