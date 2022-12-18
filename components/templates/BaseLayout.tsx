import { Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import Head from "next/head";
import React from "react";
import Sidebar from "../molecules/Sidebar";
import Topbar from "../molecules/Topbar";

const BaseLayout = ({
  children,
  PageTitle,
}: {
  children: React.ReactNode;
  PageTitle: string;
}) => {
  return (
    <>
      <Head>
        <title>{PageTitle}</title>
      </Head>
      <Stack component="main" direction={"row"}>
        <Sidebar />
        <Stack
          marginLeft={2}
          borderLeft={1}
          borderColor={grey[200]}
          position="relative"
          minHeight={"100vh"}
          width="100%"
        >
          <Topbar />
          <Stack padding={2}>
            <Typography variant="h3" color="text.secondary" my={2}>
              Good Morning, Dito :)
            </Typography>
            <Divider sx={{ marginY: "1rem" }} />
            {children}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default BaseLayout;
