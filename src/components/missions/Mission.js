import React from "react";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Image } from "./MissionStyled";
import { Typography } from "@mui/material";
import Details from "./Details";

function Mission({ launch }) {
  return (
    <Grid item xs={12} sm={12} md={6}>
      <Paper elevation={5}>
        <Image src={launch.links.flickr_images[0]} alt={launch.mission_name} />
        <Box marginX={1.5} height={200}>
          <Typography variant="h6" component="h2" marginY={2}>
            {launch.mission_name}
          </Typography>

          <Typography variant="body2" component="p" marginY={2}>
            <b>Launch site:</b> {launch.launch_site.site_name_long}
          </Typography>

          <Typography variant="body2" component="p" marginY={2}>
            <b>Launch year:</b> {launch.launch_year}
          </Typography>

          <Details title={launch.mission_name} details={launch.details} />
        </Box>
      </Paper>
    </Grid>
  );
}

export default Mission;
