import Head from "next/head";
import React, { useState } from "react";

const BaseLayout = ({
  children,
  PageTitle,
}: {
  children: React.ReactNode;
  PageTitle: string;
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <Head>
        <title>{PageTitle}</title>
      </Head>
    </>
  );
};

export default BaseLayout;
