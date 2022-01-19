import React from "react";

import Box from "@mui/material/Box";

import Title from "./Title";
import Details from "./Details";
import Company from "./Company";

function Content({ rocketInfo, data }) {
  return (
    <Box
      justifyContent="center"
      maxWidth="600px"
      width="100%"
      height="90vh"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Title rocketInfo={rocketInfo} />
      <Company data={data} />
      <Details data={data} />
    </Box>
  );
}

export default Content;
