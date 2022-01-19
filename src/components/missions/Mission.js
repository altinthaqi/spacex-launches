import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Image } from "./MissionStyled";
import Content from "./Content";

function Mission({ launch }) {
  return (
    <Grid item xs={12} sm={12} md={6}>
      <Paper elevation={5}>
        <Image src={launch.links.flickr_images[0]} alt={launch.mission_name} />
        <Content launch={launch} />
      </Paper>
    </Grid>
  );
}

export default Mission;
