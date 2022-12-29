import React from "react";

interface TableDataType {
  id: number;
  name: string;
  price: number;
  stock: number;
  created_at: string;
  updated_at: string;
}

interface tablePropsInterface {
  tableData: TableDataType[];
}
const tableHead = ["No.", "Item Name", "Price", "Stock"];
const TableComp = ({ tableData }: tablePropsInterface) => {
  return (
    <table className=" w-full table-responsive">
      <thead>
        <tr className="border-b border-gray-300 py-4">
          {tableHead.map((el) => {
            return <th key={el}>{el}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {tableData.map((el, i) => {
          return (
            <tr key={el.id} className="text-center border-y border-gray-300 py-4 ">
              <td>{++i}</td>
              <td className="text-left">{el.name}</td>
              <td>{el.price}</td>
              <td>{el.stock}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComp;
