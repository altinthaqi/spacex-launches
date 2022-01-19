import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function LinkItem(props) {
  return (
    <Link to={props.path}>
      <Typography
        variant="body2"
        component="p"
        marginX={1}
        sx={{ color: "white", display: { xs: "none", sm: "block" } }}
      >
        {props.name}
      </Typography>
    </Link>
  );
}

export default LinkItem;
