import React from "react";
import TableComp from "../../components/molecules/TableComp";
import BaseLayout from "../../components/templates/BaseLayout";

const TablePage = () => {
  return (
    <BaseLayout PageTitle="Table Ex">
      <TableComp tableData={tableData} />
    </BaseLayout>
  );
};

export default TablePage;

const tableData = [
  {
    id: 1,
    name: "Wine - Dubouef Macon - Villages",
    price: 24558,
    stock: 4,
    created_at: "2022-08-13 19:11:10",
    updated_at: "2022-03-19 19:31:50",
  },
  {
    id: 2,
    name: "Beer - Fruli",
    price: 977230,
    stock: 429,
    created_at: "2022-10-25 07:41:30",
    updated_at: "2022-11-15 03:11:33",
  },
  {
    id: 3,
    name: "Cinnamon - Ground",
    price: 369239,
    stock: 517,
    created_at: "2022-11-22 11:41:30",
    updated_at: "2022-01-21 06:00:35",
  },
  {
    id: 4,
    name: "Appetizer - Shrimp Puff",
    price: 640282,
    stock: 627,
    created_at: "2022-02-09 22:33:38",
    updated_at: "2022-02-11 23:48:36",
  },
  {
    id: 5,
    name: "Soup - Knorr, Chicken Gumbo",
    price: 272511,
    stock: 505,
    created_at: "2022-04-16 02:38:39",
    updated_at: "2022-10-17 19:09:52",
  },
  {
    id: 6,
    name: "Beans - Kidney, Red Dry",
    price: 294844,
    stock: 156,
    created_at: "2022-07-04 03:44:16",
    updated_at: "2022-12-12 10:02:52",
  },
  {
    id: 7,
    name: "Alize Sunset",
    price: 828269,
    stock: 885,
    created_at: "2022-03-11 11:27:49",
    updated_at: "2022-09-02 09:26:30",
  },
  {
    id: 8,
    name: "Wine - Barbera Alba Doc 2001",
    price: 383912,
    stock: 878,
    created_at: "2022-06-14 12:19:11",
    updated_at: "2022-03-08 23:42:14",
  },
  {
    id: 9,
    name: "Vinegar - White",
    price: 89489,
    stock: 114,
    created_at: "2022-06-02 06:54:18",
    updated_at: "2022-04-05 11:54:24",
  },
  {
    id: 10,
    name: "Pop Shoppe Cream Soda",
    price: 679940,
    stock: 755,
    created_at: "2022-02-22 18:05:04",
    updated_at: "2022-09-09 13:05:23",
  },
];
