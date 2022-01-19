import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Company({ data }) {
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Typography variant="subtitle1" component="h3" sx={{ color: "white" }}>
        {data.rocket.company}
      </Typography>
      <Typography variant="subtitle1" component="h3" sx={{ color: "white" }}>
        {data.rocket.country}
      </Typography>
    </Stack>
  );
}

export default Company;
