import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function ContainerGrid({ children }) {
  return (
    <Container fixed>
      <Grid container spacing={5} marginY={2}>
        {children}
      </Grid>
    </Container>
  );
}

export default ContainerGrid;
