import Head from "next/head";
import React, { useState } from "react";
import Sidebar from "../molecules/Sidebar";
import Topbar from "../molecules/Topbar";

const BaseLayout = ({
  children,
  PageTitle,
}: {
  children: React.ReactNode;
  PageTitle: string;
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  return (
    <>
      <Head>
        <title>{PageTitle}</title>
      </Head>
      <main className="flex relative bg-gray-600">
        <Sidebar />
        <main
          className={`bg-gray-200 min-h-screen rounded-tl-[3rem] border pt-9 px-10 ${
            isNavOpen ? "openNav" : "closedNav"
          }`}
        >
          <Topbar toggleNav={toggleNav} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <section className="pt-10">{children}</section>
        </main>
      </main>
    </>
  );
};

export default BaseLayout;
