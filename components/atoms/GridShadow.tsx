import React from "react";
const gridCol = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];

const GridShadow = () => {
  return (
    <div className=" w-24 h-24 absolute  -right-8 -top-8 grid grid-rows-6 grid-cols-6 gap-2">
      {gridCol.map((el) => {
        return <div key={el} className="bg-gray-900/20 rounded w-full h-full"></div>;
      })}
    </div>
  );
};

export default GridShadow;
