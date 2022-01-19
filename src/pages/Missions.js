import React from "react";
import { useMissions } from "../hooks/useMissions";
import { NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// {launches.map((launch) => (
//   <NavLink to={`/${launch.rocket.rocket.id}`}>
//     <p key={launch.mission_id}>Launch name: {launch.mission_name}</p>
//   </NavLink>
// ))}

function Missions() {
  const { error, loading, data } = useMissions();
  if (loading) return <p>Loading...</p>;
  const filteredLaunches = data.launchesPast.filter(
    (launch) => launch.links.flickr_images.length > 0 && launch.details !== null
  );
  console.log(filteredLaunches);

  return (
    <>
      <Container fixed>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Paper elevation={3}>Hello</Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper elevation={3}>Hello</Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper elevation={3}>Hello</Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper elevation={3}>Hello</Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper elevation={3}>Hello</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Missions;
