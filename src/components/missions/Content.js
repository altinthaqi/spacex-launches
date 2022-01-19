import React from "react";
import Details from "./Details";
import Box from "@mui/material/Box";
import MissionTitle from "./MissionTitle";
import MissionLaunches from "./MissionLaunches";

function Content({ launch }) {
  return (
    <Box marginX={1.5} height={200}>
      <MissionTitle launch={launch} />
      <MissionLaunches launch={launch} />
      <Details
        title={launch.mission_name}
        details={launch.details}
        rocketPath={launch.rocket.rocket.id}
      />
    </Box>
  );
}

export default Content;
