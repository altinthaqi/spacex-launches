import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchField from "../components/UI/SearchField";
import Links from "./Links";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Logo />
          <Links />
          <SearchField placeholder={"Find Mission..."} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
