import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchField from "../components/UI/SearchField";
import Links from "./Links";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

export default function Navigation(props) {
  const { pathname } = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Logo pathname={pathname} />
          <Links pathname={pathname} />
          {pathname === "/" && (
            <SearchField
              placeholder={"Find Mission..."}
              onSearch={props.onSearch}
            />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
