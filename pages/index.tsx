import { Button, Drawer, Tooltip } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useEffect, useState } from "react";
import AppLogo from "../components/atoms/AppLogo";
import Sidebar from "../components/molecules/Sidebar";
import { BiChevronLeft, BiChevronRight, BiBell, BiLogIn } from "react-icons/bi";
import Topbar from "../components/molecules/Topbar";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <main className="flex relative bg-gray-600">
      <Sidebar />
      <main
        className={`bg-gray-200 min-h-screen rounded-tl-[3rem] border pt-9 px-10 ${
          isNavOpen ? "openNav" : "closedNav"
        }`}
      >
        <Topbar toggleNav={toggleNav} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </main>
    </main>
  );
}
