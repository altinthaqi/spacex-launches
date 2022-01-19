import React from "react";
import Typography from "@mui/material/Typography";

function Details({ data }) {
  return (
    <Typography
      maxWidth={600}
      textAlign="center"
      mt={4}
      marginX={2}
      variant="body1"
      component="h3"
      sx={{ color: "white", fontWeight: 500 }}
    >
      {data.rocket.description}
    </Typography>
  );
}

export default Details;
