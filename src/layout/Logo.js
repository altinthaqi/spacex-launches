import React from "react";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="h2"
      sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
    >
      <NavLink to="/" style={{ color: "white" }}>
        SpaceX
      </NavLink>
    </Typography>
  );
}

export default Logo;
