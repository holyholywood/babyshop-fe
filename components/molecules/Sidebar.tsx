import {
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Menu } from "../../src/resources/menu";
import Icon from "../atoms/Icon";
import Link from "next/link";

const Sidebar = ({ NavOpen }: { NavOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box width="22rem" minHeight={"100vh"} padding="1rem">
      <Box
        bgcolor={blue[700]}
        minHeight="100%"
        width={"100%"}
        borderRadius="20px"
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
        <Box
          my={"2rem"}
          width="80%"
          bgcolor={grey[400]}
          height={"1px"}
          borderRadius="999px"
          mx="auto"
        />
        <List component="nav" sx={{ paddingX: "1rem" }}>
          <ListItemButton onClick={() => setIsOpen(!isOpen)}>
            <ListItemIcon style={{ color: "white" }}>
              <Icon icon="HomeOutlined" />
            </ListItemIcon>
            <ListItemText primary="Home" />
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 7 }}>
              {Menu.map((item) => {
                return (
                  <Link href={item.url}>
                    <ListItemButton>
                      <ListItemIcon>
                        <Icon sx={{ color: "white" }} fontSize="small" icon={item.icon} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        sx={{ textDecoration: "none", color: "white" }}
                      />
                    </ListItemButton>
                  </Link>
                );
              })}
            </List>
          </Collapse>
          <Link href="/cashier">
            <ListItemButton>
              <ListItemIcon style={{ color: "white" }}>
                <Icon icon="AttachMoneyOutlined" />
              </ListItemIcon>
              <ListItemText
                primary="Cashier"
                sx={{ textDecoration: "none", color: "white" }}
              />
            </ListItemButton>
          </Link>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
