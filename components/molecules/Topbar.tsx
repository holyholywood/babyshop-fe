import { Tooltip } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { BiBell, BiLogIn, BiChevronRight, BiChevronLeft } from "react-icons/bi";

interface TopbarPropsInterface {
  toggleNav: () => void;
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}
const Topbar = ({ toggleNav, isNavOpen, setIsNavOpen }: TopbarPropsInterface) => {
  return (
    <div className="flex items-center gap-8">
      <button
        onClick={toggleNav}
        className="rounded-lg bg-gray-300 p-1 shadow hover:text-gray-500 hover:bg-gray-200 duration-200 text-gray-700 text-2xl"
      >
        {isNavOpen ? <BiChevronRight className="" /> : <BiChevronLeft className="" />}
      </button>
      <div className="w-full items-center flex justify-between">
        <h1 className="text-gray-900 text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Tooltip title="Show Notification's">
            <button className="rounded-lg bg-gray-200 p-2 hover:shadow border border-gray-300 hover:text-gray-600 hover:bg-gray-200 duration-200 text-gray-500 text-xl">
              <BiBell />
            </button>
          </Tooltip>
          <Tooltip title="Log Out">
            <button className="rounded-lg bg-gray-200 p-2 hover:shadow border border-gray-300 hover:text-gray-600 hover:bg-gray-200 duration-200 text-gray-500 text-xl">
              <BiLogIn />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
