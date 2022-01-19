import React from "react";
import Typography from "@mui/material/Typography";

function Title({ rocketInfo }) {
  return (
    <Typography
      variant="h1"
      component="h1"
      align="center"
      sx={{ color: "white", fontWeight: 500 }}
    >
      {rocketInfo.name}
    </Typography>
  );
}

export default Title;
