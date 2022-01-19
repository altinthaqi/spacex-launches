import React from "react";
import Button from "@mui/material/Button";

function ButtonComponent(props) {
  return (
    <Button onClick={props.onClick} variant="outlined">
      {props.name}
    </Button>
  );
}

export default ButtonComponent;
