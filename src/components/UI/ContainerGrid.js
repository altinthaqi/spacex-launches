import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function ContainerGrid(props) {
  return (
    <Container fixed>
      <Grid container spacing={5} marginY={2}>
        {props.children}
      </Grid>
    </Container>
  );
}

export default ContainerGrid;
