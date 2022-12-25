import * as ReactIcon from "react-icons/all";

interface MenuInterface {
  id: number;
  name: string;
  url: string;
  icon: keyof typeof ReactIcon;
}

export const Menu: MenuInterface[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
    icon: "FcHome",
  },
  {
    id: 2,
    name: "Items",
    url: "/items",
    icon: "FcFilingCabinet",
  },
  {
    id: 3,
    name: "Stocks",
    url: "/stocks",
    icon: "FcInspection",
  },
  {
    id: 4,
    name: "Transactions",
    url: "/tramsactions",
    icon: "FcProcess",
  },
  {
    id: 5,
    name: "Incoming Items",
    url: "/incomign-items",
    icon: "FcAddDatabase",
  },
  {
    id: 6,
    name: "Exit Items",
    url: "/exit-items",
    icon: "FcDeleteDatabase",
  },
  {
    id: 7,
    name: "Users",
    url: "/users",
    icon: "FcBusinessman",
  },
  {
    id: 8,
    name: "Cashier",
    url: "/cashier",
    icon: "FcMoneyTransfer",
  },
];
