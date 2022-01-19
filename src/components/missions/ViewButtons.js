import React from "react";
import Stack from "@mui/material/Stack";
import ButtonComponent from "../UI/ButtonComponent";
import { NavLink } from "react-router-dom";

function ViewButtons(props) {
  return (
    <Stack spacing={2} direction="row" justifyContent="center">
      <ButtonComponent onClick={props.handleOpen} name={"View Details"} />
      <NavLink to={`/${props.rocketPath}`}>
        <ButtonComponent name={"View Rocket"} />
      </NavLink>
    </Stack>
  );
}

export default ViewButtons;
