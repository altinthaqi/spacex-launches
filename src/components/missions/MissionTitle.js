import React from "react";
import { Typography } from "@mui/material";

function MissionTitle({ launch }) {
  return (
    <Typography variant="h6" component="h2" marginY={2}>
      {launch.mission_name}
    </Typography>
  );
}

export default MissionTitle;
