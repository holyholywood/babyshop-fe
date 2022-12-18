import { AccountCircle, Menu } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/system";
import React from "react";

const Topbar = () => {
  return (
    <AppBar position="relative" sx={{ paddingX: "2rem", paddingY: "0.5rem" }}>
      <Stack justifyContent={"space-between"} direction="row" alignItems={"center"}>
        <Stack direction={"row"} alignItems="center" gap={"10px"}>
          <IconButton color="inherit">
            <Menu fontSize="large" />
          </IconButton>
          <Typography variant="h6">Dashboard</Typography>
        </Stack>
        <div>
          <IconButton size="large" color="inherit" aria-controls="menu-appbar" edge="start">
            <AccountCircle />
          </IconButton>
        </div>
      </Stack>
    </AppBar>
  );
};

export default Topbar;
