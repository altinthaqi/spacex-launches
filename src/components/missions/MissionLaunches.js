import React from "react";
import { Typography } from "@mui/material";

function MissionLaunches({ launch }) {
  return (
    <>
      <Typography variant="body2" component="p" marginY={2}>
        <b>Launch site:</b> {launch.launch_site.site_name_long}
      </Typography>

      <Typography variant="body2" component="p" marginY={2}>
        <b>Launch year:</b> {launch.launch_year}
      </Typography>
    </>
  );
}

export default MissionLaunches;
