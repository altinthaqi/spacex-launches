import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Links() {
  const rocketLinks = [
    { rocketPath: "/falcon1", rocketName: "Falcon 1" },
    { rocketPath: "/falcon9", rocketName: "Falcon 9" },
    { rocketPath: "/falconheavy", rocketName: "Falcon Heavy" },
    { rocketPath: "/starship", rocketName: "Starship" },
  ];

  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      {rocketLinks.map((rocket) => (
        <Link to={rocket.rocketPath}>
          <Typography
            variant="body2"
            component="p"
            marginX={1}
            sx={{ color: "white", display: { xs: "none", sm: "block" } }}
          >
            {rocket.rocketName}
          </Typography>
        </Link>
      ))}
    </Box>
  );
}

export default Links;
