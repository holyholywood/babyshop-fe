import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { blue, grey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import Head from "next/head";
import React from "react";

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
        <Box width="22rem" minHeight={"100vh"} padding="1rem">
          <Box
            bgcolor={blue[900]}
            minHeight="100%"
            width={"100%"}
            borderRadius="20px"
            px={"2rem"}
            py="4rem"
            textAlign={"center"}
            color="white"
          >
            <Typography variant="h4" fontWeight={"bold"}>
              Babyshop
            </Typography>
            <Typography variant="h6" mt="0.5rem" fontWeight={"semibold"}>
              Information System
            </Typography>
            <Box my={"2rem"} bgcolor={grey[400]} height={"1px"} borderRadius="999px"></Box>
          </Box>
        </Box>
        <section>{children}</section>
      </Stack>
    </>
  );
};

export default BaseLayout;
