import React from "react";
import Box from "@mui/material/Box";
import LinkItem from "./LinkItem";

function Links() {
  const rocketLinks = [
    { id: "1", rocketPath: "/falcon9", rocketName: "Falcon 9" },
    { id: "2", rocketPath: "/falconheavy", rocketName: "Falcon Heavy" },
    { id: "3", rocketPath: "/starship", rocketName: "Starship" },
  ];

  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      {rocketLinks.map((rocket) => (
        <LinkItem
          key={rocket.id}
          path={rocket.rocketPath}
          name={rocket.rocketName}
        />
      ))}
    </Box>
  );
}

export default Links;
