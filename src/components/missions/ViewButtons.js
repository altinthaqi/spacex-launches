import React from "react";
import Stack from "@mui/material/Stack";
import ButtonComponent from "../UI/ButtonComponent";

function ViewButtons(props) {
  return (
    <Stack spacing={2} direction="row" justifyContent="center">
      <ButtonComponent onClick={props.handleOpen} name={"View Details"} />
      <ButtonComponent name={"View Rocket"} />
    </Stack>
  );
}

export default ViewButtons;
